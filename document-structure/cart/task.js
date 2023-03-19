let cart = document.querySelector(".cart__products");

let masinc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
let masdec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
let masadd = Array.from(document.querySelectorAll(".product__add"));

let GetQuantElem = function(elem) {
    let val = 0;
    for(let node of elem.childNodes) {
        if(!node.nodeName.includes("text")) {
            if(node.className.includes("product__quantity-value")) {
                val = node;
                break;
            }
        }
    }
    return val;
}

let GetQuant = function(elem) {
    let contr = elem.closest(".product__quantity-controls");
    return GetQuantElem(contr);
}

let onClickQuantInc = function(elem, e) {
    val = GetQuant(elem);
    val.textContent = (Number(val.textContent) + 1).toString();
}

let onClickQuantDec = function(elem, e) {
    val = GetQuant(elem);
    if(Number(val.textContent > 0)) {
      val.textContent = (Number(val.textContent) - 1).toString();
    }
}

let onClickAdd = function(elem, e) {
    let val = GetQuantElem(elem.previousElementSibling);
    let prod = elem.closest(".product");
    prod1 = null;
    for(node of cart.childNodes) {
        if(!node.nodeName.includes("text") && !node.nodeName.includes("comment")) {
            if(node.getAttribute("data-id") == prod.getAttribute("data-id")) {
                prod1 = node;
                break;
            }
        }
    }
    if(prod1 == null) {
        let elem1 = '<div class="cart__product" data-id="' + prod.getAttribute("data-id") + '">';
        let src = prod.childNodes[3];
        elem1 +='<img class="cart__product-image" src="' + src.getAttribute("src") +'">';
        elem1 +='<div class="cart__product-count">';
        elem1 += val.textContent;
        elem1 +='</div>';
        cart.insertAdjacentHTML("beforeEnd", elem1);
    }
    else {
      for(node of prod1.childNodes) {
          if(!node.nodeName.includes("text") && !node.nodeName.includes("comment")) {
              if(node.className.includes("cart__product-count")) {
                node.textContent = val.textContent;
                break;
              }
          }
      }
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
