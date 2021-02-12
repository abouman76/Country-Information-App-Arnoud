async function countryData() {
    try {
        // const responseCountry = await axios.get(
        //     "https://restcountries.eu/rest/v2/name/belgium"
        // );
        const responseCountry = await axios.get (
            "https://restcountries.eu/rest/v2/name/belgium?fullText=true" //tuvalu
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
    }
    catch (error) {
        console.log(error);
    }
}
countryData();

// VRAAG 1. *************
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", countryData);

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
        return acc + `${currency.name}'s `;
    }
        if(index === currencies.length -1) {
        return acc + `and ${currency.name}'s `;
    }

},"and you can pay with ");
    return allCurrencies;
}
// console.log(currenciesCountry([{name: "euro"}, {name: "dollar"}]));

function languagesCountry(languages) {
    // console.log("Functie aanroepen?", languages);
    const allLanguages = languages.reduce((acc, language, index) => {
        console.log("TALEN", language);
        if(languages.length === 1 || index === 0) {
            return acc = `${language.name}`;
        }
        if(index === languages.length -1) {
            return acc + ` and ${language.name}`;
        }
        if(index !== languages.length -1 && index !== 0) {
            return acc + `, ${language.name}`
        }



    }, "They speak ");

    return allLanguages;
}
// languagesCountry([{language: "NL"}, {language: "BE"}]); //