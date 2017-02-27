var fangJians;
var optFlag = 1;
var editIndex = -1;
$(document).ready(function () {
    getUserNames(setTrager);
});

function setTrager(){
    $('#inpFuzeRen').AutoComplete({'data': h_userNames.list}); 
}

function jxFangJian(json) {
    $("#data_table_body tr").remove();
    fangJians = [];
    fangJians = json.list;
    $.each(json.list, function (index, item) { //遍历返回的json
        var trStr = '<tr><td>' + item.fjHao + '</td><td>' + item.luoCeng + '</td><td>' + item.jiBie + '</td><td>' + item.jiaGe + '</td><td>' + item.fuzeRen + '</td><td>' + item.state + '</td><td>' + item.remark + '</td><td>'
                + '<button class="btn btn-info btn-xs icon-edit" onclick="editFangJian(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button>&nbsp;'
                + '<button class="btn btn-danger btn-xs icon-remove" onclick="delFangJian(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button></td></tr>';
        $("#data_table_body").append(trStr);
    });
}

function selectFangJian() {
    var fangJian = {};
    var tj = {"pageSize": 20, "currentPage": 1};
    if ($("#selFjHao").val() !== "") {
        fangJian.fjHao = $("#selFjHao").val();
    }
    if ($("#selState").val() !== "") {
        fangJian.state = $("#selState").val();
    }
    tj.paramters = fangJian;
    var options = {};
    options.url = "/LbmHotel/fangJian/getFangJianPage";
    options.tj = tj;
    options.func = jxFangJian;
    options.ul = "#example";
    queryPaginator(options);
}

function addFangJian() {
    optFlag = 1;
    $("#fangJianModel_title").html("新增房型");
    $("#inpFjHao").val("");
    $("#inpLuoCeng").val("");
    $("#inpJiBie").val("");
    $("#inpJiaGe").val("0");
    $("#inpState").val("就绪").attr("readonly", "true");
    $("#inpFuzeRen").val("");
    $("#inpRemark").val("");
    $("#fangJianModal").modal("show");
}


function editFangJian(index) {
    optFlag = 2;
    if (fangJians[index] === undefined) {
        optFlag = 1;
        return alert("请选择房型");
    }
    var fangJian = fangJians[index];
    editIndex = index;
    $("#fangJianModel_title").html("修改房型");
    $("#inpFjHao").val(fangJian.fjHao);
    $("#inpLuoCeng").val(fangJian.luoCeng);
    $("#inpJiBie").val(fangJian.jiBie);
    $("#inpJiaGe").val(fangJian.jiaGe);
    $("#inpState").val(fangJian.state).removeAttr("readonly");
    $("#inpFuzeRen").val(fangJian.fuzeRen);
    $("#inpRemark").val(fangJian.remark);
    $("#fangJianModal").modal("show");
}

function saveFangJian() {
    var fangJian = {};
    var url = "";
    if (optFlag === 2) {
        if (fangJians[editIndex] === undefined) {
            return;
        }
        fangJian = fangJians[editIndex];
        url = "/LbmHotel/fangJian/updateFangJian";
    } else if (optFlag === 1) {
        url = "/LbmHotel/fangJian/addFangJian";
    }
    fangJian.fjHao = $("#inpFjHao").val();
    fangJian.luoCeng = $("#inpLuoCeng").val();
    fangJian.jiBie = $("#inpJiBie").val();
    fangJian.jiaGe = parseFloat($("#inpJiaGe").val(),2);
    fangJian.state = $("#inpState").val();
    fangJian.fuzeRen = $("#inpFuzeRen").val();
    fangJian.remark = $("#inpRemark").val();
    $.ajax({
        url: url,
        data: JSON.stringify(fangJian),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("保存失败");
        },
        success: function (json) {
            if (json.result) {
                $("#fangJianModal").modal("hide");
                selectFangJian();
            } else
                alert("保存失败:" + json.msg !== undefined ? json.msg : "");
        }
    });
}

function delFangJian(index) {
    if (fangJians[index] === undefined) {
        return alert("请选择房型");
    }
    var fangJian = fangJians[index];
    if (confirm("确定删除房型：" + fangJian.fjHao + "?")) {
        $.ajax({
            url: "/LbmHotel/fangJian/delFangJian",
            data: JSON.stringify(fangJian),
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
                    selectFangJian();
            }
        });
    }
}
