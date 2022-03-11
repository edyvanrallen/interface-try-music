function post() {
   // event.preventDefault();

    let url = "http://localhost:3000/events";

    let type = document.getElementById("selection").value;
    let name = document.getElementById("nameEv").value;
    let date = document.getElementById("dateEv").value;
    let time = document.getElementById("timeEv").value;
    let place = document.getElementById("placeEv").value;
    let desc = document.getElementById("desc").value;

    data = {
        name: name,
        date: date,
        time: time,
        place: place,
        description: desc,
        type: type
    }

    console.log(data)

    axios.post(url, data)
        .then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
}

/*function get(){
    let url = "http://localhost:3000/events";

    axios.get(url)
    .then((res) => {
        
    }).catch((err) => {
        console.log(err);
    })
}*/

post()