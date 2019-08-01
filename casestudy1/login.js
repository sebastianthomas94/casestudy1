function login()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    check(username,password,(flag)=>{
        if (flag)
        {
            /* alert("ok"); */
            window.location.href="main.html";
        }
        else
        {
             alert("Username or Password is wrong"); 
        }
    
    }); 

}


function check(uname, pass,callback)
{
    if(uname=="admin" && pass=="12345")
    {
        var f=1;
        callback(f);
    }    
    else 
    {
        var f=0;
        callback(f);
    }
}