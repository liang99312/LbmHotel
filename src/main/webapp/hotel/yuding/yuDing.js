var yuDings;
var optFlag = 1;
var editIndex = -1;
var selFangXing;
var selKeHu;
$(document).ready(function () {
    getKeHus(setTrager_kh);
    getFangXings(setTrager_fx);
    $('#inpRzSj').datetimepicker({language:  'zh-CN',format: 'yyyy-mm-dd hh:ii',weekStart: 7,todayBtn:  1,autoclose: 1,todayHighlight: 1,startView: 2,forceParse: 0,showMeridian: 1});
});

function setTrager_kh(){
    $('#inpKeHu').AutoComplete({'data': h_keHus.list,'afterSelectedHandler':selectKeHu}); 
}

function setTrager_fx(){
    $('#inpFangXing').AutoComplete({'data': h_fangXings.list,'afterSelectedHandler':selectFangXing}); 
}

function selectFangXing(json){
    selFangXing = json;
    $("#inpFangXing").val(selFangXing.name);
    $("#inpJiaGe").val(selFangXing.jiaGe);
}

function selectKeHu(json){
    selKeHu = json;
    if($("#inpName").val() === ""){
        $("#inpName").val(selKeHu.name);
    }
    if($("#inpSex").val() === ""){
        $("#inpSex").val(selKeHu.sex);
    }
    if($("#inpSfzHao").val() === ""){
        $("#inpSfzHao").val(selKeHu.sfzHao);
    }
    if($("#inpDianHua").val() === ""){
        $("#inpDianHua").val(selKeHu.dianHua);
    }
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
    if ($("#selZjHao").val() !== "") {
        yuDing.zjHao = $("#selZjHao").val();
    }
    if ($("#selState").val() !== "") {
        yuDing.state = $("#selState").val();
    }
    if ($("#selName").val() !== "") {
        yuDing.name = $("#selName").val();
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
    $("#yuDingModel_title").html("新增预订");
    $("#dvContent input,#dvContent select").val("").removeAttr("disabled");
    $("#inpRzTs").val("1");
    $("#inpRzFjs").val("1");
    $("#inpState").val("未生效").attr("disabled","disabled");
    $("#inpFuzeRen").attr("disabled","disabled");
    $("#btnSave").html("保存");
    $("#yuDingModal").modal("show");
}


function editYuDing(index) {
    optFlag = 2;
    if (yuDings[index] === undefined) {
        optFlag = 1;
        return alert("请选择预订");
    }
    var yuDing = yuDings[index];
    if(yuDing.state !== "未生效"){
        return alert(yuDing.state + "的预订不能修改");
    }
    editIndex = index;
    $("#yuDingModel_title").html("修改预订");
    $("#btnSave").html("保存");
    selFangXing = {};
    selFangXing.id = yuDing.fangXing_id;
    selFangXing.name = yuDing.fangXing;
    selKeHu = {};
    selKeHu.id = yuDing.keHu_id;
    selKeHu.name = yuDing.keHu;
    $("#inpFangXing").val(yuDing.fangXing);
    $("#inpJiaGe").val(yuDing.jiaGe);
    $("#inpRzSj").val(yuDing.rzSj);
    $("#inpRzTs").val(yuDing.rzTs);
    $("#inpRzFjs").val(yuDing.rzFjs);
    $("#inpName").val(yuDing.name);
    $("#inpSex").val(yuDing.sex);
    $("#inpSfzHao").val(yuDing.sfzHao);
    $("#inpDianHua").val(yuDing.dianHua);
    $("#inpKeHu").val(yuDing.keHu);
    $("#inpState").val(yuDing.state).attr("disabled","disabled");
    $("#inpFuzeRen").val(yuDing.fuzeRen).attr("disabled","disabled");
    $("#inpRemark").val(yuDing.remark);
    $("#yuDingModal").modal("show");
}

function checkYuDing(index){
    optFlag = 3;
    if (yuDings[index] === undefined) {
        optFlag = 1;
        return alert("请选择预订");
    }
    var yuDing = yuDings[index];
    editIndex = index;
    $("#yuDingModel_title").html("审核预订");
    $("#btnSave").html("审核");
    selFangXing = {};
    selFangXing.id = yuDing.fangXing_id;
    selFangXing.name = yuDing.fangXing;
    selFangXing.jiaGe = yuDing.jiaGe;
    selKeHu = {};
    selKeHu.id = yuDing.keHu_id;
    selKeHu.name = yuDing.keHu;
    $("#dvContent input,#dvContent select").attr("disabled","disabled");
    $("#inpFangXing").val(yuDing.fangXing);
    $("#inpJiaGe").val(yuDing.jiaGe);
    $("#inpRzSj").val(yuDing.rzSj);
    $("#inpRzTs").val(yuDing.rzTs);
    $("#inpRzFjs").val(yuDing.rzFjs);
    $("#inpName").val(yuDing.name);
    $("#inpSex").val(yuDing.sex);
    $("#inpSfzHao").val(yuDing.sfzHao);
    $("#inpDianHua").val(yuDing.dianHua);
    $("#inpKeHu").val(yuDing.keHu);
    $("#inpState").val(yuDing.state).removeAttr("disabled");
    $("#inpFuzeRen").val(yuDing.fuzeRen).attr("disabled","disabled");
    $("#inpRemark").val(yuDing.remark).removeAttr("disabled");;
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
        url = "/LbmHotel/yuDing/checkYuDing";
    } else if (optFlag === 1) {
        url = "/LbmHotel/yuDing/addYuDing";
    }
    if($("#inpRzSj").val() === ""){
        return alert("请选择入住时间");
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
    yuDing.jiaGe = parseFloat($("#inpJiaGe").val());
    yuDing.rzSj = $("#inpRzSj").val() + ":00";
    yuDing.rzTs = $("#inpRzTs").val();
    yuDing.rzFjs = $("#inpRzFjs").val();
    yuDing.name = $("#inpName").val();
    yuDing.sex = $("#inpSex").val();
    yuDing.sfzHao = $("#inpSfzHao").val();
    yuDing.dianHua = $("#inpDianHua").val();
    yuDing.state = $("#inpState").val();
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
        return alert("请选择预订");
    }
    var yuDing = yuDings[index];
    if (confirm("确定删除预订：" + yuDing.zjHao + "?")) {
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
