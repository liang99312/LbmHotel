var yuDings;
var optFlag = 1;
var editIndex = -1;
$(document).ready(function () {
    getUserNames(setTrager);
});

function setTrager(){
    $('#inpFuzeRen').AutoComplete({'data': h_userNames.list}); 
}

function jxYuDing(json) {
    $("#data_table_body tr").remove();
    yuDings = [];
    yuDings = json.list;
    $.each(json.list, function (index, item) { //遍历返回的json
        var trStr = '<tr><td>' + item.fjHao + '</td><td>' + item.keHu + '</td><td>' + item.zjHao + '</td><td>' + item.ydSj + '</td><td>' + item.rzSj + '</td><td>' + item.fuzeRen + '</td><td>' + item.state + '</td><td>' + item.remark + '</td><td>'
                + '<button class="btn btn-info btn-xs icon-edit" onclick="editYuDing(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button>&nbsp;'
                + '<button class="btn btn-danger btn-xs icon-remove" onclick="delYuDing(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button></td></tr>';
        $("#data_table_body").append(trStr);
    });
}

function selectYuDing() {
    var yuDing = {};
    var tj = {"pageSize": 20, "currentPage": 1};
    if ($("#selFjHao").val() !== "") {
        yuDing.fjHao = $("#selFjHao").val();
    }
    if ($("#selState").val() !== "") {
        yuDing.state = $("#selState").val();
    }
    tj.paramters = yuDing;
    var options = {};
    options.url = "/LbmHotel/yuDing/getYuDingPage";
    options.tj = tj;
    options.func = jxYuDing;
    options.ul = "#example";
    queryPaginator(options);
}

function addYuDing() {
    optFlag = 1;
    $("#yuDingModel_title").html("新增预定");
    $("#inpFjHao").val("");
    $("#inpLuoCeng").val("");
    $("#inpState").val("就绪").attr("readonly", "true");
    $("#inpFuzeRen").val("");
    $("#inpRemark").val("");
    $("#yuDingModal").modal("show");
}


function editYuDing(index) {
    optFlag = 2;
    if (yuDings[index] === undefined) {
        optFlag = 1;
        return alert("请选择预定");
    }
    var yuDing = yuDings[index];
    editIndex = index;
    $("#yuDingModel_title").html("修改预定");
    $("#inpFjHao").val(yuDing.fjHao);
    $("#inpLuoCeng").val(yuDing.luoCeng);
    $("#inpState").val(yuDing.state).removeAttr("readonly");
    $("#inpFuzeRen").val(yuDing.fuzeRen);
    $("#inpRemark").val(yuDing.remark);
    $("#yuDingModal").modal("show");
}

function saveYuDing() {
    var yuDing = {};
    var url = "";
    if (optFlag === 2) {
        if (yuDings[editIndex] === undefined) {
            return;
        }
        yuDing = yuDings[editIndex];
        url = "/LbmHotel/yuDing/updateYuDing";
    } else if (optFlag === 1) {
        url = "/LbmHotel/yuDing/addYuDing";
    }
    yuDing.fjHao = $("#inpFjHao").val();
    yuDing.luoCeng = $("#inpLuoCeng").val();
    yuDing.state = $("#inpState").val();
    yuDing.fuzeRen = $("#inpFuzeRen").val();
    yuDing.remark = $("#inpRemark").val();
    $.ajax({
        url: url,
        data: JSON.stringify(yuDing),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("保存失败");
        },
        success: function (json) {
            if (json.result) {
                $("#yuDingModal").modal("hide");
                selectYuDing();
            } else
                alert("保存失败:" + json.msg !== undefined ? json.msg : "");
        }
    });
}

function delYuDing(index) {
    if (yuDings[index] === undefined) {
        return alert("请选择预定");
    }
    var yuDing = yuDings[index];
    if (confirm("确定删除预定：" + yuDing.fjHao + "?")) {
        $.ajax({
            url: "/LbmHotel/yuDing/delYuDing",
            data: JSON.stringify(yuDing),
            contentType: "application/json",
            type: "post",
            cache: false,
            error: function (msg, textStatus) {
                alert("删除失败");
            },
            success: function (json) {
                if (!json.result)
                    alert("删除失败:" + json.msg !== undefined ? json.msg : "");
                else
                    selectYuDing();
            }
        });
    }
}
