const result=document.getElementById('result');
const num=document.getElementById('num');

function judge() {
    var value=parseInt(num.value);
    var m;


    if(value>0) {
        
        m="양수";
    } else if(value<0){
        
        m="음수";
    } else{
        
        m="영";
    }
    result.innerText=value+"는"+m+"입니다.";
}