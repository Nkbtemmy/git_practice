const firstName=document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('msg');
//sending data to database
function saveData(){
  
db.collection("users").add({
  first: firstName.value,
  email: email.value,
  message: message.value
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
}

//Getting data from database
function getData(){
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
}