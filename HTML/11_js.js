var food=['김밥','라면','돈까스','우동','모밀']


document.write('<p>'+food[1]+'</p>');
document.write('<p>'+food[3]+'</p>');
document.write('<p>'+ food[0]+', '+food[1]+'</p>');
document.write('<p>'+ food[2]+', '+food[4]+'</p>');
var i;
for(i=0; i<=4;i++) {
    document.write('<p>'+food[i]+'</p>');
}