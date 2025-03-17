let jsHour = 0;
let jsMin = 0;
let jsSec = 0;
let jsMsec = 0;


let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let mSec = document.getElementById("msec");

let interval;

function start() {
    interval = setInterval(function () {
        {
            jsMsec++
            mSec.innerHTML = jsMsec;

            if (jsMsec == 100) {
                jsSec++
                sec.innerHTML = jsSec;
                jsMsec = 0;
            }
            if (jsSec >= 59) {
                jsMin++
                min.innerHTML = jsMin;
                jsSec = 0;
            } else if (jsMin >= 9) {
                jsHour++
                hour.innerHTML = jsHour;
                jsMin = 0
            }
        }
        let startBtn = document.getElementById("start-btn");
        if (startBtn) {
            startBtn.innerHTML = "Pause";
            startBtn.setAttribute("onclick", "stop()");
            startBtn.id = "stop-btn";
        }
        //document.getElementById("start-btn").outerHTML = `<button id="stop-btn" onclick="stop()">Pause</button>`

    }, 10)
}

function stop() {
    clearInterval(interval)
    document.getElementById("stop-btn").outerHTML = `<button id="start-btn" onclick="start()">Start</button>`

}

function reset() {
    clearInterval(interval)
    jsMsec = "00";
    jsSec = "00";
    jsMin = "00";
    jsHour = "00";
    mSec.innerHTML = jsMsec
    sec.innerHTML = jsSec;
    min.innerHTML = jsMin;
    hour.innerHTML = jsHour;
     document.getElementById("stop-btn").outerHTML = `<button id="start-btn" onclick="start()">Start</button>`
}

