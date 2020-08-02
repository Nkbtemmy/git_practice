function validate(){
  var a = document.getElementById('name').value;
  var b = document.getElementById('email').value;
  var c = document.getElementById('msg').value;
  var x,y,z;
  if(a=="" || b=="" || c==""){
     if(a==""){
      x="Enter your name";
     }
     else{x="";}
     if(b==""){
       y="enter valid email"
     }
     else{y="";}
     if(c==""){
      z="Try to type anything";
      }
     else{z="";}
     alert(x+"\n"+y+"\n"+z);
}
else{
 document.getElementById("form").setAttribute("action","thankyou.html");
}

//responsive navigation
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }