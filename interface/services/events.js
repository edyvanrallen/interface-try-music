function createEvents() {

    let url = "http://localhost:8080";

    let token = localStorage.getItem('token')
       
    let type = document.getElementById("selection").value;
    let name = document.getElementById("nameEv").value;
    let date = document.getElementById("dateEv").value;
    let time = document.getElementById("timeEv").value;
    let place = document.getElementById("placeEv").value;
    let desc = document.getElementById("desc").value;
    let band_id = sessionStorage.getItem('band_id')

    data = {
        name: name,
        date: date,
        time: time,
        place: place,
        description: desc,
        tipo: type,
        band_id: band_id
    }

    axios.post(url + '/events', data, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            alert(response.data.mensagem);
        }).catch(error => {
            alert(JSON.stringify(error.response.data));
        });
}

function getEvents(){

    let band_id = sessionStorage.getItem('band_id')

    let data = {
        band_id: band_id
    }

    axios.post(url + '/eventsget', data)
    .then(response => {
        let events = response.data

        console.log(events)

        let section = window.document.getElementById('cardsEvents')

        for (let count in events) {
            let showEvents = document.createElement('div')
            showEvents.setAttribute('class', 'bottom-block')
            showEvents.setAttribute('id', count)
            showEvents.innerHTML = `
                <div class="limit"></div>
                <div class="limit"></div>
                <div class="content first-bottom-block">
                    <h1 class="title-fdb">${events[count]['tipo']}</h1>
                    <h2>${events[count]['name']}</h2>
                    <h3>${events[count]['description']}</h3>
                    <p><i class="fa fa-calendar"></i>${events[count]['date']}&nbsp;<i class="fa fa-clock"></i>${events[count]['time']}</p>
                    <p><i class="fa fa-map"></i>${events[count]['place']}</p>
                    <button onclick="showModall()" class="button-cards-one" href="../js/popup-cards.js"><i
                            class="fa fa-pencil"></i> Edit</button>
                </div>
                <div class="limit"></div>
                <div class="limit"></div>
            `

            section.append(showEvents)
        }
    }).catch(error => {
        alert(JSON.stringify(error.response.data));
    })
}

getEvents()

