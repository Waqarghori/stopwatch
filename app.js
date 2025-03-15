let jsHour = 0;
let jsMin = 0;
let jsSec = 0;


let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let interval ;
document.getElementById("stop-btn").style.visibility = "hidden"

function start() {
   interval = setInterval(function () {
        {
            jsSec++
            sec.innerHTML = `${jsSec}`;
            if (jsSec >= 59) {
                jsMin++
                min.innerHTML = `${jsMin}`
                jsSec = 0;
            }else if(jsMin >= 9){
                jsHour++
                hour.innerHTML = `${jsHour}`;
                jsMin = 0
            }
        }
        document.getElementById("start-btn").style.visibility = "hidden";
        document.getElementById("stop-btn").style.visibility = "visible"

    }, 10)
}
function stop(){
    clearInterval(interval)
    document.getElementById("start-btn").style.visibility = "visible"
    document.getElementById("stop-btn").style.visibility = "hidden"
}

function reset(){
    clearInterval(interval)
    jsSec = 0;
    jsMin= 0;
    jsHour= 0;
    sec.innerHTML = jsSec;
    min.innerHTML = jsMin;
    hour.innerHTML = jsHour;
    document.getElementById("start-btn").style.visibility = "visible"
    document.getElementById("stop-btn").style.visibility = "hidden"
}
