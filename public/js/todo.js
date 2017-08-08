

var userName = localStorage.getItem('login'); 

var now = new Date();  //get today's date

var theHr = now.getHours();

var greeting ;
if(theHr <=5) greeting = "Good Night "+userName + "  !!!";
else if(theHr >5 && theHr < 12) greeting = "Good Morning "+userName + "  !!!";
else if(theHr >= 12 && theHr <=16) greeting = "Good Afternoon "+userName + "  !!!";
else if(theHr > 16 && theHr <=24) greeting = " Good Evening "+userName + "  !!!";



document.getElementById('welcome').innerHTML =greeting;

function add() {    // Add todos to localstorage
    var getInput = document.getElementById('inputField').value;
    if(getInput!= '') {
   var todos = get_todos();
   if(todos !=null){
    todos.push(getInput);
    localStorage.setItem(userName, JSON.stringify(todos));
   }

    show();   //display todos
   
}else alert("Please enter someting !!");
}


function removeAll(){    //remove all todos from local storage of given user
  
 localStorage.removeItem(userName);
 show();
}






function focus1(){
    
    
  
var input = document.getElementById('inputField');
input.style.color = "black";
input.style.background= "yellow";
input.style.border= "2px solid #202023";
 

}
function blur1(){
       
var input = document.getElementById('inputField');
input.style.color = "black";
input.style.background= "white";
input.style.border= "2px solid #b3b3bc";

}

 function logout(){
     localStorage.setItem('login','');
     window.location = 'index.html';
 }



 function get_todos() {  //get todos from db
    var todos = new Array;
    var todos_str = localStorage.getItem(userName);
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}


function remove(id) {    //remove selected todo from db
    var id =this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem(userName, JSON.stringify(todos));

    show();

    
}

function show(){
    
    var todos = get_todos();
    
    document.getElementById('list').innerHTML="";
    for(var i=0; i<todos.length; i++) {
       
    var listTag = document.createElement('LI');

 if(i % 2 ==0){
            listTag.className = "even";
        }else  listTag.className = "odd";

    var tagText = document.createTextNode(todos[i]);
   listTag.appendChild(tagText);
   var DOM_img = document.createElement("img");

DOM_img.src = "images/close.png";
DOM_img.style.height = "25px";
DOM_img.style.width = "25px";
DOM_img.style.float="right";
DOM_img.className= 'remove';

        listTag.appendChild(DOM_img);
 document.getElementById('list').appendChild(listTag);
    document.getElementById('inputField').value ='';

    }

 var buttons = document.getElementsByClassName('remove');

     for (var i=0; i < buttons.length; i++) {
         buttons[i].id = i;
  buttons [i].addEventListener("click",remove);

    }

    
}
function changeBorder(id){
    document.getElementById(id).style = 'border-bottom: 3px solid #df5799;';
}

function reverseBorder(id){
    document.getElementById(id).style = '  border-bottom: 1px solid #DCCBCF;';
}  

 show();