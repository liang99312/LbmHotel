$(document).ready(function () {
    cxFangXing();
});

function cxFangXing(){
    $.ajax({
        url: "/LbmHotel/frontend/getAllFangXing",
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
        },
        success: function (json) {
            jxFangXing(json);
        }
    });
}

function jxFangXing(json){
    $("#content").html("");
    var html = "";
    for(var i=0;i<json.list.length;i++){
        var e = json.list[i];
        var dvStr = formatString(["<div style='float:left;width:22%;margin-bottom:30px;text-align: center'><a href='/LbmHotel/frontend/goDetail?id={3}'><img src='/LbmHotel/files/{0}' style='width:300px;height:300px;' /><br/><span>{1}</span><br/><span style='color:red;'>￥{2}</span><br/>预定</a></div>", e.zhuTu, e.name, e.jiaGe,e.id]);
        html = html + dvStr;
    }
    $("#content").html(html);
}

function formatString(arguments) {
    var formatStr = arguments[0];
    if (typeof formatStr === 'string') {
        var pattern;
        for (var i = 1; i < arguments.length; i++) {
            pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
            formatStr = formatStr.replace(pattern, arguments[i]);
        }
    } else {
        formatStr = '';
    }
    return formatStr;
}
