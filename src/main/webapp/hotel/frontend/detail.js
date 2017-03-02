var id = 0;

$(document).ready(function () {

    var args = new Object();
    args = GetUrlParms();
//如果要查找参数key:
    if (args["id"] != undefined)
    {
        id = args["id"];
    }
    cxFangXing();
});

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