function registerUser() {
    event.preventDefault();

    let url = "http://localhost:8080/users";

    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    if (password != password2) {
        return alert("Passwords don't match")
    }

    console.log(name, email, password);
    data = {
        name: name,
        email: email,
        password_hash: password
    }

    console.log(data);

    axios.post(url, data)
        .then((res) => {
            console.log(res.data);
            window.location.href = "../pages/login-page.html";
        }).catch((err) => {
            alert(JSON.stringify(err.response.data.mensagem));
        });
}

//post();