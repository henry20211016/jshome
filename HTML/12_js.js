var d=new Date(2022,8,24);

document.write('<p>날짜 객체:'+d+'</p>');

var s_d=d.toLocaleString();
document.write('<p>문자형태:'+s_d+'</p>');

var d_d=d.getDay();
var s_day=['일','월','화','수','목','금','토'];
document.write('<p>요일:'+d_d+'('+s_day[d_d]+'요일)</p>');