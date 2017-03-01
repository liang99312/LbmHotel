<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>LBM首页</title>
        <script src="/LbmHotel/js/jquery2.js"></script>
        <style>  
            body {
                background:#f8f6e9;
                margin:0 auto;
            }
            .mycenter input,checkbox,button{
                margin-top:2%;
                margin-left: 20%;
                margin-right: 10%;
            }
            .mycheckbox{
                margin-top:10px;
                margin-bottom: 10px;
            }
            #dvMain{
                background-image:   url(/LbmHotel/img/bg1.jpg);
                background-position: center 0; 
                background-repeat: no-repeat; 
                background-attachment:fixed; 
                background-size: cover; 
                -webkit-background-size: cover;/* 兼容Webkit内核浏览器如Chrome和Safari */ 
                -o-background-size: cover;/* 兼容Opera */ 
                zoom: 1; 
            }
            #dvMain a{
                cursor: pointer;
                text-decoration:none;
            }
        </style>
        <script>
            var i = 2;  
            function remainTime(){  
                if(i===2){
                    $("#dvMain").css("background-image","url(/LbmHotel/img/bg1.jpg)");
                    $("#spDz").html("宁静");
                    $("#spDz").css("writing-mode","horizontal-tb");
                    $("#spXz").html("大自然的清新安宁");
                    $("#spXz").css("writing-mode","horizontal-tb");
                    $("#dvSp").css("top","170px");
                    $("#dvSp").css("left","20%");
                }else if(i===1){
                    $("#dvMain").css("background-image","url(/LbmHotel/img/bg2.jpg)");
                    $("#spDz").html("舒适&nbsp;");
                    $("#spDz").css("writing-mode","vertical-rl");
                    $("#spXz").html("如家般的随性无忧");
                    $("#spXz").css("writing-mode","vertical-rl");
                    $("#dvSp").css("top","470px");
                    $("#dvSp").css("left","70%");
                }else if(i===0){
                    $("#dvMain").css("background-image","url(/LbmHotel/img/bg3.jpg)");
                    $("#spDz").html("便捷&nbsp;");
                    $("#spDz").css("writing-mode","vertical-rl");
                    $("#spXz").html("方便快捷的服务");
                    $("#spXz").css("writing-mode","vertical-rl");
                    $("#dvSp").css("top","170px");
                    $("#dvSp").css("left","20%");
                    i=3;
                }
                i--;
                setTimeout("remainTime()",3000);  
            }  
            remainTime();

            function SetCookie(name, value, iDay)
            {
                var oDate = new Date();
                oDate.setDate(oDate.getDate() + iDay); //用来设置过期时间用的，获取当前时间加上传进来的iDay就是过期时间
                document.cookie = name + '=' + value + ';expires=' + oDate;
            };
            function GetCookie(name)
            {
                var arr = document.cookie.split('; '); //多个cookie值是以; 分隔的，用split把cookie分割开并赋值给数组
                for (var i = 0; i < arr[i].length; i++) //历遍数组
                {
                    var arr2 = arr[i].split('='); //原来割好的数组是：user=simon，再用split('=')分割成：user simon 这样可以通过arr2[0] arr2[1]来分别获取user和simon 
                    if (arr2[0] === name) //如果数组的属性名等于传进来的name
                    {
                        return arr2[1]; //就返回属性名对应的值
                    }
                }
                return ''; //没找到就返回空
            };
            function DeleteCookie(name)
            {
                SetCookie(name, 1, -1); //-1就是告诉系统已经过期，系统就会立刻去删除cookie
            };
            
            function fun(e){  
                var x = e.clientX;  
                var y = e.clientY ;  
                if(y<80){
                    if($("#dvMenu").is(":hidden"))
                        $("#dvMenu").fadeIn(500);
                }else{
                    $("#dvMenu").fadeOut(500);
                }
            }
            $(document).ready(function(){
                $("#aLoad").click(function(event){
                    $("#dvLoad").css("z-index","100");
                    $("#dvLoad").show();
                    event.stopPropagation();
                });
                $("#dvMain,#dvBottom").click(function(){
                    $("#dvLoad").css("z-index","1");
                    $("#dvLoad").hide();
                 });
            });
        </script>
    </head>
    <body>
        <div id="dvMain" onmousemove = "fun(event)" style="width:100%;height:950px;z-index:10;float: left;">
            <div id="dvSp" style="position: absolute;width: 200px; height: 300px; top: 170px;left: 20%;font-size: 22px;font-weight: normal;">
                <span id="spDz" style="font-size:40px">宁静</span><br/>
                <span id="spXz">大自然的清新安宁</span>
            </div>
            <div id="dvMenu" style="background: rgba(210,210,210,0.4);position: absolute;width: 100%;height:80px;top: 0;left:0;text-align: center;vertical-align: middle;justify-content:center;align-items:center;display:-webkit-flex;">
                <a href="/LbmHotel/frontend/goYuLan">预订</a>
                <span style="color: #0000ff;font-size:32px;font-weight:bold;padding-left:30px;padding-right: 30px;">LBM</span>
                <a id="aMine">我的信息</a>
                <a id="aLoad" style="padding-left:20px;">登录</a>
            </div>
        </div>
        <div id="dvBottom" style="width:100%;height:100px;z-index:10;float: left;text-align: center;vertical-align: middle;justify-content:center;align-items:center;display:-webkit-flex;">
            <span>地址：广西柳州市鱼峰区古亭大道10000号<br/>联系电话：0772-3652987</span>
        </div>
        <div class="mycenter" id="dvLoad" style="background: rgba(151, 204, 243, 0.6);z-index:1;display: none;position: absolute;width: 320px;height:210px;top: 100px;left:40%;border-radius:5px;">
            <div class="mysign">
                <div class="col-lg-11 text-center text-info" style="text-align: center;">
                    <h2>请登录</h2>
                </div>
                <div class="col-lg-10">
                    <input type="text" class="form-control" name="username" id="loadName" placeholder="请输入账户名" required autofocus/>
                </div>
                <div class="col-lg-10"></div>
                <div class="col-lg-10">
                    <input type="password" class="form-control" name="password" id ="passWord" placeholder="请输入密码" required autofocus/>
                </div>
                <div class="col-lg-10"></div>
                <div class="col-lg-10 mycheckbox checkbox">
                    <input type="checkbox" id="remeber" class="col-lg-1" style="width:20px;margin-right: 0;"/>记住密码
                </div>
                <div class="col-lg-10"></div>
                <div class="col-lg-10" style="text-align: center;">
                    <button type="button" class="btn btn-success col-lg-12" onclick="load();" style="margin-left: 0;">登录</button>
                </div>
            </div>
        </div>
    </body>
</html>
