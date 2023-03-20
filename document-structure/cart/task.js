let cart = document.querySelector(".cart__products");

let masinc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
let masdec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
let masadd = Array.from(document.querySelectorAll(".product__add"));

let getQuantElem = function(elem) {
    let quantElem = Array.from(elem.childNodes).find((item) => {
        return !item.nodeName.includes("text") && !item.nodeName.includes("comment") &&
               item.className.includes("product__quantity-value");
    });
    return quantElem;
}

let getQuant = function(elem) {
    let contr = elem.closest(".product__quantity-controls");
    return getQuantElem(contr);
}

let onClickQuantInc = function(elem, e) {
    val = getQuant(elem);
    val.textContent = (Number(val.textContent) + 1).toString();
}

let onClickQuantDec = function(elem, e) {
    val = getQuant(elem);
    if(Number(val.textContent > 1)) {
      val.textContent = (Number(val.textContent) - 1).toString();
    }
}

let onClickAdd = function(elem, e) {
    let val = getQuantElem(elem.previousElementSibling);
    let prod = elem.closest(".product");
    let productInCard = Array.from(cart.childNodes).find((item) => {
        return !item.nodeName.includes("text") && !item.nodeName.includes("comment") &&
                item.getAttribute("data-id") == prod.getAttribute("data-id");
    });
    if(productInCard == null) {
        let src = prod.childNodes[3];
        let elem1 = '<div class="cart__product" data-id="' + prod.getAttribute("data-id") + '">' +
                    '<img class="cart__product-image" src="' + src.getAttribute("src") +'">' +
                    '<div class="cart__product-count">' + val.textContent + '</div>';
        cart.insertAdjacentHTML("beforeEnd", elem1);
    }
    else {
        let count = productInCard.childNodes[1];
        count.textContent = (Number(count.textContent) + Number(val.textContent)).toString();
    }
}

for(let i = 0; i < masinc.length; i++) {
    masinc[i].addEventListener('click', (e) => {
        onClickQuantInc(masinc[i], e);
    });
}

for(let i = 0; i < masdec.length; i++) {
    masdec[i].addEventListener('click', (e) => {
        onClickQuantDec(masdec[i], e);
    });
}

for(let i = 0; i < masadd.length; i++) {
    masadd[i].addEventListener('click', (e) => {
        onClickAdd(masadd[i], e);
    });
}
