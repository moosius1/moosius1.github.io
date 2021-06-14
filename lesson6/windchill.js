
  const tempF = parseInt(document.querySelector("temp"))
  const wSpeed = parseInt(document.querySelector("wSpeed"))
    
  function windChill(tempF,wSpeed){
    calcChill = 35.74 + (0.6215*tempF) - 35.75*(wSpeed**0.16) + 0.4275*tempF*(wSpeed**0.16);
    return calcChill;
  }  

  function doInputOutput(){
    //get numbers from input fields
   
    windChill(tempF, wSpeed);
    
  
    
  
    document.querySelector('#output').innerHTML = Math.round(calcChill) + " degrees fahrenheit";
  
  }

  doInputOutput()

let wc= calcChill;
document.querySelector("#output").innerHTML = wc;





