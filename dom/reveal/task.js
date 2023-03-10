
let menu1 = document.querySelectorAll(".reveal");
let mas1 = [];
mas1 = Array.from(menu1);

let onScrollFunc = function() {
    for(i = 0; i < mas1.length; i++) {
      let {top, bottom} = mas1[i].getBoundingClientRect();
      if((top > (window.innerHeight / 4 )) &&
         (bottom < (window.innerHeight * 3 / 4))) {
       mas1[i].className = "reveal reveal_active";
      }
      else {
        mas1[i].className = "reveal";
      }
    }
    return false;
}


document.addEventListener("scroll", onScrollFunc, true);
