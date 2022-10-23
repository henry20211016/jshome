function prn(n) {
    var i;
    for(i=1; i<=n; i+=2){
        document.write(i+' ');
    }
}

var num=prompt('출력할 수를 입력하세요.');
prn(num);