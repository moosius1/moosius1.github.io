const busImg1=document.getElementById("galImg1");
const busImg2=document.getElementById("galImg2");
const busImg3=document.getElementById("galImg3");
const busImg4=document.getElementById("galImg4");
const busImg5=document.getElementById("galImg5");
const busImg6=document.getElementById("galImg6");
const busImg7=document.getElementById("galImg7");
const busNam1=document.getElementById("businessName1");
const busNam2=document.getElementById("businessName2");
const busNam3=document.getElementById("businessName3");
const busNam4=document.getElementById("businessName4");
const busNam5=document.getElementById("businessName5");
const busNam6=document.getElementById("businessName6");
const busNam7=document.getElementById("businessName7");


fetch("https://moosius1.github.io/Final_Project/data/business-names.json")
.then(function(data){
    return data.json();
})
.then(function(jsonObject){
    console.log(jsonObject);
    imagesrc1=jsonObject["Businesses"][0]["logourl"];
    imagesrc2=jsonObject["Businesses"][1]["logourl"];
    imagesrc3=jsonObject["Businesses"][2]["logourl"];
    imagesrc4=jsonObject["Businesses"][3]["logourl"];
    imagesrc5=jsonObject["Businesses"][4]["logourl"];
    imagesrc6=jsonObject["Businesses"][5]["logourl"];
    imagesrc7=jsonObject["Businesses"][6]["logourl"];
    busNam1.textContent=jsonObject["Businesses"][0]["name"];
    busNam2.textContent=jsonObject["Businesses"][1]["name"];
    busNam3.textContent=jsonObject["Businesses"][2]["name"];
    busNam4.textContent=jsonObject["Businesses"][3]["name"];
    busNam5.textContent=jsonObject["Businesses"][4]["name"];
    busNam6.textContent=jsonObject["Businesses"][5]["name"];
    busNam7.textContent=jsonObject["Businesses"][6]["name"];
    document.getElementById("link1").href=jsonObject["Businesses"][0]["businessurl"];
    document.getElementById("link2").href=jsonObject["Businesses"][1]["businessurl"];
    document.getElementById("link3").href=jsonObject["Businesses"][2]["businessurl"];
    document.getElementById("link4").href=jsonObject["Businesses"][3]["businessurl"];
    document.getElementById("link5").href=jsonObject["Businesses"][4]["businessurl"];
    document.getElementById("link6").href=jsonObject["Businesses"][5]["businessurl"];
    document.getElementById("link7").href=jsonObject["Businesses"][6]["businessurl"];
    document.getElementById("pnum1").textContent=jsonObject["Businesses"][0]["phonenumber"];
    document.getElementById("pnum2").textContent=jsonObject["Businesses"][1]["phonenumber"];
    document.getElementById("pnum3").textContent=jsonObject["Businesses"][2]["phonenumber"];
    document.getElementById("pnum4").textContent=jsonObject["Businesses"][3]["phonenumber"];
    document.getElementById("pnum5").textContent=jsonObject["Businesses"][4]["phonenumber"];
    document.getElementById("pnum6").textContent=jsonObject["Businesses"][5]["phonenumber"];
    document.getElementById("pnum7").textContent=jsonObject["Businesses"][6]["phonenumber"];
    busImg1.src=imagesrc1;
    busImg2.src=imagesrc2;
    busImg3.src=imagesrc3;
    busImg4.src=imagesrc4;
    busImg5.src=imagesrc5;
    busImg6.src=imagesrc6;
    busImg7.src=imagesrc7;
})

function toggleMenu() {
    document.getElementsByClassName("links")[0].classList.toggle("responsive");
    


}

function toggleView(){
    document.getElementsByClassName("gallery")[0].classList.toggle("listView");
}


date =  new Date();
y = date.getFullYear();
m = date.getMonth() + 1;
d = date.getDate();




document.querySelector('#lastmod').textContent = document.lastModified;

let thedate = new Date();




