$(document).ready(function () {
    $("#myDd").click(function(){
       $("#dvMyDd").show(); 
       $("#dvPwd").hide();
    });
    $("#xgPwd").click(function(){
       $("#dvMyDd").hide(); 
       $("#dvPwd").show();
    });
});
