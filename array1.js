function m(){
var names,nlength,n,i;
names=['jee','kommi','kumar'];
nlength=names.length;
a='<ul>';
for(i=0;i<nlength;i++)
{
    a+='<li>' +names[i]+ '<li>';
}
a+='<ul>';
document.write(a);
}
m();