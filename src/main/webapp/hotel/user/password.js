$(document).ready(function(){
    var user = parent.loadUser;
    if(user === undefined || user === null){
        alert("请登录系统");
    }else{
        $("#inpLoadName").val(user.loadName);
    }
});
function changePassword() {
    var user = {};
    user.loadName = $("#inpLoadName").val();
    user.password = $("#inpOldPassword").val();
    user.quanxian = $("#inpNewPassword").val();
    $.ajax({
        url: "/LbmHotel/user/changePassword",
        data: JSON.stringify(user),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("修改密码失败");
        },
        success: function (json) {
            if (!json.result)
                alert("修改密码失败："+json.msg);
            else
                alert("修改密码成功");
        }
    });
}

