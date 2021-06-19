 //extracting the DOM elements from the HTML so we can input our API data into them! Exciting!
 //This type of dom manipulation should be familar from a few weeks ago. 
 const mainScreen = document.querySelector('.main-screen');
 const pokeName = document.querySelector('.poke-name');
 const pokeId = document.querySelector('.poke-id');
 const pokeFrontImage = document.querySelector('.poke-front-image');
 const pokeBackImage = document.querySelector('.poke-back-image');
 const pokeTypeOne = document.querySelector('.poke-type-one');
 const pokeTypeTwo = document.querySelector('.poke-type-two');
 const pokeWeight = document.querySelector('.poke-weight');
 const pokeHeight = document.querySelector('.poke-height');



 console.log(pokeName);
 
 /*first we are going to pull into our javascript the specific data we are requesting from the API. 
 you can think of this step as placing your order at the restaurant*/

 fetch('https://pokeapi.co/api/v2/pokemon/249')

 //because there is a delay with our javascript loading in the data from the API we will use a then to perform a function once the data is loaded. 

 .then(res => {
    //we need to change the results we are getting from the api into a readable format in this case .json
    return res.json();
   })
   .then(data=>{
      console.log(data);
      mainScreen.classList.remove('hide');

/*At this point we need to take the data we extracted from our API
and populate it into our HTML 
Each of the dom elements will be updated based on data that is stored within specific
arrays that we received from the API */

     pokeName.textContent = data['name'];
     pokeId.textContent = data['id'];
     pokeWeight.textContent = data['weight'];
     pokeHeight.textContent = data['height'];
      
     const dataTypes = data['types'];
     const dataFirstType = dataTypes[0];
     const dataSecondType = dataTypes[1];
     pokeTypeOne.textContent = dataFirstType['type'] ['name'];
     if (dataSecondType) {
        pokeTypeTwo.classList.remove('hide');
        pokeTypeTwo.textContent = dataSecondType['type'] ['name'];
     } else {
        pokeTypeTwo.classList.add('hide');
        pokeTypeTwo.textContent = '';
     }
     console.log(dataFirstType);

     pokeFrontImage.src = data['sprites'] ['front_default'];
     pokeBackImage.src = data['sprites'] ['back_default'];


     
   });
   