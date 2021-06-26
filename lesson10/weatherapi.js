fetch("api.openweathermap.org/data/2.5/weather?id=5604473&appid=78c3635114fcdf69ed38df35765e5249")

.then(function (data){
    return data.json();
})

console.log(data);

    
})