var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient")
var random=document.querySelector(".random");
var back=document.querySelector(".back");
var forward=document.querySelector(".forward");
var historial=[[color1.value,color2.value]];
var colorIndex=0;


function setGradient(save){
    body.style.background= "linear-gradient(to right, "
    + color1.value 
    + ", "
    + color2.value +")";
    css.textContent=body.style.background + ";";
    if(save){
        const colors=[color1.value,color2.value];
        historial.push(colors);
    }
    console.log(historial);
    console.log(colorIndex);
}


function getRandomColor(){
    var letters="0123456789ABCDEF";
    var color="#";
    for (var i=0; i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function ApplyRandomColor(){
    color1.value=getRandomColor();
    color2.value=getRandomColor();
    setGradient(true);
}

color1.addEventListener("input",function(){
    colorIndex++;
    setGradient(true); 
});

color2.addEventListener("input",function(){
    colorIndex++;
    setGradient(true);
});

random.addEventListener("click",function(){
    colorIndex++;
    ApplyRandomColor();
});

back.addEventListener("click",function(){
    if(colorIndex>0){
        colorIndex--;
        color1.value=historial[colorIndex][0];
        color2.value=historial[colorIndex][1];
        setGradient();
        //console.log(colorIndex);
    }
})

forward.addEventListener("click",function(){
    if(colorIndex<historial.length-1){
        colorIndex++;
        color1.value=historial[colorIndex][0];
        color2.value=historial[colorIndex][1];
        setGradient();
        //console.log(colorIndex);
    }
})