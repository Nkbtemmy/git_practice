function validate(){
  var name = document.forms["form"]["name"];               
    var email = document.forms["form"]["email"];      
    var what =  document.forms["form"]["msg"];   
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    }  
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    if (what.value == "")                  
    { 
        alert("Type samething......."); 
        what.focus(); 
        return false; 
    } 
    document.getElementById("form").setAttribute("action","thankyou.html");
    return true; 
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