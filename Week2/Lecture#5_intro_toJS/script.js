// alert("hello")

function testForJS(){
   console.log("hello from js file ")
}


function example(element) {
    console.log("element clicked", element);
    console.log(element.innerHTML);

    element.innerHTML = "js"
    console.log(element.innerHTML);
}

function turnOff(element) {
    if(element.innerHTML == "On"){
        element.innerText = "Off";
        element.style.backgroundColor = "red"

    }
    else if (element.innerHTML == "Off"){
        element.innerText = "On";
        element.style.backgroundColor = "aquamarine"

    }
}

function DeleteH1(element){
    element.remove()
}

