function signIn(){
var userName= document.getElementById('uName').value; //get data from username textfield
var pass= document.getElementById('pwd').value;   //get data from password textfield

 

var u = localStorage.getItem('data');    // Get data from db in the form of string
var obj = JSON.parse(u);                // convert that string into Objects

if( userName != '' && pass != '' ) // Check all fields are filled or not
{
if(userid_validation(userName,5,12)){   //validate username
    if(pass_validation(pass,5,12)){   // validate password
if(!user_exist(u, userName,pass)){    //Check if username already exist


 document.write("You will be redirected to TODO APP within few sec.");
   localStorage.setItem('login',userName);

            setTimeout("window.location = 'todo.html'",3000);
         
            
}else document.getElementById('error').innerHTML = "* USER NOT FOUND !!";
} else document.getElementById('error').innerHTML = "* Password length should be between 5 to 12";
} else document.getElementById('error').innerHTML = "* User Id length should be between 5 to 12";
}else document.getElementById('error').innerHTML = "* All FIELDS REQUIRED";
}
 /*     ##############   SIGN- IN function ends    ################# */














function userid_validation(uid,mx,my)  
{  
var uid_len = uid.length;  
if (uid_len == 0 || uid_len >= my || uid_len < mx)  
{  
 
  document.getElementById("uName").focus();
return false;  
}  
return true;  
}  

function user_exist(u, userName,pass)  {
    if(u != null) {
  var obj = JSON.parse(u);
for(var i=0; i<obj.length ; i++)
{
   if(obj[i].uName === userName && obj[i].password === pass){  
    
      return false;
   }
   
}
}
return true;
}

function pass_validation(pass,min,max)  
{  
var pass_len = pass.length;  
if (pass_len >= max || pass_len < min)  
{  
  
return false;  
}  
return true;  
}  

function showPwd(){
   
   if(document.getElementById('showpassword').checked )
   {
 document.getElementById('pwd').type = "text";

   } else  {
        document.getElementById('pwd').type = "password";

   }
}


function changeBorder(id){
    document.getElementById(id).style = 'border-bottom: 3px solid #df5799;';
}

function reverseBorder(id){
    document.getElementById(id).style = '  border-bottom: 1px solid #DCCBCF;';
}  