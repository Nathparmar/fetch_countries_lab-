



const getCountryByName = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json()
    
    
    document.querySelector("#get-country-by-name").innerText = data[0].name.common;
    document.querySelector("#capital").innerText = data[0].capital;
    // document.querySelector("#language").innerText = data[0].languages;
    document.querySelector("#population").innerText = data[0].population;

    // const languagesElement = document.querySelector("#language");
    // const languagesString = data.map(language => language);
    //     languagesElement.innerText = languagesString;
    // const languages = data[0].languages;
    // Object.keys(languages).forEach(languageCode) => (){
    //     document.querySelector("#language").innerText = languages[languageCode];
    // }
   
}



const button = document.querySelector("#btn1");
button.addEventListener("click", () => { 
    getCountryByName("Portugal");
    console.log("button clicked");
});


