let mas1 = [];

let navi = document.getElementsByClassName("slider__arrow_prev");
mas1 = Array.from(navi);
let leftbtn = mas1[0];

navi = document.getElementsByClassName("slider__arrow_next");
mas1 = Array.from(navi);
let rightbtn = mas1[0];

let pict = document.getElementsByClassName("slider__item");
mas1 = Array.from(pict);

let curpict = 0;

let OnClickFuncLeft = function() {
    let elem1 = mas1[curpict];
    elem1.className = "slider__item";
    if(curpict > 0) {
        curpict--;
    }
    else {
        curpict = mas1.length - 1;
    }
    elem1 = mas1[curpict];
    elem1.className += " slider__item_active";
}

let OnClickFuncRight = function() {
    let elem1 = mas1[curpict];
    elem1.className = "slider__item";
    if(curpict < mas1.length - 1) {
        curpict++;
    }
    else {
        curpict = 0;
    }
    elem1 = mas1[curpict];
    elem1.className += " slider__item_active";
}

leftbtn.onclick = OnClickFuncLeft;
rightbtn.onclick = OnClickFuncRight;

