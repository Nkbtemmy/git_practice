function validation(){
    var a= document.getElementById("Name").value;
    var b= document.getElementById("Email").value;
    var c= document.getElementById("Message").value;
    var x,y,z;
   if(a==""){
    // document.getElementById("name").value += "please enter your name";
     x="pease fill in your Full Name";
   }
   else{x="";}
   if(b==""){
    y="please fill in your Email";
   }
   else{y="";}
   if(c==""){
     z="please type any message";
   }
   else{z="";}
   alert(x+"\n"+y+"\n"+z);
   }