const url = "http://localhost:8080"

function createBand() {

    event.preventDefault();

    let bandName = window.document.getElementById('bandName').value

    let data = {
        name: bandName
    }

    let token = localStorage.getItem('token')

    axios.post(url + "/bands", data, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            window.location.href = "bands.html"
        })
        .catch(error => alert(JSON.stringify(error.response.body)))
        
}


function getBands() {
    let bandName = window.document.getElementById('ShowBandName')

    let token = localStorage.getItem('token')

    axios.get(url + "/bands", { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            let bands = response.data

            if (bands.length == 0) {
                window.location.href = "bands-empty.html"
            }

            console.log(bands[0]['Band']['name'])

            let section = window.document.getElementById('main')


            for (let count in bands) {
                console.log(JSON.stringify(bands[count]['Band']['name']))
                let ShowBands = document.createElement('div')
                ShowBands.setAttribute('class', 'band')
                ShowBands.setAttribute('id', count)
                ShowBands.innerHTML = `
            <button class="click-band" onclick="direcionamural(${bands[count]['Band']['id']})">
            <label id="ShowBandName" for="">${bands[count]['Band']['name']}</label>
                </button>
            <br><img src="../_imagens/concerto.jpg" alt="">
            <label id="idBand" for="">ID = ${bands[count]['Band']['id']}</label>

            <div class="dropdown">
                <button class="dropbtn"><i class="fa fa-ellipsis-v"></i></button>
                <div class="dropdown-content">
                    <a href="#" onclick="showModall()">Leave band</a>
                </div>
            </div>
        `
                section.append(ShowBands)
            }
        })
        .catch(error => alert(JSON.stringify(error.response.data)))
}

function deleteBand() {

}

getBands()