var com=Math.random()*100;
com=parseInt(com)+1;
console.log(com);
var cnt=0;
const result=document.getElementById('result');
const num=document.getElementById('num');
function check_num()
{
    var usr=parseInt(num.value);
    if(usr>com) {
        msg="DOWN";
        cnt=cnt+1
    } else if(usr<com) {
        msg="up";
        cnt=cnt+1
    } else if(usr=com) {
        msg="CORRECT";
        cnt=cnt+1
        const btn=document.getElementById('btn');
        btn.disabled='disabled';
    } else {
       msg="1~100 사이 수 입력";
    };
    var msg_cnt='시도횟수:'+cnt+'회';
    result.innerText=msg+'\n'+ msg_cnt;
}
