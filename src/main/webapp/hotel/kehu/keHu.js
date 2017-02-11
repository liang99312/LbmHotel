var keHus;
var optFlag = 1;
var editIndex = -1;
$(document).ready(function () {

});

function jxKeHu(json) {
    $("#data_table_body tr").remove();
    keHus = [];
    keHus = json.list;
    $.each(json.list, function (index, item) { //遍历返回的json
        var trStr = '<tr><td>' + item.bianHao + '</td><td>' + item.name + '</td><td>' + item.sex + '</td><td>' + item.age + '</td><td>' + item.sfzHao + '</td><td>' + item.dianHua + '</td><td>' + item.dengJi + '</td><td>' + item.remark + '</td><td>'
                + '<button class="btn btn-info btn-xs icon-edit" onclick="editKeHu(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button>&nbsp;'
                + '<button class="btn btn-danger btn-xs icon-remove" onclick="delKeHu(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button></td></tr>';
        $("#data_table_body").append(trStr);
    });
}

function selectKeHu() {
    var keHu = {};
    var tj = {"pageSize": 20, "currentPage": 1};
    if ($("#selBianHao").val() !== "") {
        keHu.bianHao = $("#selBianHao").val();
    }
    if ($("#selDengJi").val() !== "") {
        keHu.dengJi = $("#selDengJi").val();
    }
    tj.paramters = keHu;
    var options = {};
    options.url = "/LbmHotel/keHu/getKeHuPage";
    options.tj = tj;
    options.func = jxKeHu;
    options.ul = "#example";
    queryPaginator(options);
}

function addKeHu() {
    optFlag = 1;
    $("#keHuModel_title").html("新增客户");
    $("#inpBianHao").val("");
    $("#inpName").val("");
    $("#inpSex").val("");
    $("#inpAge").val("0");
    $("#inpDengJi").val("");
    $("#inpSfzHao").val("");
    $("#inpDianHua").val("");
    $("#inpRemark").val("");
    $("#keHuModal").modal("show");
}


function editKeHu(index) {
    optFlag = 2;
    if (keHus[index] === undefined) {
        optFlag = 1;
        return alert("请选择客户");
    }
    var keHu = keHus[index];
    editIndex = index;
    $("#keHuModel_title").html("修改客户");
    $("#inpBianHao").val(keHu.bianHao);
    $("#inpName").val(keHu.name);
    $("#inpSex").val(keHu.sex);
    $("#inpAge").val(keHu.age);
    $("#inpDengJi").val(keHu.dengJi).removeAttr("readonly");
    $("#inpSfzHao").val(keHu.sfzHao);
    $("#inpDianHua").val(keHu.dianHua);
    $("#inpRemark").val(keHu.remark);
    $("#keHuModal").modal("show");
}

function saveKeHu() {
    var keHu = {};
    var url = "";
    if (optFlag === 2) {
        if (keHus[editIndex] === undefined) {
            return;
        }
        keHu = keHus[editIndex];
        url = "/LbmHotel/keHu/updateKeHu";
    } else if (optFlag === 1) {
        url = "/LbmHotel/keHu/addKeHu";
    }
    keHu.bianHao = $("#inpBianHao").val();
    keHu.name = $("#inpName").val();
    keHu.sex = $("#inpSex").val();
    keHu.age = parseFloat($("#inpAge").val(),2);
    keHu.dengJi = $("#inpDengJi").val();
    keHu.sfzHao = $("#inpSfzHao").val();
    keHu.dianHua = $("#inpDianHua").val();
    keHu.remark = $("#inpRemark").val();
    $.ajax({
        url: url,
        data: JSON.stringify(keHu),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("保存失败");
        },
        success: function (json) {
            if (json.result) {
                $("#keHuModal").modal("hide");
                selectKeHu();
            } else
                alert("保存失败:" + json.msg !== undefined ? json.msg : "");
        }
    });
}

function delKeHu(index) {
    if (keHus[index] === undefined) {
        return alert("请选择客户");
    }
    var keHu = keHus[index];
    if (confirm("确定删除客户：" + keHu.bianHao + "?")) {
        $.ajax({
            url: "/LbmHotel/keHu/delKeHu",
            data: JSON.stringify(keHu),
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
                    selectKeHu();
            }
        });
    }
}
