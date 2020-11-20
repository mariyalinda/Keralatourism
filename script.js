var email=document.getElementById("inputEmail4");
var pw=document.getElementById("inputPassword4");
var num=document.getElementById("num");
var numregex=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var eregex=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
var pregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
var flag1,flag2,flag3=false;
function validate()
{
    
    if(!(eregex.test(email.value)))
    {
        error1.innerText="Invalid email";
        error1.style.color="red";
    }
    else
    {
        error1.innerText="Valid";
        error1.style.color="green";
        flag1=true;
    }

    if(!(/^([0-9]{10})&/.test(num.value)||numregex.test(num.value)))
    {
        error2.innerText="Invalid phone number";
        error2.style.color="red";
    }
    else
    {
        error2.innerText="Valid";
        error2.style.color="green";
        flag2=true;
    }
    if(!(pregex.test(pw.value)))
    {
        error3.innerText="Invalid password";
        error3.style.color="red";
    }
    else
    {
        error3.innerText="Valid";
        error3.style.color="green";
        flag3=true;
    }
        
    if(flag1&&flag2&&flag3)
        return true;
    else
        return false;
}

function login()
{
    
    if(email.value=="abc.123@gmail.com")
    {
        error1.innerText="Email is verified";
        error1.style.color="green";
        if(pw.value=="1FSD@ict1")
        {
            return true;
        }
        else
        {
            error3.innerText="Incorrect password";
            error3.style.color="red";
        }
    }
    else
    {
        error1.innerText="Incorrect email";
        error1.style.color="red";
    }
    return false;
}

function check()
{
    signup=document.getElementById("signup");
    signin=document.getElementById("signin");
    if(document.referrer.indexOf("signin")!=-1||document.referrer.indexOf("signup")!=-1)
    {
        signup.setAttribute("hidden",true);
        signin.innerText="Sign out";
    }
        
}



