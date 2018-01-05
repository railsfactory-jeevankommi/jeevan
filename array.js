function m(){
var a = new Array(5);
for(var i=0;i<5;i++)
{
    a[i]=new Array(5);
    for (var j = 0; j <5; j++) {
        document.write(a[i][j]=[i,j],"<br>");
        
    }
}
}
m();
//'['+i+ ',' +j+']'