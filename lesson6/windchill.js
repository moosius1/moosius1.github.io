function windChill(tempF,wSpeed){
    calcChill = 35.74 + (0.6215*tempF) - 35.75*(wSpeed**0.16) + 0.4275*tempF*(wSpeed**0.16);
    return calcChill;
  }  
    
  function doInputOutput(){
    //get numbers from input fields
    let tempF = parseInt(document.getElementById('temp').value);
    let wSpeed = parseInt(document.getElementById('wSpeed').value);
    windChill(tempF,wSpeed);
    
  
    
  
    document.getElementById('output').innerHTML = Math.round(calcChill) + " degrees fahrenheit";
  
  }
      