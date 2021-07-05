

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
console.log(thedate.getDay);

   
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selecttown');
	s.style.display = "block";
	s.textContent = sel.value;
	
}