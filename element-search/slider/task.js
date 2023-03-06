let mas1 = [];

let navi = document.getElementsByClassName("slider__arrow_prev");
mas1 = Array.from(navi);
let leftbtn = mas1[0];

navi = document.getElementsByClassName("slider__arrow_next");
mas1 = Array.from(navi);
let rightbtn = mas1[0];

let pict = document.getElementsByClassName("slider__item");
mas1 = Array.from(pict);

let OnClickFuncLeft = function() {
    let res = mas1.findIndex(function(item) {
        return item.className.includes("slider__item_active");
    });
    if(res >= 0) {
      let elem1 = mas1[res];
      elem1.className = "slider__item";
      if(res > 0) {
        res--;
      }
      else {
        res = mas1.length - 1;
      }
      elem1 = mas1[res];
      elem1.className += " slider__item_active";
    }
}

let OnClickFuncRight = function() {
    let res = mas1.findIndex(function(item) {
        return item.className.includes("slider__item_active");
    });
    if(res >= 0) {
      let elem1 = mas1[res];
      elem1.className = "slider__item";
      if(res < mas1.length - 1) {
        res++;
      }
      else {
        res = 0;
      }
      elem1 = mas1[res];
      elem1.className += " slider__item_active";
    }
}

leftbtn.onclick = OnClickFuncLeft;
rightbtn.onclick = OnClickFuncRight;

