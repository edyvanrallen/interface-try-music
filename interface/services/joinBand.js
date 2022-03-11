const url = "http://localhost:8080"

function joinBand() {
    let bandCode = window.document.getElementById('bandCodeInput').value

    console.log(bandCode)

    if(bandCode == "") {
        return alert("Campos Inválidos")
    }

    let data = {
        band_id: bandCode
    }

    let token = localStorage.getItem('token')

    axios.post(url + '/join', data, {headers: {"Authorization" : `Bearer ${token}`}})
    .then(response => {
        alert(JSON.stringify(response.data))
        return window.location.href = "bands.html"
    })
    .catch(error => {
        return window.alert(JSON.stringify(error.response.data))
    })
}