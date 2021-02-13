// VRAAG 1. *************
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", countryData);

// VRAAG 8.
const searchInput = document.getElementById("search-field");
searchInput.addEventListener("keyup", handleKeyUp);
// console.log("ELEMENT?", searchInput);

// vraag 7
// anker element voor info textblok!!
const displayCountryText = document.getElementById("display-flag-country");

// anker element voor de vlag
const displayFlag = document.getElementById("display-flag");

// VRAAG 9 =>GLOBALE VARIABELE
let globalInputElement = "";
// console.log("Lege string?", globalInputElement);
function handleKeyUp(event) {
    globalInputElement = event.target.value;
    if(event.key === "Enter") {
        console.log(globalInputElement);
        countryData();
    }
}

async function countryData() {
    try {
        // const responseCountry = await axios.get(
        //     "https://restcountries.eu/rest/v2/name/belgium"
        // );
        // const country = "Nederland"
        const responseCountry = await axios.get (
            `https://restcountries.eu/rest/v2/name/${globalInputElement}?fullText=true`
        );

        console.log(responseCountry);
        const infoCountry = responseCountry.data[0];
        // console.log("Valuta?", infoCountry);
        //console.log("VALUTA country", infoCountry.currencies);

        // 2 ****
        const displayCountryInfo = `${infoCountry.name} is situated in ${infoCountry.subregion}. It has a population of ${infoCountry.population} people.`;
        console.log(displayCountryInfo);

        // 3 ***
        const capital = `The capital is ${infoCountry.capital}`
        console.log(capital);

        // 4 ******
        const countryCurrency = currenciesCountry(infoCountry.currencies)
        console.log(countryCurrency);

        // 6 ***
        const countryLanguages = languagesCountry(infoCountry.languages);
        console.log(countryLanguages);

        // 7 ***

        // vlag
        const flagElement = document.createElement("img");
        // console.log("IMG-Link?", flagElement);
        flagElement.setAttribute("src", infoCountry.flag);
        flagElement.setAttribute("width", "50px");
        displayFlag.appendChild(flagElement);

        // DOM elements met de land-informatie
        const countryNameElement = document.createElement("H3");
        // console.log("Wat is dit?", countryName)
        countryNameElement.textContent = `${infoCountry.name}`;
        displayCountryText.appendChild(countryNameElement);

        const countryInfoElement = document.createElement("p");
        countryInfoElement.textContent = `${displayCountryInfo}`;
        displayCountryText.appendChild(countryInfoElement);

        const capitalCurrencyElement = document.createElement("p");
        capitalCurrencyElement.textContent = `${capital} ${countryCurrency}.`;
        displayCountryText.appendChild(capitalCurrencyElement);

        const languageElement = document.createElement("p");
        languageElement.textContent = `${countryLanguages}`;
        displayCountryText.appendChild(languageElement);



    }
    catch (error) {
        console.log(error);
    }
}
// countryData();



// VRAAG 2. ***************
// Maak een string die het volgende logt:
// `[country-naam] is situated in [subarea-name]. It has a population of [amount] people.`
// const displayCountryInfo = `${infoBelgium.name}`;
// console.log(displayCountryInfo);

// VRAAG 4

function currenciesCountry(currencies) {
    // console.log("Functie aangeroepen?", currencies);
    const allCurrencies = currencies.reduce((acc, currency, index) => {
        // console.log("Laatste valuta", currency, index === currencies.length -1);

        if(index !== currencies.length -1 || currencies.length === 1){
        return acc + `${currency.name}'s`;
    }
        if(index === currencies.length -1) {
        return acc + ` and ${currency.name}'s `;
    }

},"and you can pay with ");
    return allCurrencies;
}
// console.log(currenciesCountry([{name: "euro"}, {name: "dollar"}]));

function languagesCountry(languages) {
    // console.log("Functie aanroepen?", languages);
    const allLanguages = languages.reduce((acc, language, index) => {
        // console.log("TALEN", language);

        // 1 taal
        if(languages.length === 1 || index === 0) {
            return acc + `${language.name}`;
        } // 2 talen met "and" samenvoegen
        if(index === languages.length -1) {
            return acc + ` and ${language.name}`;
        } // 3 talen met , tussen de entry's met uitzondering van de een na laatste en laatste.
        if(index !== languages.length -1 && index !== 0) {
            return acc + `, ${language.name}`;
        }

    },"They speak ");
    return allLanguages;
}
// languagesCountry([{language: "NL"}, {language: "BE"}]);




// VRAAG 9.