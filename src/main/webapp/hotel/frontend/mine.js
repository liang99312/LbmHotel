var keHu;
var page;
$(document).ready(function () {
    $("#myDd").click(function () {
        if (page === undefined || page === null) {
            selectYuDing({});
        }
        $("#dvMyDd").show();
        $("#dvPwd").hide();
        $("#dvGrXx").hide();
    });
    $("#xgPwd").click(function () {
        $("#dvMyDd").hide();
        $("#dvGrXx").hide();
        $("#dvPwd").show();
    });
    $("#grXx").click(function () {
        $("#dvMyDd").hide();
        $("#dvGrXx").show();
        $("#dvPwd").hide();
    });
    $("#dvGrXx input").attr("readonly", "readonly");
    cxLoadKeHu();
    if (page === undefined || page === null) {
        selectYuDing({});
    }
});

function refreshData() {
    cxLoadKeHu();
}

function cxLoadKeHu() {
    $.ajax({
        url: "/LbmHotel/frontend/getLordKeHu",
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
        },
        success: function (json) {
            if (json === null || json === "") {
                window.top.location.href = "/LbmHotel/frontend/goIndex";
            } else {
                jxKeHu(json);
            }
        }
    });
}

function jxKeHu(keHu) {
    $("#inpBianHao").val(keHu.bianHao);
    $("#inpName").val(keHu.name);
    $("#inpSex").val(keHu.sex);
    $("#inpAge").val(keHu.age);
    $("#inpDengJi").val(keHu.dengJi);
    $("#inpSfzHao").val(keHu.sfzHao);
    $("#inpDianHua").val(keHu.dianHua);
}

function tdYuDing(id) {
    var yuDing = {"id": id, "state": "已取消"};
    if (confirm("确定取消订单?")) {
        $.ajax({
            url: "/LbmHotel/frontend/tdYuDing",
            data: JSON.stringify(yuDing),
            contentType: "application/json",
            type: "post",
            cache: false,
            error: function (msg, textStatus) {
                alert("取消订单失败");
            },
            success: function (json) {
                if (!json.result)
                    alert("取消订单失败:" + json.msg !== undefined ? json.msg : "");
                else {
                    alert("取消订单成功");
                    $("#btn" + id).val("已取消").attr("disabled", "disabled");
                }
            }
        });
    }
}

function selectYuDing(tj) {
    $.ajax({
        url: "/LbmHotel/frontend/getYuDingPage",
        data: JSON.stringify(tj),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
        },
        success: function (json) {
            if (json === null || json === "") {

            } else {
                page = json;
                jxPage();
            }
        }
    });
}

function jxPage() {
    if(page === undefined || page.list === undefined || page.list.length === 0){
        $("#dvDetail").html("<span>没有订单信息</span>");
        return;
    }
    $("#dvDetail").html("");
    for (var i = 0; i < page.list.length; i++) {
        addYuDing(page.list[i]);
    }
}

function addYuDing(json) {
    var btnStr = "<input type='button' id='btn" + json.id + "' value='退订' onclick='tdYuDing(" + json.id + ")' />";
    if (json.state !== "未生效") {
        btnStr = "<input type='button' disabled='disabled' id='btn" + json.id + "' value='" + json.state + "' />";
    }
    var html = "<div class='dvDd'><div class='dvDdBt'><span>" + json.ydSj + " <span style='color:blue;'>订单号：</span>" + json.zjHao + "</span></div>\n\
                <div class='dvDdTable'><table><tr><td>" + json.fangXing + "</td><td>￥" + json.jiaGe + "</td><td>预住时间：" + json.rzSj + "</td>\n\
                <td style='line-height:25px;'>证件号：" + json.sfzHao + "</td><td>" + btnStr + "</td></tr></table></div></div>";
    $("#dvDetail").append(html);

}

function prePage() {
    if (page.currentPage === 1) {
        return;
    }
    page.currentPage = page.currentPage - 1;
    selectYuDing(page);
}

function nextPage() {
    if (page.currentPage === page.totalPage) {
        return;
    }
    page.currentPage = page.currentPage + 1;
    selectYuDing(page);
}

function changePassword() {
    var keHu = {};
    keHu.password = $("#inpPassword").val();
    keHu.remark = $("#inpOldPassword").val();
    $.ajax({
        url: "/LbmHotel/frontend/changePassword",
        data: JSON.stringify(keHu),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("修改密码错误");
        },
        success: function (json) {
            if (json.result) {
                alert("修改密码成功,请重新登录");
                loadOut();
            } else {
                alert("修改密码错误："+json.msg);
            }
        }
    });
}

function loadOut() {
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