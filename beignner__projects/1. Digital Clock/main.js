function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var day = week[date.getDay()];
    var session = "AM";


    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    document.getElementById("day").textContent = day;
    setTimeout( showTime,1000);    
}

showTime()