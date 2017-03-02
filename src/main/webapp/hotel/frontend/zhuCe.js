function saveKeHu(){
    var keHu = {};
    var url = "";
    url = "/LbmHotel/frontend/zhuCe";
    keHu.bianHao = $("#inpBianHao").val();
    keHu.name = $("#inpName").val();
    keHu.sex = $("#inpSex").val();
    keHu.age = parseFloat($("#inpAge").val(),2);
    keHu.sfzHao = $("#inpSfzHao").val();
    keHu.dianHua = $("#inpDianHua").val();
    keHu.password = $("#inpPassword").val();
    $.ajax({
        url: url,
        data: JSON.stringify(keHu),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("注册失败");
        },
        success: function (json) {
            if (json.result) {
                alert("注册成功");
            } else
                alert("注册失败");
        }
    });
}

