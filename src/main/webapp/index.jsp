<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>登录系统</title>
        <link href="/LbmHotel/content/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/LbmHotel/content/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <script src="/LbmHotel/js/jquery2.js"></script>
        <style>  
            body {
                background:url(/LbmHotel/img/bg_login.jpg) #f8f6e9;
            }
            .mycenter{
                margin-top: 100px;
                margin-left: auto;
                margin-right: auto;
                height: 350px;
                width:500px;
                padding: 5%;
                padding-left: 5%;
                padding-right: 5%;
            }
            .mycenter mysign{
                width: 440px;
            }
            .mycenter input,checkbox,button{
                margin-top:2%;
                margin-left: 10%;
                margin-right: 10%;
            }
            .mycheckbox{
                margin-top:10px;
                margin-left: 40px;
                margin-bottom: 10px;
                height: 10px;
            }
        </style>
        <script>
            $(document).ready(function(){
                $("#loadName").keypress(function(e){
                    if(e.which === 13) {
                        if($("#loadName").val() === ""){
                            alert("请输入用户名");
                            $("#loadName").focus();
                            return;
                        }else{
                            $("#passWord").focus();
                        }
                    }
                });
                $("#passWord").keypress(function(e){
                    if(e.which === 13) {
                        load();
                    }
                });
                $("#loadName").focus();
            });
            
            function load(){
                var loadName = $("#loadName").val();
                var password = $("#passWord").val();
                if(loadName === ""){
                    return alert("请输入用户名");
                }
                var d = {"loadName":loadName,"password":password};
                $.ajax({
			url: "/LbmHotel/user/loadUser",
			data: JSON.stringify(d),
                        contentType: "application/json",
			type: "post",
			cache: false,
			error: function(msg, textStatus) {
				alert("登录失败:请联系系统管理员");
			},
			success: function(json) {
				if(json.result === 1){
                                    window.top.location.href = "/LbmHotel/user/home";
                                }else{
                                    alert("登录失败:用户名或密码错误");
                                    $("#loadName").focus();
                                }
			}
		});
            }
        </script>
    </head>
    <body>
        <div class="mycenter">
            <div class="mysign">
                <div class="col-lg-11 text-center text-info">
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
                    <input type="checkbox" class="col-lg-1">记住密码</input>
                </div>
                <div class="col-lg-10"></div>
                <div class="col-lg-10">
                    <button type="button" class="btn btn-success col-lg-12" onclick="load()">登录</button>
                </div>
            </div>
        </div>
    </body>
</html>
