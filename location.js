const url = window.location.search
const urlParams = new URLSearchParams(url)
const id = urlParams.get('id')
const urlAPI = "https://rickandmortyapi.com/api" 

fetch(urlAPI + "/location/" + id)  
    .then(response => response.json())
    .then(location => {
            const locationTemplates = `
            <div id="location">
                <div class="detail">
                    <h1>${location.name}</h1>
                    <h3>Type:</h3>
                    <p>${location.type}</p>
                    <h3>Dimension:</h3>
                    <p>${location.dimension}</p>
                    <h3>URL:</h3>
                    <p>${location.url}</p>
                </div>
            </div>`
                LocationContainer.innerHTML += locationTemplates
        })