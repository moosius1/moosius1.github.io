

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

fetch("https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=78c3635114fcdf69ed38df35765e5249&units=imperial")


.then(function (data){
    return data.json();
})
.then(function(jsonObject){
    
    const current = jsonObject['main']['temp'];
    const currentDescription = jsonObject['weather'][0]['description'];
    const windSpeed = jsonObject['wind']['speed'];
    const humid = jsonObject['main']['humidity'];
    const name = jsonObject['name'];
    





const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';
const desc = jsonObject.weather[0].description;



fetch("https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=78c3635114fcdf69ed38df35765e5249&units=imperial")
    .then((response) => response.json())
    .then((jsObject) =>{
        

        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const fiveDayForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
        

        fiveDayForecast.forEach(x=>{
            let d = new Date(x.dt_txt);
            
           

            
        });
    });

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



fetch("https://byui-cit230.github.io/weather/data/towndata.json")

.then(function (data){
    return data.json();
})
.then(function(jsonObject){
    
    const towns = jsonObject['towns'];
    const town = towns.filter(town => town.name == 'Preston' || town.name == 'Soda Springs' || town.name == "Fish Haven")
    
    //names
    firstName.textContent = town[0].name;
    secondName.textContent = town[1].name;
    thirdName.textContent = town[2].name;
    //mottos
    mottoOne.textContent = "Motto: " +town[0].motto;
    mottoTwo.textContent = "Motto: " +town[1].motto;
    mottoThree.textContent = "Motto: " +town[2].motto;
    //years founded
    year1.textContent = "Year Founded: " +town[0].yearFounded;
    year2.textContent = "Year Founded: " +town[1].yearFounded;
    year3.textContent = "Year Founded: " +town[2].yearFounded;
    //population
    people1.textContent = "Population: "+ town[0].currentPopulation;
    people2.textContent = "Population: "+ town[1].currentPopulation;
    people3.textContent = "Population: "+ town[2].currentPopulation;
    //rainfall
    water1.textContent = "Annual Rain Fall: " + town[0].averageRainfall;
    water2.textContent = "Annual Rain Fall: " + town[1].averageRainfall;
    water3.textContent = "Annual Rain Fall: " + town[2].averageRainfall;
    //Pictures just in case
    picture1.src = "images/erikajoannartlogo.png";
    picture2.src = "images/"+town[1].photo;
    picture3.src = "images/"+town[2].photo;
})