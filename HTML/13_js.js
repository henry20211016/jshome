function hello(){
    document.write('Hello! <br>');
}
function get_day(y,m,d) {
    var d=new Date(y,m-1,d);
    var x=d.getDay();
    return s_day[x];
}
var month=prompt('n을 입력하시요');
month=parseInt(month);

var s_day=['일','월','화','수','목','금','토'];
var i;

for(i=10; i<=30; i++){
    var d=new Date(2022,month-1,i);
    var dd=get_day(2022,month,i);
    document.write(d.toLocaleString());
    document.write(' '+dd+'요일)<br>');
}