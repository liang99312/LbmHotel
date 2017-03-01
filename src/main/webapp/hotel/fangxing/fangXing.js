var fangXings;
var optFlag = 1;
var editIndex = -1;
$(document).ready(function () {
    getUserNames(setTrager);
});

function setTrager(){
    $('#inpFuzeRen').AutoComplete({'data': h_userNames.list}); 
}

function jxFangXing(json) {
    $("#data_table_body tr").remove();
    fangXings = [];
    fangXings = json.list;
    $.each(json.list, function (index, item) { //遍历返回的json
        var trStr = '<tr><td>' + item.fxHao + '</td><td>' + item.name + '</td><td>' + item.jiaGe + '</td><td>' + item.remark + '</td><td>'
                + '<button class="btn btn-info btn-xs icon-edit" onclick="editFangXing(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button>&nbsp;'
                + '<button class="btn btn-danger btn-xs icon-remove" onclick="delFangXing(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button></td></tr>';
        $("#data_table_body").append(trStr);
    });
}

function selectFangXing() {
    var fangXing = {};
    var tj = {"pageSize": 20, "currentPage": 1};
    if ($("#selFxHao").val() !== "") {
        fangXing.fxHao = $("#selFxHao").val();
    }
    if ($("#selState").val() !== "") {
        fangXing.state = $("#selState").val();
    }
    tj.paramters = fangXing;
    var options = {};
    options.url = "/LbmHotel/fangXing/getFangXingPage";
    options.tj = tj;
    options.func = jxFangXing;
    options.ul = "#example";
    queryPaginator(options);
}

function addFangXing() {
    optFlag = 1;
    $("#fangXingModel_title").html("新增房型");
    $("#inpFxHao").val("");
    $("#inpName").val("");
    $("#inpJiaGe").val("0");
    $("#inpRemark").val("");
    $("#fangXingModal").modal("show");
}


function editFangXing(index) {
    optFlag = 2;
    if (fangXings[index] === undefined) {
        optFlag = 1;
        return alert("请选择房型");
    }
    var fangXing = fangXings[index];
    editIndex = index;
    $("#fangXingModel_title").html("修改房型");
    $("#inpFxHao").val(fangXing.fxHao);
    $("#inpName").val(fangXing.name);
    $("#inpJiaGe").val(fangXing.jiaGe);
    $("#inpRemark").val(fangXing.remark);
    $("#fangXingModal").modal("show");
}

function saveFangXing() {
    var fangXing = {};
    var url = "";
    if (optFlag === 2) {
        if (fangXings[editIndex] === undefined) {
            return;
        }
        fangXing = fangXings[editIndex];
        url = "/LbmHotel/fangXing/updateFangXing";
    } else if (optFlag === 1) {
        url = "/LbmHotel/fangXing/addFangXing";
    }
    fangXing.fxHao = $("#inpFxHao").val();
    fangXing.name = $("#inpName").val();
    fangXing.jiaGe = parseFloat($("#inpJiaGe").val(),2);
    fangXing.remark = $("#inpRemark").val();
    var dataString = {"model":JSON.stringify(fangXing)};
    $("#formFangXing").ajaxSubmit({
        url: url,
        data: dataString,
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("保存失败");
        },
        success: function (json) {
            if (json.result) {
                $("#fangXingModal").modal("hide");
                selectFangXing();
            } else
                alert("保存失败:" + json.msg !== undefined ? json.msg : "");
        }
    });
}

function delFangXing(index) {
    if (fangXings[index] === undefined) {
        return alert("请选择房型");
    }
    var fangXing = fangXings[index];
    if (confirm("确定删除房型：" + fangXing.fxHao + "?")) {
        $.ajax({
            url: "/LbmHotel/fangXing/delFangXing",
            data: JSON.stringify(fangXing),
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
                    selectFangXing();
            }
        });
    }
}
