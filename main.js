async function countryData() {
    try {
        // const responseCountry = await axios.get(
        //     "https://restcountries.eu/rest/v2/name/belgium"
        // );
        const responseCountry = await axios.get (
            "https://restcountries.eu/rest/v2/name/tuvalu?fullText=true"
        );

        // console.log(responseCountry);
        const infoCountry = responseCountry.data[0];
        console.log("Valuta?", infoCountry);
        console.log("VALUTA country", infoCountry.currencies);
        // 2 ****
        const displayCountryInfo = `${infoCountry.name} is situated in ${infoCountry.subregion}. It has a population of ${infoCountry.population} people.`;
        console.log(displayCountryInfo);

        // 3 ***
        const capital = `The capital is ${infoCountry.capital}`
        console.log(capital);

        // 4.1 ******
        const countryCurrency = currenciesCountry(infoCountry.currencies)
        console.log(countryCurrency);
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

        function currenciesCountry(currencies) {
            // console.log("Valuta?", currencies);
            let allCurrencies = "";
            for (let i = 0; i < currencies.length ; i++) {
                const currency = currencies[i];
                // console.log("INDEX", currency);
                if (currencies.length === 1) {
                    // console.log("CURRENCY?", currency.name);
                    const oneValuta = currency.name;
                    // console.log("In EURO?", oneValuta);
                    const resultValuta = `and you can pay with ${oneValuta}'s`;
                    allCurrencies += oneValuta;
                    console.log(resultValuta);
                }
                // [] 2 valuta's => you can pay with {}'s and {}'s
                else if(currencies.length === 2) {
                    const twoValutas = currency.name;
                    const resultTwoValutas = `and you can pay with ${currency.name}'s and ${currency.name}'s`;
                    allCurrencies += resultTwoValutas;
                    console.log(resultTwoValutas);
                }

            }

            return allCurrencies;


            // const formattedSizeWithPike = `${currentScreenSize} inches (${Math.round(currentScreenSize * 2.54)} cm) |`;
            // console.log(formattedSizeWithPike);
            // allSizes = allSizes + formattedSizeWithPike;
            // console.log(allSizes);

            // const lastEntrySize = screenSize.availableSizes.length -1;
            // console.log("Gelijk aan:" , lastEntrySize, screenSize.availableSizes.length -1 === i);

            //if(screenSize.availableSizes.length -1 === i) {
            // console.log("Last:" )
            // const formattedSize = `${currentScreenSize} inches (${Math.round(currentScreenSize * 2.54)} cm)`;
            // console.log(formattedSize);
            //  allSizes = allSizes + formattedSize;

            // } else {
            // console.log("Pike toevoegen?");
            //  const formattedSizeWithPike = `${currentScreenSize} inches (${Math.round(currentScreenSize * 2.54)} cm) | `;
            // console.log(formattedSizeWithPike);
            //  allSizes = allSizes + formattedSizeWithPike;
            //  }
            //   }
            // return allSizes;


// console.log(screenSizesTV(inventory[1]));
        }

