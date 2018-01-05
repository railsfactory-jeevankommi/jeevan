function m()
{
    var n = prompt("enter integer");
    var String = " ";
    if(n%2==1)
            {
              String = "yes";
            }
            else 
            {
                if(n>=2 && n<=5)
                {           
                String="no";
                }
                else                
                    if(n>=6 && n<=20)
                {
                    String="yes";
                   
                }               
                else
                {
                    String="no";
                }              
            }           
            document.write(String);
}
m();