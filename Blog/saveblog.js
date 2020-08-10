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
  document.getElementById('bform').addEventListener('submit', submitForm);
 
  // Submit form
  function submitForm(e){
    e.preventDefault();
    // get input
    var btitle = getInput('btitle');
    var bimage = getInput('bimage');
    var bmsg = getInput('bmsg');
    blogData(btitle,bimage,bmsg);
    console.log(bmsg);
  }
  // Function to get form values
  function getInput(id){
     return document.getElementById(id).value;
   }
  //end of extraction of form element
 //-----get-----
 function blogData(a,c,e){
 db.collection("blogs").add({
    
    blog_title: a,
    blog_image:c,
    blog_content:e
 })
 .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
 })
 .catch(function(error) {
    console.error("Error adding document: ", error);
 });
}

//display blog
fun