const url = "http://localhost:8080"

function getBandMural() {
    let band_id = sessionStorage.getItem('band_id')

    let bandName = window.document.getElementById('bandNameMural')

    let data = {
        id: band_id
    }

    axios.post(url + '/band', data)
    .then(response => {
        let banda = response.data
        bandName.innerHTML = response.data.name
    })
    .catch(error => {
        alert(JSON.stringify(error.response.data))
    })
}

