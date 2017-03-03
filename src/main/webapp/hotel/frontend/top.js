var loadKeHu;
$(document).ready(function () {
    cxKeHu();
});

function cxKeHu() {
    loadKeHu = null;
    $.ajax({
        url: "/LbmHotel/frontend/getLordKeHu",
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
        },
        success: function (json) {
            if (json !== null && json !== "") {
                loadKeHu = json;
                $("#aLoad,#aZhuCe,#sXieGang").hide();
                $("#aHuanYing").html(loadKeHu.name);
                $("#sHuanYing").show();
            }
        }
    });
}

function load() {
    loadKeHu = null;
    var loadName = $("#loadName").val();
    var password = $("#passWord").val();
    if (loadName === "") {
        return alert("请输入用户名");
    }
    var keHu = {"name": loadName, "password": password};
    $.ajax({
        url: "/LbmHotel/frontend/load",
        data: JSON.stringify(keHu),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("登录失败，请检查用户名密码！");
        },
        success: function (json) {
            if (json.result === -1) {
                alert("登录失败，请检查用户名密码！");
            } else if (json.loadKeHu !== null && json.loadKeHu !== "") {
                loadKeHu = json.loadKeHu;
                $("#dvLoad").css("z-index", "1");
                $("#dvLoad").hide();
                $("#aLoad,#aZhuCe,#sXieGang").hide();
                $("#aHuanYing").html(loadKeHu.name);
                $("#sHuanYing").show();
                if (window.parent.refreshData !== undefined) {
                    window.parent.refreshData();
                }
            }
        }
    });
}

function loadOut() {
    if (!confirm("确定退出？")) {
        return;
    }
    $.ajax({
        url: "/LbmHotel/frontend/loadOut",
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("退出失败！");
        },
        success: function (json) {
            loadKeHu = null;
            $("#aLoad,#aZhuCe,#sXieGang").show();
            $("#sHuanYing").hide();
            if (window.parent.refreshData !== undefined) {
                window.parent.refreshData();
            }
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
    if (loadKeHu !== null) {
        window.top.location.href = "/LbmHotel/frontend/goMine";
    } else {
        $("#dvLoad").show();
    }
}
function goYuLan() {
    window.top.location.href = "/LbmHotel/frontend/goYuLan";
}
