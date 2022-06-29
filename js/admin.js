const urlAPI = "https://xp41-soundgarden-api.herokuapp.com/events";
const tabelaShows = document.querySelectorAll('.table tbody');
tabelaShows.forEach(e => e.innerHTML = '')

/* Início tabela dinâmica dos shows */
async function atualizaLista() {
    await fetch(urlAPI)
        .then((response) => response.json())
        .then(function(json) {
            console.log(json)
            let shows = json;
            shows.map(
                function() {
                    htmlShows = ""
                    for (i = 0; i < shows.length; i++) {
                        htmlShows +=
                            `
                            <tr>
                                <th scope="row">${i + 1}</th>
                                <td>${shows[i].scheduled}</td>
                                <td>${shows[i].name}</td>
                                <td>${shows[i].attractions}</td>
                                <td>
                                    <a href="reservas.html?id=${shows[i]._id}" class="btn btn-dark">ver reservas</a>
                                    <a href="editar-evento.html?id=${shows[i]._id}" class="btn btn-secondary">editar</a>
                                    <a href="excluir-evento.html?id=${shows[i]._id}" class="btn btn-danger">excluir</a>
                                </td>
                            </tr>
                            `
                    }

                    tabelaShows.forEach(e => e.innerHTML = htmlShows)
                }
            )
            return shows
        })
}
atualizaLista();