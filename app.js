var displayHours =document.getElementById("displayHours")
var displayMinutes=document.getElementById("displayMinutes")
var displaySeconds=document.getElementById("displaySeconds")



var hours=prompt("Please enter hours");
var minutes=prompt("Please enter minutes");
var second=prompt("Please enter seconds");

var startButton=document.getElementById("startButton")
var pauseButton=document.getElementById("pauseButton")
var resetButton=document.getElementById("resetButton")

pauseButton.disabled=true
resetButton.disabled=true

var interval=0;

function startTime(){
    pauseButton.disabled=false
    resetButton.disabled=false
    startButton.disabled=true
    interval=setInterval(function(){
        second--
        // console.log(second)
        if(second==0){
            minutes--
            second=60
        }
        else if(minutes==0){
            hours--
            minutes=60
        } 
        else if(hours==0){
            hours=60
            second--
        }
        else if(minutes==0
            ){alert("0")}
            else if(hours==0
                ){alert("0")}
                else if(second==0
                    ){alert("0")}
        displaySeconds.innerHTML=second
        displayMinutes.innerHTML=minutes
        displayHours.innerHTML=hours
    },1000)
}    

function pause(){
    clearInterval(interval)
    startButton.disabled=false
}
function reset(){
    clearInterval(interval)
    second=prompt();
    minutes=prompt();
    hours=prompt();
    displaySeconds.innerHTML=second
    displayMinutes.innerHTML=minutes
    displayHours.innerHTML=hours
    pauseButton.disabled=true
   
}