const apiKey = "e19002a1449ba1d6c1b14c9d077e8c32";
const wheatherData = document.getElementById("wheatherdata-container");
const cityInput = document.getElementById("city-inputtext");

const formEl = document.getElementById("inputform");

formEl.addEventListener("submit", (event)=>
{
    //whenever soemthing happens in the forms and data is entered in form we get the data is this event argaument
event.preventDefault();
const cityInputValue = cityInput.value;
getWheatherData(cityInputValue);
});
 async function getWheatherData(cityInputValue){
try {
    const response = await fetch (`http://api.openweathermap.org/data/
2.5/weather?q=${cityInputValue}&appid=${apiKey}&units=metric`)
if(!response.ok)
{
    throw new Error("Network response was not ok")
}
const data = await response.json()
console.log(data);
} catch (error) {
    
}
}