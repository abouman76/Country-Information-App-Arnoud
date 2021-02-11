async function countryData() {
    try {
        const responseCountry = await axios.get(
            "https://restcountries.eu/rest/v2/name/belgium"
        );
        // console.log(responseCountry);
        const infoBelgium = responseCountry.data[0];
        console.log("BELGIE?", infoBelgium);
        // 2 ****
        const displayCountryInfo = `${infoBelgium.name} is situated in ${infoBelgium.subregion}. It has a population of ${infoBelgium.population} million people.`;
        console.log(displayCountryInfo);

        // 3 ***
        const capital = `${infoBelgium.capital}`
        console.log(capital);



    }
    catch (error) {
        console.log(error);
    }
}
countryData();

// 1. *************
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", countryData);

//2. ***************
// Maak een string die het volgende logt:
// `[country-naam] is situated in [subarea-name]. It has a population of [amount] people.`
// const displayCountryInfo = `${infoBelgium.name}`;
// console.log(displayCountryInfo);