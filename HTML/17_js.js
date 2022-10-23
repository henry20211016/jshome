const age=document.getElementById('age');
const result=document.getElementById('result');

function judge() {
    var value=parseInt(age.value);
    console.log(value);

    if(value>7 && value<19){
        console.log("학생");
        result.innerText="학생입니다";
    } else {
        console.log("학생 아님!");
        result.innerText="학생이 아닙니다.";
    }
}