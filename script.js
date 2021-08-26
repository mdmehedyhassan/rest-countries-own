(function restCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => setCountries(data))
})();

function setCountries(country) {
    country.map(country => {
        console.log(country);
        // document.getElementById('country').innerText = country.name;
        let div = document.createElement('div');
        div.classList.add('col-md-4');
        div.classList.add('col-sm-6');
        div.classList.add('p-2');
        const divInside = document.getElementById('country-home');

        div.innerHTML = `
            <div id="country-home" class="h-100 p-3 country-style">
                <img class="w-100" src=${country.flag} alt="">
                <h2 class="pt-4">${country.name}</h2>
                <h6>Capital: ${country.capital}</h6>
            </div>
        `
        divInside.appendChild(div)

    })
}