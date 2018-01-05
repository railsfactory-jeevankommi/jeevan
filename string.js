function m()
{
var s="welcometojava";
var a=3;
var small="";
var large="";
        for(var i = 0;i<=s.length-a;i++)
        {
            var s1 = s.substring(i,i+a);
            if(i == 0)
            {
                small = s1;
            }
            if(s1.localeCompare(large)>0)
            {
                large = s1;
            }else if(s1.localeCompare(small)<0)
                small = s1;
        }
        document.write(small,"<br>",large);
    }
m();