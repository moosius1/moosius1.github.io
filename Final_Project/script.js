

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



fetch("https://api.openweathermap.org/data/2.5/onecall?lat=47.5404&lon=-122.6363&exclude=minutely,hourly&appid=78c3635114fcdf69ed38df35765e5249")





fetch("https://api.openweathermap.org/data/2.5/onecall?lat=47.5404&lon=-122.6363&exclude=hourly,minutely,alerts&appid=78c3635114fcdf69ed38df35765e5249&units=imperial")
.then((response) => response.json())
.then((jsObject) =>{
    

    const current = jsObject['current']['temp'];
    const currentDescription = jsObject['current']['weather'][0]['description'];
    
    const humid = jsObject['current']['humidity'];
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject['current']["weather"][0].icon + '.png';
    
   
    
    document.getElementById('temp').textContent = current;
    document.getElementById('High').textContent = currentDescription;
    document.getElementById('Humidity').textContent = humid+"%";
    document.getElementById('desImg').src=imagesrc;
    
}


)
