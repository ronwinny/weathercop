let apiKey="3e9a27bfe91c644e5998bc60faadd786";
let apitimekey="0KL1ZU9FVWSS";
let currentLocation=document.querySelector("#currentlocation");
let currenttime=document.querySelector("#currenttime");
let weathername=document.querySelector("#weathername");
let cityname=document.querySelector("#cityname");
let wind=document.querySelectorAll(".extradatavalue")[0];
let humidityvalue=document.querySelectorAll(".extradatavalue")[1];
let searchinput=document.querySelector("#searchinput");
let searchButton=document.querySelector("#searchButton");
let weatherdegree=document.querySelector("#weatherdegree");
let imagecontainer=document.querySelector("#image-container");
let invalidenter=document.querySelectorAll(".invalidenter");
let extradatavalue=document.querySelectorAll(".extradatavalue");

searchButton.addEventListener("click", function()
{
    searchCity(searchinput.value);
})
// weather details based on city name
function searchCity(name)
{
    let timethere=null;
    console.log(apiKey);
    let locat=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}
    `);
    console.log(locat);
    locat.then((res) =>{return res.json()})
    .then((data)=>{
        validEntry();
        currenttime.innerHTML="";
        weathername.innerHTML=`${data.weather[0].description}`;
        cityname.innerHTML=`${data.name}`;
        currenttime.innerHTML=` ${data.sys.country}`;
        humidityvalue.innerHTML=`${data.main.humidity}%`;
        wind.innerHTML=`${(data.wind.speed*3.6).toFixed(2)} km/h`;
        weatherdegree.innerHTML=`${(data.main.temp - 273.15).toFixed(2)} <sup>o</sup>` 
        console.log(data)

        switch((data.weather[0].description))
        {
            case "broken clouds":
            case "overcast clouds":
            {
                imagecontainer.style.backgroundImage=`url('images/cloudy.jfif')`;
                console.log("1")
                break;
            }
            case "mist":
            case "smoke":
            case "haze":
            case "fog":
            {
                imagecontainer.style.backgroundImage=`url('images/fog.jfif')`;
                break;
            }
            case "light rain":
            case "drizzle": 
            case "heavy rain":
            case "moderate rain":
            case "rain":
            {
                imagecontainer.style.backgroundImage=`url('images/rain.jfif')`
                break;
            }
            case "sleet":
            case "hail":
            case "snow":
            {
                imagecontainer.style.backgroundImage=`url('images/snow.jfif')`
                break;
            }
            case "hurricane":
            case "tropical storm":
            case "tornado":
                {
                    imagecontainer.style.backgroundImage=`url('images/tornado.jfif')`
                    break;
                }
            case "dust Storm":
            case "thunderstorm":
            {
                imagecontainer.style.backgroundImage=`url('images/thunder.jfif')`
                break;
            }
            case "tornado":
            {
                imagecontainer.style.backgroundImage=`url('images/tornado.jfif')`
                break;
            }
            default:
            {
                imagecontainer.style.backgroundImage=`url('images/sunny.jfif')`
                break;
            }
        }
    })
    .catch(error =>
        {
            invalidEntry();
            currenttime.innerHTML=`&#9888; please enter a valid place/city`;
        })
       
    
}

function invalidEntry()
{
    invalidenter.forEach((elements)=>
    {
        elements.classList.add("invalidenter");
        extradatavalue[0].innerHTML="";
        extradatavalue[1].innerHTML="";

    })
}

function validEntry()
{
    invalidenter.forEach((elements)=>
    {
        elements.classList.remove("invalidenter")
    })
}





