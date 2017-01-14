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
                    if (arr2[0] == name) //如果数组的属性名等于传进来的name
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
            $(document).ready(function () {
                var load_name = GetCookie("load_name");
                if (load_name !== undefined && load_name !== null) {
                    $("#loadName").val(load_name);
                }
                var load_password = GetCookie("load_password");
                if (load_password !== undefined && load_password !== null) {
                    $("#passWord").val(load_password);
                }
                $("#loadName").keypress(function (e) {
                    if (e.which === 13) {
                        if ($("#loadName").val() === "") {
                            alert("请输入用户名");
                            $("#loadName").focus();
                            return;
                        } else {
                            $("#passWord").focus();
                        }
                    }
                });
                $("#passWord").keypress(function (e) {
                    if (e.which === 13) {
                        load();
                    }
                });
                $("#loadName").focus();
            });

            function load() {
                var loadName = $("#loadName").val();
                var password = $("#passWord").val();
                if (loadName === "") {
                    return alert("请输入用户名");
                }
                var d = {"loadName": loadName, "password": password};
                $.ajax({
                    url: "/LbmHotel/user/loadUser",
                    data: JSON.stringify(d),
                    contentType: "application/json",
                    type: "post",
                    cache: false,
                    error: function (msg, textStatus) {
                        alert("登录失败:请联系系统管理员");
                    },
                    success: function (json) {
                        if (json.result === 1) {
                            if ($("#remeber").is(":checked")) {
                                SetCookie("load_name", loadName);
                                SetCookie("load_password", password);
                            } else {
                                DeleteCookie("load_name");
                                DeleteCookie("load_password");
                            }
                            window.top.location.href = "/LbmHotel/user/home";
                        } else {
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
                    <input type="checkbox" id="remeber" class="col-lg-1">记住密码</input>
                </div>
                <div class="col-lg-10"></div>
                <div class="col-lg-10">
                    <button type="button" class="btn btn-success col-lg-12" onclick="load();">登录</button>
                </div>
            </div>
        </div>
    </body>
</html>
