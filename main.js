// función registro

function signup(e){
    event.preventDefault();
    
    
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    let user = {
        email: email,
        username: username,
        password: pass,
    };
    
    let json = JSON.stringify(user);
    localStorage.setItem(username, json);
    
    if (username === "" || email === "" || password ==="") {
        result.innerHTML = "Todos los campos son obligatorios";
        return false;
     }else{
        alert("Bienvenido ingresá al link de abajo");
       }
    }
    
    // función login
    
    function loginFunc(e) {
        event.preventDefault();
    
        let username = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
        let result = document.getElementById("result");
        
        let user = localStorage.getItem(username);
        let data =JSON.parse(user);   
        console.log(data);
    
        if (user == null) {
            result.innerHTML = "Usuario Erróneo";
        } else if(username == data.username && pass == data.password){
            alert("Bienvenido!")
            window.location.href = "index.html"
        }else{
            result.innerHTML = "Password erróneo";
        }
    }