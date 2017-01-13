$(document).ready(function () {
    var options = {};
    options.url = "/LbmHotel/user/getUserPage";
    options.tj = {"currentPage": 1};
    options.func = jxUser;
    options.ul = "#example";
    queryPaginator(options);
});

function jxUser(json) {
    $("#data_table_body tr").remove();
    $.each(json.list, function (index, item) { //遍历返回的json
        var trStr = '<tr><td>' + item.id + '</td><td>' + item.userName + '</td><td>' + item.loadName + '</td><td>'
                + '<button class="btn btn-warning" onclick="Edit(' + item.Id + ' );">修改</button>'
                + '<button class="btn btn-warning" onclick="Edit(' + item.Id + ' );">删除</button></td></tr>';
        $("#data_table_body").append(trStr);
    });
}


function test() {
    var d = {};
    d.id = 3;
    d.userName = 'a';
    d.loadName = 'a';
    d.sex = '女';
    d.age = 100;
    d.zhiwei = '经理';
    d.quanxian = '101;102';
    $.ajax({
        url: "/LbmHotel/user/updateUser",
        data: JSON.stringify(d),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("shibai");
        },
        success: function (json) {
            alert("s");
        }
    });
}

function testPage() {
    var d = {};
    d.currentPage = 1;
    d.paramters = {"userName": "a", "loadName": "a"};
    $.ajax({
        url: "/LbmHotel/user/getUserPage",
        data: JSON.stringify(d),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("shibai");
        },
        success: function (json) {
            alert(JSON.stringify(json));
        }
    });
}

