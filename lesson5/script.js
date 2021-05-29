

function toggleMenu() {
    document.getElementsByClassName("links")[0].classList.toggle("responsive");
    document.getElementsByClassName("menu")


}

let thedate = new Date();
console.log(thedate.getDay());

if (thedate.getDay() ==0,1,2,3,4,5) {
    document.querySelector('#banner').style.display = 'none'
}