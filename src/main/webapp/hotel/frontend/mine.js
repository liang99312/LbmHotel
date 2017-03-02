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
});
