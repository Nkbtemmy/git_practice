  function addUser(e){
    e.preventDefault();
    let name = document.getElementById('Uname').value;
    let email = document.getElementById('Uemail').value;
    let password  = document.getElementById('Upass').value;
    let conf_password  = document.getElementById('Urep_pass').value;
    if(password == conf_password ){
      fetch("http://localhost:2300/api/v1/user/new", { 
        // Adding method type 
        method: "POST", 
        // Adding body or contents to send 
        body: JSON.stringify({ 
          email,
          password,
          name
        }), 
        // Adding headers to the request 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
      }) 
      // Converting to JSON 
      .then(response => response.json()) 
      // Displaying results to console 
      .then(json => console.log(json));
      
             } 
  else{
    alert("unMarched Password");
  }
  }
  
  function signIn(e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('psw').value;
    let user = {
      email: email,
      password: password
    }
    fetch(`http://127.0.0.1:2300/api/v1/login`, { 
      // Adding method type 
      method: "POST", 
      // Adding body or contents to send 
      body: JSON.stringify({ 
        email,
        password
      }), 
      // Adding headers to the request 
      headers: { 
          "Content-type": "application/json; charset=UTF-8"
      } 
    }) 
    // Converting to JSON 
    .then(response => response.json()) 
    // Displaying results to console 
    .then(json => console.log(json))
    .catch(err=>console.log('Login Error happen')); 
  } 
//Getting Blogs
function getBlogPost(){
  fetch('http://localhost:2300/api/v1/articles/')
  .then ((res) => res.json())
  .then ((data) =>{
   // let output = '<centre><h2>Blogs</h2><centre>';
    data.forEach(function(post){
           `
       <div class="row">
      <div class="column">
        <div class="card">
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <b>
          <p style="float: right;">created at ${post.date}</p>
          </b>
        </div>
      </div>
      </div>
        `;
    });
   // document.getElementById('').innerHTML = output
  })
}
 
function addPost(e){
  e.preventDefault();
  let title = document.getElementById('btitle').value;
  let author = document.getElementById('bimage').value;
  let content  = document.getElementById('bmsg').value;
fetch("http://127.0.0.1:2300/api/v1/articles/new", { 
  // Adding method type 
  method: "POST", 
  // Adding body or contents to send 
  body: JSON.stringify({ 
    title,
    author,
    content
  }), 
  // Adding headers to the request 
  headers: { 
      "Content-type": "application/json; charset=UTF-8"
  } 
}) 
// Converting to JSON 
.then(response => response.json()) 
// Displaying results to console 
.then(json => console.log(json));
} 
 
    document.getElementById("signups").addEventListener("submit", addUser);
    document.getElementById("MyForm").addEventListener("submit", signIn);
    document.getElementById("sub").addEventListener("click", addPost);
    document.getElementById("blogs").addEventListener("load", getBlogPost);