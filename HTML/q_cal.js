const r=document.getElementById('result');
var n1;
var n2;

function calc_func(){
    n1=parseInt(Math.random()*30)+1;
    n2=parseInt(Math.random()*30)+1;

    msg=n1+'+'+n2+'='+(n1+n2)+'\n';
    msg+=n1+'-'+n2+'='+(n1-n2)+'\n';
    msg+=n1+'*'+n2+'='+(n1*n2)+ '\n';
    msg+=n1+'/'+n2+'='+(n1/n2);

    r.innerText=msg;
}