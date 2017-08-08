var arr = [];

function signUp(){
  document.getElementById('notification').innerHTML = "";
   document.getElementById('error').innerHTML = "";

    var userName= document.getElementById('uName').value;
var firstName= document.getElementById('fName').value;
var lastName= document.getElementById('lName').value;
if(document.getElementById('male').checked){
    var gender = document.getElementById('male').value;
}
else var gender = document.getElementById('female').value;
var emailAdd= document.getElementById('email').value;
var city= document.getElementById('city').value;
var cellNo= document.getElementById('number').value;
var pass= document.getElementById('pwd').value;
var cPass= document.getElementById('Cpwd').value;


if( userName != '' && firstName != '' && lastName != '' && emailAdd != '' && cellNo!= ''&& pass != '' && cPass !='') // Check all fields are filled or not
{
arr = [];
var user = {
   uName: userName,
    fName: firstName,
    lastName : lastName,
    gender : gender,
    email: emailAdd,
    city : city,
    number: cellNo,
    password: pass,
    
}

var u = localStorage.getItem('data');    // Get data from db in the form of string
var obj = JSON.parse(u);                // convert that string into Objects

if(userid_validation(userName,5,12)){   //validate username
if(userid_exist(u, userName)){    //Check if username already exist
if(validateEmail(emailAdd)){  //  validate email 
if(validateCellNo(cellNo)){   // validate cellNo
if(pass_validation(pass,5,12)){   // validate password
if(match_pass(pass,cPass)){   //match password and confirm password

if(u != null) {   // Check if db have no data
for(var i=0; i<obj.length ; i++)

    arr.push(obj[i]);
}
arr.push(user);

localStorage.setItem('data',JSON.stringify(arr));
document.getElementById('uName').value ="";
 document.getElementById('fName').value ="";
document.getElementById('lName').value ="";
document.getElementById('email').value ="";

 document.getElementById('number').value ="";
 document.getElementById('pwd').value ="";
 document.getElementById('Cpwd').value ="";
document.getElementById('notification').innerHTML = "Account has been created !! <a href='index.html'> SIGN-IN NOW </a>";

}  else document.getElementById('error').innerHTML = "* Password and confirm password donot match !!"; 
} else document.getElementById('error').innerHTML = "* Password length should be between 5 to 12";  
}else document.getElementById('error').innerHTML = "* Invalid number; must be 11 digits";
}else document.getElementById('error').innerHTML = "* invalid email format";
}else document.getElementById('error').innerHTML = "* USERNAME ALREADY EXIST !!";
} else document.getElementById('error').innerHTML = "* User Id length should be between 5 to 12"; 
}else document.getElementById('error').innerHTML = "* All FIELDS REQUIRED";

}

 /*     ##############   SIGN- UP function ends    ################# */



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

function userid_exist(u, userName)  {
    if(u != null) {
  var obj = JSON.parse(u);
for(var i=0; i<obj.length ; i++)
{
   if(obj[i].uName === userName){  
       document.getElementById("uName").focus();
      return false;
   }
   
}
}
return true;
}


function validateEmail(uemail)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(mailformat.test((uemail)))
{  
return true;  
}  
else  
{  
  
document.getElementById("email").focus();
return false;  
}  
} 

function validateCellNo(cellNo){
    
if (/^\d{11}$/.test(cellNo)) {
    // value is ok, use it
    return true;
} else {
    
    document.getElementById("number").focus();
    return false;
}
}

function pass_validation(pass,min,max)  
{  
var pass_len = pass.length;  
if (pass_len >= max || pass_len < min)  
{  
 
document.getElementById("pwd").focus();  
return false;  
}  
return true;  
}  


function match_pass(pass,cPass){
    if(pass === cPass) {
        return true;
    }
    document.getElementById("pwd").focus();  
  return false; 
    
}



function showPwd(){
   
   if(document.getElementById('showpassword').checked )
   {
 document.getElementById('pwd').type = "text";
 document.getElementById('Cpwd').type = "text";
   } else  {
        document.getElementById('pwd').type = "password";
document.getElementById('Cpwd').type = "password";
   }
}


function changeBorder(id){
    document.getElementById(id).style = 'border-bottom: 3px solid #df5799;';
}

function reverseBorder(id){
    document.getElementById(id).style = '  border-bottom: 1px solid #DCCBCF;';
}  