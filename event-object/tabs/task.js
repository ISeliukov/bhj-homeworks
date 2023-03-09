let menu1 = document.querySelectorAll(".tab");
let mas1 = [];
mas1 = Array.from(menu1);

menu1 = document.querySelectorAll(".tab__content");
let mas2 = [];
mas2 = Array.from(menu1);

let onClickFunc = function() {

    let res = mas1.findIndex(function(item) {
        return item.className.includes("tab_active");
    });

    if(res >= 0) {
        mas1[res].className = "tab";
        mas2[res].className = "tab__content";
        res = mas1.indexOf(this);
        mas1[res].className = "tab tab_active";
        mas2[res].className = "tab__content tab__content_active";
    }

    return false;
}

for (let i = 0; i < mas1.length; i++) {
    let elem = mas1[i];
    elem.addEventListener("click", onClickFunc, true);
}

