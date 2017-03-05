var id = 0;
var fangXing;
var loadKeHu;
$(document).ready(function () {

    var args = new Object();
    args = GetUrlParms();
    //如果要查找参数key:
    if (args["id"] !== undefined)
    {
        id = args["id"];
    }
    $('#inpRzSj').datetimepicker({language:  'zh-CN',format: 'yyyy-mm-dd hh:ii',weekStart: 7,todayBtn:  1,autoclose: 1,todayHighlight: 1,startView: 2,forceParse: 0,showMeridian: 1});
    cxFangXing();
    cxKeHu();
});

function cxKeHu() {
    loadKeHu = null;
    $.ajax({
        url: "/LbmHotel/frontend/getLordKeHu",
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
        },
        success: function (json) {
            if (json !== null && json !== "") {
                loadKeHu = json;
            }
        }
    });
}

function GetUrlParms()
{
    var args = new Object();
    var query = location.search.substring(1);//获取查询串   
    var pairs = query.split("&");//在逗号处断开   
    for (var i = 0; i < pairs.length; i++)
    {
        var pos = pairs[i].indexOf('=');//查找name=value   
        if (pos === -1)
            continue;//如果没有找到就跳过   
        var argname = pairs[i].substring(0, pos);//提取name   
        var value = pairs[i].substring(pos + 1);//提取value   
        args[argname] = unescape(value);//存为属性   
    }
    return args;
}

function cxFangXing() {
    if (id > 0) {
        var fangXing = {"id": id};
        $.ajax({
            url: "/LbmHotel/frontend/getFangXing",
            data: JSON.stringify(fangXing),
            contentType: "application/json",
            type: "post",
            cache: false,
            error: function (msg, textStatus) {
            },
            success: function (json) {
                jxFangXing(json.obj);
            }
        });
    }
}

function jxFangXing(json){
    if(json !== undefined && json !== null){
        fangXing = json;
        $("#iZhuTu").attr("src","/LbmHotel/files/"+json.zhuTu);
        $("#iName").html(json.name);
        $("#iJiaGe").html("价格：￥"+json.jiaGe);
        var tps = json.tuPian.split(";");
        var tpStr = "客房细节：<br/>";
        for(var i=0;i<tps.length;i++){
            var e = tps[i];
            if(e !== null && e !== ""){
                var s = "<img style='width:1024px;' src='/LbmHotel/files/"+e+"' /><br/>";
                tpStr = tpStr + s;
            }
        }
        $("#dvTuPian").html(tpStr);
    }
}

function refreshData(){
    cxKeHu();
}

function showYdKf(){
    if(loadKeHu === null){
        return alert("请登录");
    }
    $("#inpFangXing").val(fangXing.name);
    $("#inpName").val(loadKeHu.name);
    $("#inpSex").val(loadKeHu.sex);
    $("#inpSfzHao").val(loadKeHu.sfzHao);
    $("#inpDianHua").val(loadKeHu.dianHua);
    $("#dvYdKf").show();
}

function saveYuDing(){
    var yuDing = {};
    if($("#inpRzSj").val() === ""){
        return alert("请选择入住时间");
    }
    yuDing.rzSj = $("#inpRzSj").val()+":00";
    yuDing.rzTs = $("#inpRzTs").val();
    yuDing.rzFjs = 1;
    yuDing.name = $("#inpName").val();
    yuDing.sex = $("#inpSex").val();
    yuDing.sfzHao = $("#inpSfzHao").val();
    yuDing.dianHua = $("#inpDianHua").val();
    yuDing.fangXing = fangXing.name;
    yuDing.fangXing_id = fangXing.id;
    yuDing.jiaGe = parseFloat(fangXing.jiaGe);
    $.ajax({
        url: "/LbmHotel/frontend/addYuDing",
        data: JSON.stringify(yuDing),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("保存失败");
        },
        success: function (json) {
            if (json.result) {
                alert("预订成功");
                $("#dvYdKf").hide();
            } else
                alert("保存失败:" + json.msg !== undefined ? json.msg : "");
        }
    });
}