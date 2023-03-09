
let menu1 = document.querySelectorAll(".dropdown__value");
let mas1 = [];
mas1 = Array.from(menu1);

menu1 = document.querySelectorAll(".dropdown__link");
let mas2 = [];
mas2 = Array.from(menu1);

let onClickFunc = function() {
    let elem1 = this.nextElementSibling ;
    if(elem1 != null) {
        if(elem1.className.includes("dropdown__list")) {
              if(!elem1.className.includes("dropdown__list_active")) {
                  elem1.className = elem1.className + " dropdown__list_active";
              }
              else {
                  elem1.className = "dropdown__list";
              }
        }
    }
//    let atr1 = this.getAttribute("href");
//    if (atr1 == "") {
//        return false;
//    }
    return false;
}

let onClickFunc1 = function() {
//    console.log(this.textContent);
    let list = this.closest(".dropdown__list");
    if(list != null) {
        list.className = "dropdown__list";
    }
    val = list.previousElementSibling;
    if(val != null) {
        val.textContent = this.textContent;
    }
//    let atr1 = this.getAttribute("href");
//    if (atr1 == "") {
//        return false;
//    }
    return false;
}

for (let i = 0; i < mas1.length; i++) {
    let elem = mas1[i];
//    elem.onclick = onClickFunc;
    elem.addEventListener("click", onClickFunc, true);
//    preventDefault();
}

for (i = 0; i < mas2.length; i++) {
    let elem = mas2[i];
    elem.onclick = onClickFunc1;
//    elem.addEventListener("click", onClickFunc1, true);
}
