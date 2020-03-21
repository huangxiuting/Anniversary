var ua = navigator.userAgent
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
isAndroid = ua.match(/(Android)\s+([\d.]+)/)
isMobile = isIphone || isAndroid

//url
var url = location.href.toUpperCase()
//判断
// if (isMobile) {
//     if (url.indexOf("HOME") > 0) {
//         var curUrl = url.replace("HOME", "MP");
//         if (curUrl.indexOf("NEWS/") > 0) {
//             curUrl = curUrl.substring(0, curUrl.indexOf("NEWS/") + 4);
//         }
//         location.href = curUrl;
//     }
//     else if (url.split('/').length <= 5 && url.indexOf("MP") <= 0){
//         location.href = "/MP";
//     }
// } else {
//     if (url.indexOf("MP") > 0) {
//         location.href = url.replace("MP", "HOME");
//     }
// }
