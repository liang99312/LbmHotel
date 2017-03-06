var ruZhus;
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

function jxRuZhu(json) {
    $("#data_table_body tr").remove();
    ruZhus = [];
    ruZhus = json.list;
    $.each(json.list, function (index, item) { //遍历返回的json
        var trStr = '<tr><td>' + item.fjHao + '</td><td>' + item.keHu + '</td><td>' + item.zjHao + '</td><td>' + item.ydSj + '</td><td>' + item.rzSj + '</td><td>' + item.fuzeRen + '</td><td>' + item.state + '</td><td>' + item.remark + '</td><td>'
                + '<button class="btn btn-info btn-xs icon-edit" onclick="editRuZhu(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button>&nbsp;'
                + '<button class="btn btn-info btn-xs icon-check" onclick="checkRuZhu(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button>&nbsp;'
                + '<button class="btn btn-danger btn-xs icon-remove" onclick="delRuZhu(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button></td></tr>';
        $("#data_table_body").append(trStr);
    });
}

function selectRuZhu() {
    var ruZhu = {};
    var tj = {"pageSize": 20, "currentPage": 1};
    if ($("#selFjHao").val() !== "") {
        ruZhu.fjHao = $("#selFjHao").val();
    }
    if ($("#selState").val() !== "") {
        ruZhu.state = $("#selState").val();
    }
    tj.paramters = ruZhu;
    var options = {};
    options.url = "/LbmHotel/ruZhu/getRuZhuPage";
    options.tj = tj;
    options.func = jxRuZhu;
    options.ul = "#example";
    queryPaginator(options);
}

function addRuZhu() {
    optFlag = 1;
    $("#ruZhuModel_title").html("新增预定");
    $("#dvContent input").val("").removeAttr("readonly");
    $("#inpState").val("已生效").attr("readonly","readonly");
    $("#btnSave").html("保存");
    $("#ruZhuModal").modal("show");
}


function editRuZhu(index) {
    optFlag = 2;
    if (ruZhus[index] === undefined) {
        optFlag = 1;
        return alert("请选择预定");
    }
    var ruZhu = ruZhus[index];
    editIndex = index;
    $("#ruZhuModel_title").html("修改预定");
    $("#btnSave").html("保存");
    selFangXing = {};
    selFangXing.id = ruZhu.fangXing_id;
    selFangXing.name = ruZhu.fangXing;
    selKeHu = {};
    selKeHu.id = ruZhu.keHu_id;
    selKeHu.name = ruZhu.keHu;
    $("#dvContent input").removeAttr("readonly");
    $("#inpFangXing").val(ruZhu.fangXing);
    $("#inpRzSj").val(ruZhu.rzSj);
    $("#inpRzTs").val(ruZhu.rzTs);
    $("#inpRzFjs").val(ruZhu.rzFjs);
    $("#inpName").val(ruZhu.nme);
    $("#inpSex").val(ruZhu.sex);
    $("#inpSfzHao").val(ruZhu.sfzHao);
    $("#inpDianHua").val(ruZhu.dianHua);
    $("#inpKeHu").val(ruZhu.keHu);
    $("#inpState").val(ruZhu.state).attr("readonly","readonly");
    $("#inpRemark").val(ruZhu.remark);
    $("#ruZhuModal").modal("show");
}

function checkRuZhu(){
    optFlag = 3;
    if (ruZhus[index] === undefined) {
        optFlag = 1;
        return alert("请选择预定");
    }
    var ruZhu = ruZhus[index];
    editIndex = index;
    $("#ruZhuModel_title").html("审核预定");
    $("#btnSave").html("审核");
    selFangXing = {};
    selFangXing.id = ruZhu.fangXing_id;
    selFangXing.name = ruZhu.fangXing;
    selFangXing.jiaGe = ruZhu.jiaGe;
    selKeHu = {};
    selKeHu.id = ruZhu.keHu_id;
    selKeHu.name = ruZhu.keHu;
    $("#inpFangXing").val(ruZhu.fangXing);
    $("#inpRzSj").val(ruZhu.rzSj);
    $("#inpRzTs").val(ruZhu.rzTs);
    $("#inpRzFjs").val(ruZhu.rzFjs);
    $("#inpName").val(ruZhu.nme);
    $("#inpSex").val(ruZhu.sex);
    $("#inpSfzHao").val(ruZhu.sfzHao);
    $("#inpDianHua").val(ruZhu.dianHua);
    $("#inpKeHu").val(ruZhu.keHu);
    $("#inpState").val(ruZhu.state).removeAttr("readonly");
    $("#inpRemark").val(ruZhu.remark);
    $("#ruZhuModal").modal("show");
}

function saveRuZhu() {
    var ruZhu = {};
    var url = "";
    if (optFlag === 2) {
        if (ruZhus[editIndex] === undefined) {
            return;
        }
        ruZhu = ruZhus[editIndex];
        url = "/LbmHotel/ruZhu/updateRuZhu";
    } else if (optFlag === 3) {
        if (ruZhus[editIndex] === undefined) {
            return;
        }
        ruZhu = ruZhus[editIndex];
        url = "/LbmHotel/ruZhu/updateRuZhu";
    } else if (optFlag === 1) {
        url = "/LbmHotel/ruZhu/addRuZhu";
    }
    if(selFangXing === undefined || selFangXing === null){
        return alert("请选择房型");
    }
    if(selKeHu !== undefined && selKeHu !== null){
        ruZhu.keHu = selKeHu.name;
        ruZhu.keHu_id = selKeHu.id;
    }
    ruZhu.fangXing = selFangXing.name;
    ruZhu.fangXing_id = selFangXing.id;
    ruZhu.jiaGe = selFangXing.jiaGe;
    ruZhu.rzSj = $("#inpRzSj").val();
    ruZhu.rzTs = $("#inpRzTs").val();
    ruZhu.rzFjs = $("#inpRzFjs").val();
    ruZhu.name = $("#inpName").val();
    ruZhu.sex = $("#inpSex").val();
    ruZhu.sfzHao = $("#inpSfzHao").val();
    ruZhu.dianHua = $("#inpDianHua").val();
    ruZhu.remark = $("#inpRemark").val();
    $.ajax({
        url: url,
        data: JSON.stringify(ruZhu),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("保存失败");
        },
        success: function (json) {
            if (json.result) {
                $("#ruZhuModal").modal("hide");
                selectRuZhu();
            } else
                alert("保存失败:" + json.msg !== undefined ? json.msg : "");
        }
    });
}

function delRuZhu(index) {
    if (ruZhus[index] === undefined) {
        return alert("请选择预定");
    }
    var ruZhu = ruZhus[index];
    if (confirm("确定删除预定：" + ruZhu.fjHao + "?")) {
        $.ajax({
            url: "/LbmHotel/ruZhu/delRuZhu",
            data: JSON.stringify(ruZhu),
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
                    selectRuZhu();
            }
        });
    }
}
