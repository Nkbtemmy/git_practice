    function validate(){
    var a = document.getElementById('name').value;
    var b = document.getElementById('email').value;
    var c = document.getElementById('msg').value;
    var x,y,z;
    if(a==""){
        x="Enter your name";
    }
    else{x="";}
    if(b==""){
        y="Enter your name";
    }
    else{y="";}
   if(c==""){
        z="Enter your name";
    }
    else{z="";}
    alert(x+"\n"+y+"\n"+z);
}
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }