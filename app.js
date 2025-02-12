let start = document.getElementById("start");
let stopBtn = document.getElementById("stopBtn");
let mSec = document.getElementById("mSec");
let sec = document.getElementById("sec");
let min = document.getElementById("min");
let hrs = document.getElementById("hrs");
let reset = document.getElementById("reset");

let interval;
let mSecCounter = 00;
let secCounter = 00;
let minCounter = 00;
let hrsCounter = 00;

start.addEventListener("click", function(){
    interval =  setInterval(function (){
        mSecCounter++;
        mSec.innerHTML = mSecCounter
        if(mSecCounter > 100){
        secCounter++
        sec.innerHTML = secCounter
        mSecCounter = 0;
        }
        if (secCounter >= 60){
            minCounter++;
            min.innerHTML = minCounter;
            secCounter = 00;
        }
        if (minCounter >= 60){
            hrsCounter++;
            hrs.innerHTML = hrsCounter;
            minCounter = 00;
        }
    },1000);

    start.disabled = true
    stopBtn.disabled = false
    reset.disabled = false
});

stopBtn.addEventListener("click",function(){
    clearInterval(interval)

    start.disabled = false
    stopBtn.disabled = true
    reset.disabled = false
})
reset.addEventListener("click",function(){
    clearInterval(interval)
    mSecCounter = 0;
    mSec.innerHTML = mSecCounter;

    secCounter = 0;
    sec.innerHTML = secCounter;

    minCounter = 0;
    min.innerHTML = minCounter;

    hrsCounter = 0;
    hrs.innerHTML = hrsCounter;

    start.disabled = false
    stopBtn.disabled = false
    reset.disabled = true

})


