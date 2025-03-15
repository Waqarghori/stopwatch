let jsHour = 0;
let jsMin = 0;
let jsSec = 0;


let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let interval ;
document.getElementById("stop-btn").disabled = true

function start() {
   interval = setInterval(function () {
        {
            jsSec++
            sec.innerHTML = `Seconds: ${jsSec}`;
            if (jsSec >= 59) {
                jsMin++
                min.innerHTML = `Minutes: ${jsMin}`
                jsSec = 0;
            }else if(jsMin >= 9){
                jsHour++
                hour.innerHTML = `Hours: ${jsHour}`;
                jsMin = 0
            }
        }
        document.getElementById("start-btn").disabled = true
        document.getElementById("stop-btn").disabled = false

    }, 10)
}
function stop(){
    clearInterval(interval)
    document.getElementById("start-btn").disabled = false
    document.getElementById("stop-btn").disabled = true
}

function reset(){
    clearInterval(interval)
    jsSec = 0;
    jsMin= 0;
    jsHour= 0;
    sec.innerHTML = jsSec;
    min.innerHTML = jsMin;
    hour.innerHTML = jsHour;
    document.getElementById("stop-btn").disabled = true
    document.getElementById("start-btn").disabled = false

}
