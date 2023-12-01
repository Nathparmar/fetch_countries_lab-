





const getCountryByName = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = await response.json()
    
    
    document.querySelector("#get-country-by-name").innerText = data[0].name.common;
    document.querySelector("#capital").innerText = data[0].capital;
    document.querySelector("#language").innerText = Object.values(data[0].languages).join(", ");
    document.querySelector("#population").innerText = data[0].population;



    
}

const button = document.querySelector("#btn1");
button.addEventListener("click", async () => {
    const countryInput = document.querySelector("#countryInput");
    const countryName = countryInput.value.trim();
    
     getCountryByName(countryName);
    
});

