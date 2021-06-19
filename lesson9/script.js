

function toggleMenu() {
    document.getElementsByClassName("links")[0].classList.toggle("responsive");
    document.getElementsByClassName("menu")


}

let thedate = new Date();
console.log(thedate.getDay());

if (thedate.getDay() ==0,1,2,3,4,5) {
    document.querySelector('#banner').style.display = 'none'
}


const temp = parseInt(document.getElementById("temp").textContent);
const wSpeed = parseInt(document.getElementById("Speed").textContent);

let wChill = 35.74 + (0.6215*temp) - 35.75*(wSpeed**0.16) + 0.4275*temp*(wSpeed**0.16);
console.log("testing");

document.getElementById("output").innerHTML=Math.round(wChill);

console.log(wChill);

console.log(temp);
console.log(wSpeed);