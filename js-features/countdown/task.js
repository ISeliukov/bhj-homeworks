let timecount = 60;

let elementMain = document.getElementById("timer");

let TimeFunc = function() {
    if(timecount > 0) {
        timecount--;
        elementMain.textContent = timecount.toString();
    }
    else {
        window.clearInterval(intid);
        window.alert("Вы победили в конкурсе");
    }
}

let intid = window.setInterval(TimeFunc, 1000);
