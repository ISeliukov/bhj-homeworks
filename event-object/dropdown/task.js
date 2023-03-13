
mas1 = Array.from(document.querySelectorAll(".dropdown__value"));
mas2 = Array.from(document.querySelectorAll(".dropdown__link"));

let onClickFunc = function() {
    let elem1 = this.nextElementSibling ;
    elem1.classList.toggle('dropdown__list_active');

    return false;
}

let onRefClickFunc = function() {
    let list = this.closest(".dropdown__list");
    if(list != null) {
        list.className = "dropdown__list";
    }
    mas1[0].textContent = this.textContent;

    return false;
}

for (let i = 0; i < mas1.length; i++) {
    let elem = mas1[i];
    elem.addEventListener("click", onClickFunc);
}

for (i = 0; i < mas2.length; i++) {
    let elem = mas2[i];
    elem.onclick = onRefClickFunc;
//    elem.addEventListener("click", onRefClickFunc);
}
