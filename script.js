let intervalId;
var flag=false;
let dange= document.getElementById("points");


function startTimer(durationInSecond) {
    let timerElement = document.getElementById('timer');

    if(!timerElement){
        console.error("timer element isnot found!");
        return;
    }
    let duration = durationInSecond;
    let seconds;


    function f(){
        seconds = parseInt(duration % 60 ,10);

            seconds = seconds<10 ? '0' + seconds : seconds;

            timerElement.textContent=seconds;

            if(--duration < 0) {
                clearInterval(intervalId);
                timerElement.textContent = "Game Over!";
            }
    }

    
    const f1= setInterval(f,1000);
    return intervalId;
}



function changeColorForSenior(targetDiv){
    var targetDivId = document.getElementById(targetDiv);
    if(targetDivId.style.backgroundColor!="blue"){

        targetDivId.style.backgroundColor= "red";
        setTimeout(function() {
            targetDivId.style.backgroundColor="#00A878";
        },2000);
    }
}

function myChangeColor(targetDiv){
    if(targetDiv.style.backgroundColor!="red"){
        targetDiv.style.backgroundColor="blue";
    }
}

function handleDivClick(event){
    var clickedDiv = event.target;
    if(clickedDiv.style.backgroundColor=="red"){
        setTimeout(changeColorForSenior,1);
        setTimeout(checkClick,1);
        setTimeout(startTimer,1);
        setTimeout(forSenior,1);
        dange.textContent="Game Over!";
        flag=true;

        return;
    }
    myChangeColor(clickedDiv);

    event.stopPropagation();
}


function checkClick(){
    console.log("clicked");
}

function getRandomInteger(){
    return Math.floor(Math.random() * 12)+1;
}

function forSenior(){
    var randomInteger=getRandomInteger();
    var st = randomInteger.toString();
    changeColorForSenior(randomInteger);
}

var div1=document.getElementById("1");
var div2=document.getElementById("2");
var div3=document.getElementById("3");
var div4=document.getElementById("4");
var div5=document.getElementById("5");
var div6=document.getElementById("6");
var div7=document.getElementById("7");
var div8=document.getElementById("8");
var div9=document.getElementById("9");
var div10=document.getElementById("10");

if(flag){setTimeout(handleDivClick,1);}
else{

    div1.addEventListener("click",handleDivClick);
    div2.addEventListener("click",handleDivClick);
    div3.addEventListener("click",handleDivClick);
    div4.addEventListener("click",handleDivClick);
    div5.addEventListener("click",handleDivClick);
    div6.addEventListener("click",handleDivClick);
    div7.addEventListener("click",handleDivClick);
    div8.addEventListener("click",handleDivClick);
    div9.addEventListener("click",handleDivClick);
    div10.addEventListener("click",handleDivClick);
}

const inter= setInterval(checkClick,1000);



intervalId = startTimer(10);

const inter1 = setInterval(forSenior,2000);