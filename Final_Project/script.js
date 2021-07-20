

function toggleMenu() {
    document.getElementsByClassName("links")[0].classList.toggle("responsive");
    document.getElementsByClassName("menu")


}

date =  new Date();
y = date.getFullYear();
m = date.getMonth() + 1;
d = date.getDate();
document.getElementById("dates").innerHTML = m + "/" + d + "/" + y;



document.querySelector('#lastmod').textContent = document.lastModified;

let thedate = new Date();




fetch("https://api.openweathermap.org/data/2.5/weather?id=5807236&appid=78c3635114fcdf69ed38df35765e5249&units=imperial")


.then(function (data){
    return data.json();
})
.then(function(jsonObject){
    
    const current = jsonObject['main']['temp'];
    const currentDescription = jsonObject['weather'][0]['description'];
    const windSpeed = jsonObject['wind']['speed'];
    const humid = jsonObject['main']['humidity'];
    const name = jsonObject['name'];
    



document.getElementById('townName').textContent = name;
document.getElementById('temp').textContent = current;
document.getElementById('High').textContent = currentDescription;
document.getElementById('Speed').textContent = windSpeed;
document.getElementById('Humidity').textContent = humid+"%";

const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';
const desc = jsonObject.weather[0].description;



fetch("https://api.openweathermap.org/data/2.5/forecast?id=5807236&appid=78c3635114fcdf69ed38df35765e5249&units=imperial")
    .then((response) => response.json())
    .then((jsObject) =>{
        

        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const fiveDayForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
        

        fiveDayForecast.forEach(x=>{
            let d = new Date(x.dt_txt);
            
            document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
            document.getElementById(`foreimage1`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[0].weather[0].icon +'.png';
            document.getElementById(`foreimage2`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[1].weather[0].icon +'.png';
            document.getElementById(`foreimage3`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[2].weather[0].icon +'.png';
           
            
            
            day++

            
        });
    });

})



.then(function(windChill){
const temp = parseInt(document.getElementById("temp").textContent);

const wSpeed = parseInt(document.getElementById("Speed").textContent);

let wChill = 35.74 + (0.6215*temp) - 35.75*(wSpeed**0.16) + 0.4275*temp*(wSpeed**0.16);


document.getElementById("output").innerHTML=Math.round(wChill);

})




