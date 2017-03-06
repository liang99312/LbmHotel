var h_fangJians_jx;
var h_userNames;
var h_fangXings;
var h_keHus;

function getFangJians_jx(d,func){
    hajax("/LbmHotel/fangJian/getAllFangJian",d,"h_fangJians_jx",func);
}

function getUserNames(func){
    hajax("/LbmHotel/user/getAllUserName",null,"h_userNames",func);
}

function getFangXings(func){
    hajax("/LbmHotel/fangXing/getAllFangXing",null,"h_fangXings",func);
}

function getKeHus(func){
    hajax("/LbmHotel/keHu/getAllKeHu",null,"h_keHus",func);
}

function hajax(url,d,result,func){
    $.ajax({
        url: url,
        data: JSON.stringify(d),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
            alert("查询数据失败");
        },
        success: function (json) {
           eval(result + " = json");
           if(func){
               func();
           }
        }
    });
}

function queryPaginator(options) {
    var tj = options.tj;
    var url = options.url;
    var func = options.func;
    var ul = options.ul;
    
    $.ajax({
        url: url,
        data: JSON.stringify(tj),
        contentType: "application/json",
        type: "post",
        cache: false,
        error: function (msg, textStatus) {
        },
        success: function (json) {
            if (json !== null) {
                func(json);
                var count = json.rows;
                var pageCount = json.totalPage; //取到pageCount的值(把返回数据转成object类型)
                var currentPage = json.currentPage; //得到urrentPage
                var options = {
                    bootstrapMajorVersion: 3, //版本
                    currentPage: currentPage, //当前页数
                    totalPages: pageCount, //总页数
                    count:count,
                    itemTexts: function (type, page, current) {
                        switch (type) {
                            case "first":
                                return "首页";
                            case "prev5":
                                return "<<";
                            case "prev":
                                return "<";
                            case "next":
                                return ">";
                            case "next5":
                                return ">>";
                            case "last":
                                return "末页";
                            case "page":
                                return page;
                        }
                    }, //点击事件，用于通过Ajax来刷新整个list列表
                    onPageClicked: function (event, originalEvent, type, page) {
                        if(page === 0){
                            return;
                        }
                        tj.currentPage = page;
                        $.ajax({
                            url: url,
                            data: JSON.stringify(tj),
                            contentType: "application/json",
                            type: "post",
                            cache: false,
                            error: function (msg, textStatus) {
                            },
                            success: function (json1) {
                                if (json1 !== null) {
                                    func(json1);
                                }
                            }
                        });
                    }
                };
                $(ul).bootstrapPaginator(options);
            }
        }
    });
}
