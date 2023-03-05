let menu1 = document.querySelectorAll(".menu__link");
let mas1 = [];
mas1 = Array.from(menu1);


let OnClickFunc = function() {
    let elem1 = this.nextElementSibling ;
    if(elem1 != null) {
        if(elem1.className.includes("menu_sub")) {
          elem1.className = elem1.className + " menu_active";
        }
    }
    let atr1 = this.getAttribute("href");
    if (atr1 == "") {
        return false;
    }
}

for (let i = 0; i < mas1.length; i++) {
    let elem = mas1[i];
    elem.onclick = OnClickFunc;
}

