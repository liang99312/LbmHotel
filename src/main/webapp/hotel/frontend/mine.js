var keHu;
$(document).ready(function () {
    $("#myDd").click(function(){
       $("#dvMyDd").show(); 
       $("#dvPwd").hide();
       $("#dvGrXx").hide();
    });
    $("#xgPwd").click(function(){
       $("#dvMyDd").hide();
       $("#dvGrXx").hide();
       $("#dvPwd").show();
    });
    $("#grXx").click(function(){
       $("#dvMyDd").hide();
       $("#dvGrXx").show();
       $("#dvPwd").hide();
    });
    $("#dvGrXx input").attr("readonly","readonly");
    cxLoadKeHu();
});

function refreshData(){
    cxLoadKeHu();
}

function cxLoadKeHu(){
    $.ajax({
        url: "/LbmHotel/frontend/getLordKeHu",
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
        },
        success: function (json) {
            if(json === null || json === ""){
                window.top.location.href = "/LbmHotel/frontend/goIndex";
            }else{
                jxKeHu(json);
            }
        }
    });
}

function jxKeHu(keHu){
    $("#inpBianHao").val(keHu.bianHao);
    $("#inpName").val(keHu.name);
    $("#inpSex").val(keHu.sex);
    $("#inpAge").val(keHu.age);
    $("#inpDengJi").val(keHu.dengJi);
    $("#inpSfzHao").val(keHu.sfzHao);
    $("#inpDianHua").val(keHu.dianHua);
}