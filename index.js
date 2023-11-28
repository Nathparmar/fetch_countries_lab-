



const getCountryByName = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json()
    document.querySelector("#get-country-by-name").innerText = data[0].name.common;
    console.log(data);
    
}





const button = document.querySelector("#btn1");
button.addEventListener("click", () => { 
    getCountryByName("Macau");
    console.log("button clicked");
});


