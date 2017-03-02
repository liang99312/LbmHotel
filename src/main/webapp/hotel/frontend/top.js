$(document).ready(function () {

});
function load() {
    var loadName = $("#userName").val();
    var password = $("#passWord").val();
    if (loadName === "") {
        return alert("请输入用户名");
    }
    var user = {"name": loadName,"password":password};
    $.ajax({
        url: "/LbmHotel/frontend/load",
        data: JSON.stringify(user),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("登陆失败，请检查用户名密码");
        },
        success: function (json) {

        }
    });
}

function closeLoad() {
    $("#dvLoad").hide();
}

function goHome() {
    window.top.location.href = "/LbmHotel/frontend/goIndex";
}
function goMine() {
    $("#dvLoad").show();
    //window.top.location.href = "/LbmHotel/frontend/goMine";
}
function goYuLan() {
    window.top.location.href = "/LbmHotel/frontend/goYuLan";
}
