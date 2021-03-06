// VRAAG 1. *************
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", countryData);

// vraag 7
// anker element voor info tekstblok (en de vlag!!)
const displayCountryText = document.getElementById("text-country");
// console.log("HALLO!!", displayCountryText);

// element voor de vlag
const displayFlag = document.getElementById("display-flag");

// VRAAG 8.
const searchInput = document.getElementById("search-field");
searchInput.addEventListener("keypress", handleKeyPress);
// console.log("SEARCH ELEMENT?", searchInput);

function handleKeyPress(event) {
    // console.log("KEY PRESSED?", event.code, event.code === "Enter");
    if(event.code === "Enter") {
        countryData(); // aanroepen vd functie!! ==> GLOBAAL???
    }
}

// VRAAG 11 functie, de rest staat binnen de country app functie
function removeChilderen(node) {
    while (node.firstChild) {
        node.removeChild(node.lastChild)
    }
}

async function countryData() {

    // VRAAG 9
    const inputElement = document.getElementById("search-field");
    // console.log("INPUT ELEMENT?", inputElement);
    const userInput = inputElement.value;
    // console.log("USER INPUT", userInput);

    // VRAAG 10
    searchInput.value = ""; // searchInput is de variabele van vraag 8

    // VRAAG 11
    removeChilderen(displayFlag);
    removeChilderen(displayCountryText);

    //VRAAG 12
    const errorMessage = document.getElementById("error-text");
    // console.log(errorMessage);
    errorMessage.textContent = "";

    const country = userInput; // global?

    try {

        const responseCountry = await axios.get(
            `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
        );
        // console.log(responseCountry); // geeft de info van het opgevraagde land weer in de console.

        const infoCountry = responseCountry.data[0];
        // console.log("Valuta?", infoCountry);
        //console.log("VALUTA country", infoCountry.currencies);

        // 2 ****
        const displayCountryInfo = `${infoCountry.name} is situated in ${infoCountry.subregion}. It has a population of ${infoCountry.population} people.`;
        // console.log(displayCountryInfo);

        // 3 ***
        const capital = `The capital is ${infoCountry.capital}`
        // console.log(capital);

        // 4 ******
        const countryCurrency = currenciesCountry(infoCountry.currencies)
        // console.log(countryCurrency);

        // 6 ***
        const countryLanguages = languagesCountry(infoCountry.languages);
        // console.log(countryLanguages);

        // VRAAG 7 - vlag element
        const flagElement = document.createElement("img");
        flagElement.setAttribute("src", infoCountry.flag);
        flagElement.setAttribute("width", "50px");
        displayFlag.appendChild(flagElement);

        // VRAAG 7 - DOM elements met de land-informatie
        const countryNameElement = document.createElement("H3");
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


    } catch (error) {
        console.log(error);
        errorMessage.textContent = `${country} gives no hit! Please try again in english.`;
    }
}
// countryData(); => wordt nu aangeroepen bij de function handleKeyPress


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
// languagesCountry([{language: "NL"}, {language: "BE"}]) => dit gebruik je bij testen zonder aanroepen functie.


