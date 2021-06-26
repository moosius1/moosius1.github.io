fetch("https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=78c3635114fcdf69ed38df35765e5249&units=imperial")


.then(function (data){
    return data.json();
})
.then(function(jsonObject){
    
    const temp = jsonObject['main']['temp'];
console.log(jsonObject);
document.getElementById('current-temp').textContent = temp;

const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';
const desc = jsonObject.weather[0].description;
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
})
