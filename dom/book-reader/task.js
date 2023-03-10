
let menu1 = document.querySelectorAll(".font-size");
let mas1 = [];
mas1 = Array.from(menu1);

let elemBook = document.getElementById("book");
let elemOrig = elemBook.className;


let onClickFunc = function() {
    let res = mas1.findIndex(function(item) {
        return item.className.includes("font-size_active");
    });
    if(res >= 0) {
        let elem1 = mas1[res];
        elem1.className = elem1.className.replace(" font-size_active", "");
    }
    this.className += " font-size_active";
    res = mas1.indexOf(this);

    if(res == 0) {
        elemBook.className = elemOrig + " book_fs-small";
    }
    else if(res == 1) {
        elemBook.className = elemOrig;
    }
    else if(res == 2) {
        elemBook.className = elemOrig + " book_fs-big";
    }

    return false;
}

for (let i = 0; i < mas1.length; i++) {
    let elem = mas1[i];
    elem.onclick = onClickFunc;
}


