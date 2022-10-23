const msg=document.getElementById('msg');
var cnt=100;
function count() {
    if(cnt>0){
        cnt=cnt-1;
    }
    msg.innerText=cnt;
};

function RESET(){
    cnt=100;
    msg.innerText=cnt;
};