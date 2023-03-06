let elem1 = document.getElementsByClassName("modal__close_times");
mas1 = [];
mas1 = Array.from(elem1);

let funcClick = function() {
    let elem = this.closest(".modal");
    elem.className = "modal modal__close";
}

for(let i = 0; i < mas1.length; i++) {
    mas1[i].onclick = funcClick;
}

elem1 = document.getElementsByClassName("show-success");
mas1 = Array.from(elem1);
let elem_good = mas1[0];

let funcClickSucc = function() {
    let elem = this.closest(".modal");
    elem.className = "modal modal__close";
    elem_Succ.className = "modal modal_active";
}

elem_good.onclick = funcClickSucc;

let elem_main = document.getElementById("modal_main");
elem_main.className += " modal_active";
let elem_Succ = document.getElementById("modal_success");
