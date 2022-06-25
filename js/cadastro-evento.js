const urlAPI = "https://xp41-soundgarden-api.herokuapp.com/events"

const formEvento = document.querySelector('form');

formEvento.addEventListener('submit', (e) => {
    e.preventDefault();

    let date = new Date(formEvento.elements[3].value);

    const enviaForm = {
        name: formEvento.elements[0].value,
        poster: "https://picsum.photos/200/300",
        attractions: [formEvento.elements[1].value],
        description: formEvento.elements[2].value,
        scheduled: date.toISOString(),
        number_tickets: formEvento.elements[4].value

    }

    fetch(urlAPI, {
            method: "POST",
            body: JSON.stringify(enviaForm),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
})