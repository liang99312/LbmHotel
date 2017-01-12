$(document).ready(function () {
    testPage();
});

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
    d.paramters={"userName":"a","loadName":"a"};
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

