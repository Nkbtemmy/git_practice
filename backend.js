// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyDXquDlRsa2PLLGqS18HXWSHL50w5sSl3w",
  authDomain: "voicetoworld.firebaseapp.com",
  databaseURL: "https://voicetoworld.firebaseio.com",
  projectId: "voicetoworld",
  storageBucket: "voicetoworld.appspot.com",
  messagingSenderId: "164303672571",
  appId: "1:164303672571:web:0b1fb4e3744699ac9a4c5e",
  measurementId: "G-22B3X8437Y"
};
firebase.initializeApp(config);

var db = firebase.firestore();
//Extract Element from form
  // Listen for form submit
  document.getElementById('Cform').addEventListener('submit', submitForm);
 
  // Submit form
  function submitForm(e){
    e.preventDefault();
    // get input
    var Name = getInput('cname');
    var Email = getInput('cemail');
    var Message = getInput('cmsg');


    if(Name==="" || Email==="" || Message===""){
      if(Name===""){
       x="Enter your name";
        }
      else{x="";}
      if( Email===""){
        y="enter valid email"
      }
      else{y="";}
      if(Message===""){
       z="Try to type anything";
       }
      else{z="";}
      alert(x+"\n"+y+"\n"+z);
 }
 else{
    ContactData(Name,Email,Message);
    console.log(Name+"  is inserted");
  }
  // Function to get form values
  function getInput(id){
     return document.getElementById(id).value;
   }
  //end of extraction of form element
 //-----get-----
 function ContactData(a,c,e){
 db.collection("contacts").add({
    
    NAME: a,
    EMAIL:c,
    MESSAGE:e
 })
 .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    window.location.replace('thankyou.html');
 })
 .catch(function(error) {
    console.error("Error adding document: ", error);
 });
}

}
