  function addUser(e){
    e.preventDefault();
    let name = document.getElementById('Uname').value;
    let email = document.getElementById('Uemail').value;
    let password  = document.getElementById('Upass').value;
    let conf_password  = document.getElementById('Urep_pass').value;
    if(password == conf_password ){
      fetch("https://voicetoworld.herokuapp.com/api/v1/user", { 
        method: "POST", 
        body: JSON.stringify({ 
          email,
          password,
          name
        }), 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
      }) 
      .then(response => response.json()) 
      .then(json => console.log(json));
      
             } 
    else{
      alert("Un-marched Password");
    }
    document.getElementById('signups').reset();
  }
  
  function signIn(e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('psw').value;
    let user = {
      email: email,
      password: password
    }
    fetch(`https://voicetoworld.herokuapp.com/api/v1/login`, { 
      method: "POST", 
      body: JSON.stringify({ 
        email,
        password
      }), 
      headers: { 
          "Content-type": "application/json; charset=UTF-8"
      } 
    }) 
    .then(response => response.json()) 
    .then(data => {
      console.log(data)
     // localStorage.setItem("accessToken", data.accessToken);
     console.log(data.token);
     const token = data.token;
     window.localStorage.setItem("accessToken", JSON.stringify(token));
     window.setTimeout(() =>{window.location.href = "admin.html"; }, 5000); 
    })
    .catch(err=>console.log('Login Error happen')); 
    document.getElementById('MyForm').reset();

  }
         //localStorage.setItem("lastname", "Smith");
    //.then(data => console.log(data.token))
function addPost(e){
  e.preventDefault();
  let title = document.getElementById('btitle').value;
  let author = document.getElementById('bimage').value;
  let content  = document.getElementById('bmsg').value;
fetch("https://voicetoworld.herokuapp.com/api/v1/article/new", { 
  method: "POST", 
  body: JSON.stringify({ 
    title,
    author,
    content
  }), 
  headers: { 
      "Content-type": "application/json; charset=UTF-8"
  } 
}) 
.then(response => response.json()) 
.then(json => console.log(json))
.catch(err=>console.log('Adding Blog Error happen'));
}

function saveBlog(){
  let title = document.getElementById('btitle').value;
  let author = document.getElementById('bimage').value;
  let content  = document.getElementById('bmsg').value;
  if(title == "" || author == "" || content == ""){
    alert("required fields can not be empty")
  } else{ 
  fetch(`https://voicetoworld.herokuapp.com/api/v1/article/new`, { 
      method: "POST", 
      body: JSON.stringify({ 
       title,author,content
      }), 
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      } 
    })  
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err=>console.log('Adding Blog Error happen'));  
  }
}

    document.getElementById("signups").addEventListener("submit", addUser);
    document.getElementById("MyForm").addEventListener("submit", signIn);
    //document.getElementById('bform').addEventListener('submit', saveBlog);
    //document.getElementById("blogs").addEventListener("load", getBlogPost);
