(function restCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => setCountries(data))
        .catch(err => console(err))
})();

function setCountries(country) {
    country.map(country => {
        let div = document.createElement('div');
        div.classList.add('col-md-4');
        div.classList.add('col-sm-6');
        div.classList.add('p-2');
        const divInside = document.getElementById('country-home');

        div.innerHTML = `
            <div id="country-home" class="h-100 p-3 country-style d-flex align-items-start flex-column bd-highlight mb-3">
                <div  class="mb-auto bd-highlight">
                    <img class="w-100" src=${country.flag} alt="">
                    <h2 id="country-name" class="pt-4 text-danger">${country.name}</h2>
                    <h4 class="text-info">Capital: ${country.capital}</h4>
                </div>
                <button onclick="countryDetailsHandler('${country.name}')" class="btn btn-primary mt-auto bd-highlight">Details</button>
            </div>
        `
        divInside.appendChild(div)
    })
}


function countryDetailsHandler(name){
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => response.json())
    .then(data => setCountriesData(data[0])); 
}

function setCountriesData(info) {
    console.log(info);
    document.getElementById('country-home').style.display = 'none';
    document.getElementById("country-info").innerHTML =`
        <div class="text-center m-5"><img style="width: 400px" src=${info.flag} alt=""></div>
        <h1>Country name: <span class="text-danger">${info.name}</span></h1>
        <h3> Native name: <span class="text-danger">${info.nativeName}</span></h3>
        <h3>Languages: <span class="text-danger">${info.languages[0].nativeName}</span></h3>
        <h2>Capital: <span class="text-danger">${info.capital}</span></h2>
        <h3>Population: <span class="text-danger">${info.population}</span></h3>
        <h3>Area: <span class="text-danger">${info.area}</span></h3>
        <h3>Borders share: <span class="text-danger">${info.borders}</span></h3>
        <h3>Region: <span class="text-danger">${info.region}</span></h3>
        <h3>Subregion: <span class="text-danger">${info.subregion}</span></h3>
        <h3>Currencies: Code- <span class="text-danger">${info.currencies[0].code}, Name- ${info.currencies[0].name}, Symbol- ${info.currencies[0].symbol}</span></h3>
        <h3>Numeric code: <span class="text-danger">${info.numericCode}</span></h3>
        <ul class="text-info"> 
            <h3> Translations Language </h3>
            <li>br: ${info.translations.br}</li>
            <li>de: ${info.translations.de}</li>
            <li>es: ${info.translations.es}</li>
            <li>fa: ${info.translations.fa}</li>
            <li>fr: ${info.translations.fr}</li>
            <li>hr: ${info.translations.hr}</li>
            <li>it: ${info.translations.it}</li>
            <li>ja: ${info.translations.ja}</li>
            <li>nl: ${info.translations.nl}</li>
            <li>pt: ${info.translations.pt}</li>
        </ul> 
        <button class="btn btn-danger mb-5" onclick="location.reload()">Return Home</button>
    `
}
