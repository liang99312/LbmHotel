var yuDings;
var optFlag = 1;
var editIndex = -1;
var selFangXing;
var seKeHu;
$(document).ready(function () {
    //getUserNames(setTrager);
    getKeHus(setTrager_kh);
    getFangXings(setTrager_fx);
    $('#inpRzSj').datetimepicker({language:  'zh-CN',format: 'yyyy-mm-dd hh:ii',weekStart: 7,todayBtn:  1,autoclose: 1,todayHighlight: 1,startView: 2,forceParse: 0,showMeridian: 1});
});

function setTrager_kh(){
    $('#inpKeHu').AutoComplete({'data': h_keHus.list}); 
}

function setTrager_fx(){
    $('#inpFangXing').AutoComplete({'data': h_fangXings.list,'afterSelectedHandler':selectFangXing}); 
}

function selectFangXing(json){
    selFangXing = json;
}

function setTrager(){
    //$('#inpFuzeRen').AutoComplete({'data': h_userNames.list}); 
}

function jxYuDing(json) {
    $("#data_table_body tr").remove();
    yuDings = [];
    yuDings = json.list;
    $.each(json.list, function (index, item) { //遍历返回的json
        var trStr = '<tr><td>' + item.zjHao + '</td><td>' + item.name + '</td><td>' + item.keHu + '</td><td>' + item.sfzHao + '</td><td>' + item.dianHua + '</td><td>' + item.ydSj + '</td><td>' + item.rzSj + '</td><td>'
                + item.rzTs + '</td><td>' + item.rzFjs + '</td><td>' + item.state + '</td><td>' + item.remark + '</td><td>'
                + '<button class="btn btn-info btn-xs icon-edit" onclick="editYuDing(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button>&nbsp;'
                + '<button class="btn btn-info btn-xs icon-check" onclick="checkYuDing(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button>&nbsp;'
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
    $("#dvContent input").val("").removeAttr("readonly");
    $("#inpState").val("已生效").attr("readonly","readonly");
    $("#btnSave").html("保存");
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
    $("#btnSave").html("保存");
    selFangXing = {};
    selFangXing.id = yuDing.fangXing_id;
    selFangXing.name = yuDing.fangXing;
    selKeHu = {};
    selKeHu.id = yuDing.keHu_id;
    selKeHu.name = yuDing.keHu;
    $("#dvContent input").removeAttr("readonly");
    $("#inpFangXing").val(yuDing.fangXing);
    $("#inpRzSj").val(yuDing.rzSj);
    $("#inpRzTs").val(yuDing.rzTs);
    $("#inpRzFjs").val(yuDing.rzFjs);
    $("#inpName").val(yuDing.nme);
    $("#inpSex").val(yuDing.sex);
    $("#inpSfzHao").val(yuDing.sfzHao);
    $("#inpDianHua").val(yuDing.dianHua);
    $("#inpKeHu").val(yuDing.keHu);
    $("#inpState").val(yuDing.state).attr("readonly","readonly");
    $("#inpRemark").val(yuDing.remark);
    $("#yuDingModal").modal("show");
}

function checkYuDing(){
    optFlag = 3;
    if (yuDings[index] === undefined) {
        optFlag = 1;
        return alert("请选择预定");
    }
    var yuDing = yuDings[index];
    editIndex = index;
    $("#yuDingModel_title").html("审核预定");
    $("#btnSave").html("审核");
    selFangXing = {};
    selFangXing.id = yuDing.fangXing_id;
    selFangXing.name = yuDing.fangXing;
    selFangXing.jiaGe = yuDing.jiaGe;
    selKeHu = {};
    selKeHu.id = yuDing.keHu_id;
    selKeHu.name = yuDing.keHu;
    $("#inpFangXing").val(yuDing.fangXing);
    $("#inpRzSj").val(yuDing.rzSj);
    $("#inpRzTs").val(yuDing.rzTs);
    $("#inpRzFjs").val(yuDing.rzFjs);
    $("#inpName").val(yuDing.nme);
    $("#inpSex").val(yuDing.sex);
    $("#inpSfzHao").val(yuDing.sfzHao);
    $("#inpDianHua").val(yuDing.dianHua);
    $("#inpKeHu").val(yuDing.keHu);
    $("#inpState").val(yuDing.state).removeAttr("readonly");
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
    } else if (optFlag === 3) {
        if (yuDings[editIndex] === undefined) {
            return;
        }
        yuDing = yuDings[editIndex];
        url = "/LbmHotel/yuDing/updateYuDing";
    } else if (optFlag === 1) {
        url = "/LbmHotel/yuDing/addYuDing";
    }
    if(selFangXing === undefined || selFangXing === null){
        return alert("请选择房型");
    }
    if(selKeHu !== undefined && selKeHu !== null){
        yuDing.keHu = selKeHu.name;
        yuDing.keHu_id = selKeHu.id;
    }
    yuDing.fangXing = selFangXing.name;
    yuDing.fangXing_id = selFangXing.id;
    yuDing.jiaGe = selFangXing.jiaGe;
    yuDing.rzSj = $("#inpRzSj").val();
    yuDing.rzTs = $("#inpRzTs").val();
    yuDing.rzFjs = $("#inpRzFjs").val();
    yuDing.name = $("#inpName").val();
    yuDing.sex = $("#inpSex").val();
    yuDing.sfzHao = $("#inpSfzHao").val();
    yuDing.dianHua = $("#inpDianHua").val();
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
