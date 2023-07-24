var title1 = document.querySelector("body >h1")

var title2 = document.querySelector(".title2")
var title3 = document.querySelector("#title3")

// console.log(title1)
// console.log(title2)
// console.log(title3)


function changeTitle() {
    title1.innerHTML="salmou amaykoum"
    title2.innerHTML="salmou amaykoum"
    title3.innerHTML="salmou amaykoum"
}

var img = document.querySelector("img")

function chageImg(){
    img.src="Dom.png"
}

var body =  document.querySelector("body")
var btn = document.querySelector(".btn")

function darkMode(){
    console.log(body.style.backgroundColor)
    if(body.style.backgroundColor == ""){
        body.style.backgroundColor = "#ffffff"
    }
    console.log("==>",body.style.backgroundColor)
    if(body.style.backgroundColor =="rgb(255, 255, 255)"){
        body.style.backgroundColor = "#222222";
        body.style.color = "#ffffff";
        btn.innerHTML ="light mode ☀️"
        
    }
    else{
        body.style.backgroundColor ="#ffffff"
        body.style.color = "#222222";
        btn.innerHTML ="dark mode 🌑"
    }

}

var colorFavorit = document.querySelector(".colorFV")
var  fvc = document.querySelector("#fvc")
function selectColor(element){
    console.log(element.value)
    

}

function chooseLunch(element) {
    alert("You picked " + element.value);
}

