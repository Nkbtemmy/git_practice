

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
   document.getElementById('signups').addEventListener('submit', Register);
  
   // Submit form
   function Register(e){
     e.preventDefault();
     // get input
     var email = getInput('Uemail');
     var Pass = getInput('Upass');
     var Urep_pass = getInput('Urep_pass');
   if(pass === Urep_pass){
     fireData(Pass,email);
     }
   else{alert("Unmarched password")}
     console.log(email);
   }
   // Function to get form values
   function getInput(id){
      return document.getElementById(id).value;
    }
   //end of extraction of form element
  //-----get-----
  function fireData(a,c){
  db.collection("users").add({
     email:c,
     Password: a,
   
  })
  .then(function(docRef) {
     console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
     console.error("Error adding document: ", error);
  });
 }