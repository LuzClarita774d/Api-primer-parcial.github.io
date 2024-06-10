const container = document.querySelector("#container")
const url = "https://rickandmortyapi.com/api"

fetch(url + "/character")
    .then(response => response.json())
    .then(json => {
        const characters = json.results
        characters.forEach(character => {
            const characterTemplate = `
            <div class="character">
            <a href="character.html?id=${character.id}">
                <img src="${character.image}" alt="">
                <div class="character-detail">
                    <h1> ${character.name} </h1>
                    <h2>${character.status} - ${character.species}</h2>
                    <p>Last known location:</p>
                    <p>${character.origin.name}</p>
                    <p>First seen in:</p>
                    <p>${character.location.name}</p>
                </div>
            </div>`
            container.innerHTML += characterTemplate
        })
    })