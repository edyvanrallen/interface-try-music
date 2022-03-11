const axios = require('axios');

let musico = { name: "Edu", email: "edu@gmail.com", password: "eduardo031", password_hash: "eduardo031", contact: "0000-0000", instrument: "clarinete" };
axios.post('http://localhost:8080/musico/', musico);
axios.get('http://localhost:8080')
    /*let evento = { name: "Aula", date: "2022-02-04", time: "13:00:00", place: "COF", description: "aula de geografia", opened: true };
    axios.post('http://localhost:8080/events/', evento);
    axios.get('http://localhost:8080')*/
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });

console.log("foi")