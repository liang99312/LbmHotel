var users;
var optFlag = 1;
var editIndex = -1;
$(document).ready(function () {
    
});

function jxUser(json) {
    $("#data_table_body tr").remove();
    users = [];
    users = json.list;
    $.each(json.list, function (index, item) { //遍历返回的json
        var trStr = '<tr><td>' + item.userName + '</td><td>' + item.loadName + '</td><td>' + item.sex + '</td><td>' + item.age + '</td><td>' + item.zhiwei + '</td><td>'
                + '<button class="btn btn-info btn-xs icon-edit" onclick="editUser(' + index + ' );"></button>&nbsp;'
                + '<button class="btn btn-danger btn-xs icon-remove" onclick="delUser(' + index + ' );"></button></td></tr>';
        $("#data_table_body").append(trStr);
    });
}

function selectUser(){
    var user = {};
    var tj = {"pageSize":20,"currentPage":1};
    if($("#selUserName").val() !== ""){
        user.userName = $("#selUserName").val();
    }
    if($("#selLoadName").val() !== ""){
        user.loadName = $("#selLoadName").val();
    }
    tj.paramters = user;
    var options = {};
    options.url = "/LbmHotel/user/getUserPage";
    options.tj = tj;
    options.func = jxUser;
    options.ul = "#example";
    queryPaginator(options);
}

function addUser() {
    optFlag = 1;
    $("#userModel_title").html("新增用户");
    $("#inpUserName").val("");
    $("#inpLoadName").val("");
    $("#inpSex").val("");
    $("#inpAge").val("");
    $("#inpZhiwei").val("");
    $("#inpQuanxian").val("");
    $("#userModal").modal("show");
}


function editUser(index) {
    optFlag = 2;
    if (users[index] === undefined) {
        optFlag = 1;
        return alert("请选择用户");
    }
    var user = users[index];
    editIndex = index;
    $("#userModel_title").html("修改用户");
    $("#inpUserName").val(user.userName);
    $("#inpLoadName").val(user.loadName);
    $("#inpSex").val(user.sex);
    $("#inpAge").val(user.age);
    $("#inpZhiwei").val(user.zhiwei);
    $("#inpQuanxian").val(user.quanxian);
    $("#userModal").modal("show");
}

function saveUser() {
    var user = {};
    var url = "";
    if (optFlag === 2) {
        if (users[editIndex] === undefined) {
            return;
        }
        user = users[editIndex];
        url = "/LbmHotel/user/updateUser";
    } else if (optFlag === 1) {
        url = "/LbmHotel/user/addUser";
    }
    user.userName = $("#inpUserName").val();
    user.loadName = $("#inpLoadName").val();
    user.sex = $("#inpSex").val();
    user.age = parseInt($("#inpAge").val(), 10);
    user.zhiwei = $("#inpZhiwei").val();
    user.quanxian = $("#inpQuanxian").val();
    $.ajax({
        url: url,
        data: JSON.stringify(user),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("保存失败");
        },
        success: function (json) {
            if (json.result){
                $("#userModal").modal("hide");
                selectUser();
            }else
                alert("保存失败:"+json.msg !== undefined? json.msg:"");
        }
    });
}

function delUser(index) {
    if (users[index] === undefined) {
        return alert("请选择用户");
    }
    var user = users[index];
    if(confirm("确定删除用户："+user.userName+"?")){
        $.ajax({
            url: "/LbmHotel/user/delUser",
            data: JSON.stringify(user),
            contentType: "application/json",
            type: "post",
            cache: false,
            error: function (msg, textStatus) {
                alert("删除失败");
            },
            success: function (json) {
                if (!json.result)
                    alert("删除失败:"+json.msg !== undefined? json.msg:"");
                else
                    selectUser();
            }
        });
    }
}
