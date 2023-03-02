let clickcount = 0;

let elementMain = document.getElementById("clicker__counter");
let elementPict = document.getElementById("cookie");

let ClickFunc = function() {
    clickcount++;
    elementMain.textContent = clickcount.toString();
    elementPict.width = ((clickcount % 2) == 0) ? "200" : "180";
}

window.onclick = ClickFunc;


