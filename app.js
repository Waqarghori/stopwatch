let jsHour = 0;
let jsMin = 0;
let jsSec = 0;


let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


function start() {
    setInterval(function () {
        {
            jsSec++
            sec.innerHTML = jsSec
            if (jsSec >= 59) {
                jsMin++
                min.innerHTML = jsMin
                jsSec = 0;
            }else if(jsMin >= 9){
                jsHour++
                hour.innerHTML = jsHour;
                jsMin = 0
            }
        }
    }, 10)
}
