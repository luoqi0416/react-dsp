
//封装自己Cookie的增删改查函数
/*
    2017/02/20
    cookie操作
 */
function setCookie(key, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = key + "=" + value + ";expires=" + oDate;
}
function removeCookie(key) {
    setCookie(key, "", -1); //这里只需要把Cookie保质期退回一天便可以删除
}
function getCookie(key) {
    var cookieArr = document.cookie.split("; ");
    for (var i = 0; i < cookieArr.length; i++) {
        var arr = cookieArr[i].split("=");
        if (arr[0] === key) {
            return arr[1];
        }
    }
    return false;
}
export default {
    setCookie,removeCookie,getCookie
}