async function countryData() {
    try {
        const resultCountry = await axios.get("https://restcountries.eu/rest/v2/name/belgium");
        // console.log(resultCountry);
        const infoBelgium = resultCountry.data[0];
        console.log(infoBelgium);
    }
    catch (error) {
        console.log(error);
    }
}
countryData();

// 1. *************
const clickButton = document.getElementById("search-button");
clickButton.addEventListener("click", countryData);

//2. ***************
// Maak een string die het volgende logt:
// `[country-naam] is situated in [subarea-name]. It has a population of [amount] people.`
const