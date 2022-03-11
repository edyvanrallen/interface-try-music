const url = "http://localhost:8080"

function login() {
    event.preventDefault();

    let email = window.document.getElementById('email').value;
    let password = window.document.getElementById('password').value;

    let data = {
        email: email,
        password: password
    }

    localStorage.removeItem('token')

    axios.post(url + "/login", data)

    .then(response => {
        let token = response.data.token
        console.log(token)
        localStorage.setItem('token', token)
        window.location.href = "bands.html";
    })
    .catch(error => alert(JSON.stringify(error.response.data)))
}



/*function getUsers() {
    axios.get(url + "/users")
    .then(response => {
        console.log("OK")
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))

}

//getUsers()
*/
