var ruZhus;
var editIndex = -1;
var optFlag = 0;
$(document).ready(function () {
    $('#inpJzSj').datetimepicker({language:  'zh-CN',format: 'yyyy-mm-dd hh:ii',weekStart: 7,todayBtn:  1,autoclose: 1,todayHighlight: 1,startView: 2,forceParse: 0,showMeridian: 1});
    $("#inpRzTs").keyup(function (e) {
        var je = parseFloat($("#inpRzTs").val()) * parseFloat($("#inpJiaGe").val());
        $("#inpJinE").val(je);
    });
});

function jxRuZhu(json) {
    $("#data_table_body tr").remove();
    ruZhus = [];
    ruZhus = json.list;
    $.each(json.list, function (index, item) { //遍历返回的json
        var trStr = '<tr><td>' + item.keHu + '</td><td>' + item.fjHao + '</td><td>' + item.name + '</td><td>' + item.sfzHao + '</td><td>' + item.dianHua + '</td><td>' + item.rzSj + '</td><td>' + item.jzSj + '</td><td>' + item.state + '</td><td>' + item.remark + '</td><td>'
                + '<button class="btn btn-info btn-xs icon-file-alt" onclick="detailRuZhu(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button>&nbsp;'
                + '<button class="btn btn-info btn-xs icon-check" onclick="checkRuZhu(' + index + ' );" style="padding-top: 4px;padding-bottom: 3px;"></button></td></tr>';
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

function detailRuZhu(index) {
    optFlag = 2;
    if (ruZhus[index] === undefined) {
        return alert("请选择入住");
    }
    var ruZhu = ruZhus[index];
    editIndex = index;
    $("#ruZhuModel_title").html("详细信息");
    $("#btnSave").html("关闭");
    $("#dvContent input,#dvContent select").attr("disabled", "disabled");
    $("#dvJzDetail input,#dvJzDetail select").attr("disabled", "disabled");
    $("#inpJzSj").val(getNowFormatDate());
    $("#inpFangXing").val(ruZhu.fangXing);
    $("#inpJzSj").val(ruZhu.jzSj);
    $("#inpRzTs").val(ruZhu.rzTs);
    $("#inpJinE").val(ruZhu.jinE);
    $("#inpJiaGe").val(ruZhu.jiaGe);
    $("#inpFjHao").val(ruZhu.fjHao);
    $("#inpRzSj").val(ruZhu.rzSj);
    $("#inpName").val(ruZhu.name);
    $("#inpSex").val(ruZhu.sex);
    $("#inpSfzHao").val(ruZhu.sfzHao);
    $("#inpDianHua").val(ruZhu.dianHua);
    $("#inpKeHu").val(ruZhu.keHu);
    $("#inpState").val(ruZhu.state);
    $("#inpRemark").val(ruZhu.remark);
    $("#ruZhuModal").modal("show");
}

function checkRuZhu(index) {
    optFlag = 1;
    if (ruZhus[index] === undefined) {
        return alert("请选择入住");
    }
    var ruZhu = ruZhus[index];
    if (ruZhu.state !== "已生效") {
        return alert("只有已生效的记录才能结账");
    }
    editIndex = index;
    $("#ruZhuModel_title").html("结账");
    $("#btnSave").html("结账");
    $("#dvContent input,#dvContent select").attr("disabled", "disabled");
    $("#dvJzDetail input,#dvJzDetail select").removeAttr("disabled");
    $("#inpJzSj").val(getNowFormatDate());
    $("#inpFangXing").val(ruZhu.fangXing);
    $("#inpJiaGe").val(ruZhu.jiaGe);
    $("#inpFjHao").val(ruZhu.fjHao);
    $("#inpRzSj").val(ruZhu.rzSj);
    $("#inpName").val(ruZhu.name);
    $("#inpSex").val(ruZhu.sex);
    $("#inpSfzHao").val(ruZhu.sfzHao);
    $("#inpDianHua").val(ruZhu.dianHua);
    $("#inpKeHu").val(ruZhu.keHu);
    $("#inpState").val(ruZhu.state);
    $("#inpRemark").val(ruZhu.remark);
    $("#ruZhuModal").modal("show");
}

function saveRuZhu() {
    if(optFlag === 2){
        $("#ruZhuModal").modal("hide");
        return;
    }
    var ruZhu = {};
    var url = "";
    if (ruZhus[editIndex] === undefined) {
        return;
    }
    ruZhu = ruZhus[editIndex];
    url = "/LbmHotel/ruZhu/jzRuZhu";
    ruZhu.rzTs = parseInt($("#inpRzTs").val());
    ruZhu.jinE = parseFloat($("#inpJinE").val());
    ruZhu.jzSj = $("#inpJzSj").val() + ":00";
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
