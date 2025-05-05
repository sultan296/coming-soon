let newDate = new Date(2025,11,30, 12,30,40).getTime();
function FutureDate(){
    let presentDate = new Date().getTime();
    let calDate = newDate - presentDate;

    let sec = 1000;
    let min = sec * 60;
    let hour = min * 60;
    let day = hour * 24;

    let d = Math.floor(calDate / (day));
    let h = Math.floor(calDate % (day) / (hour));
    let m = Math.floor(calDate % (hour) / (min));
    let s = Math.floor(calDate % (min) / (sec));

    document.getElementById("day").innerText = d
    document.getElementById("hour").innerText = h
    document.getElementById("min").innerText = m
    document.getElementById("sec").innerText = s
    
}
setInterval(()=>{
    FutureDate();
},1000)