

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


if (thedate.getDay() ==0,1,2,3,4,5) {
    document.querySelector('#banner').style.display = 'none'
}

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
            document.getElementById(`foreimage4`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[3].weather[0].icon +'.png';
            document.getElementById(`foreimage5`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[4].weather[0].icon +'.png';
            
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

const firstName = document.getElementById('nameOne');
const secondName = document.getElementById('nameTwo');
const thirdName = document.getElementById('nameThree');
const mottoOne = document.getElementById('motto1');
const mottoTwo = document.getElementById('motto2');
const mottoThree = document.getElementById('motto3');
const year1 = document.getElementById('yrfnd1');
const year2 = document.getElementById('yrfnd2');
const year3 = document.getElementById('yrfnd3');
const people1 = document.getElementById('pop1');
const people2 = document.getElementById('pop2');
const people3 = document.getElementById('pop3');
const water1= document.getElementById('rain1');
const water2 = document.getElementById('rain2');
const water3 = document.getElementById('rain3');
const picture1 = document.querySelector('.image1');
const picture2 = document.querySelector('.image2');
const picture3 = document.querySelector('.image3');
const eventOne = document.getElementById('event1');
const eventTwo = document.getElementById('event2');
const eventThree = document.getElementById('event3');




fetch("https://byui-cit230.github.io/weather/data/towndata.json")

.then(function (data){
    return data.json();
})
.then(function(jsonObject){
    
    const towns = jsonObject['towns'];
    const town = towns.filter(town => town.name == 'Preston' || town.name == 'Soda Springs' || town.name == "Fish Haven")
    
    //names

    //events for each town
    eventOne.textContent= town[2].events[0];
    eventTwo.textContent= town[2].events[1];
    eventThree.textContent= town[2].events[2];
})