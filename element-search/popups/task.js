let elem = document.getElementById("modal_main");
let orig = elem.className;

let elem1 = document.getElementsByClassName("modal__close");
mas1 = [];
mas1 = Array.from(elem1);

let elem3 = mas1[0];
let elem4 = mas1[2];

elem1 = document.getElementsByClassName("show-success");
mas1 = Array.from(elem1);
let elem5 = mas1[0];

let elem2 = document.getElementById("modal_success");
let orig2 = elem2.className;

let FuncClick = function() {
    elem.className = orig + " modal__close";
}
let FuncClick1 = function() {
    elem2.className = orig2 + " modal_active";
}
let FuncClick2 = function() {
    FuncClick();
    elem2.className = orig2 + " modal__close";
}

elem.className = orig + " modal_active";

elem3.onclick = FuncClick;
elem4.onclick = FuncClick2;
elem5.onclick = FuncClick1;
