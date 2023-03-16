let mas1 = Array.from(document.querySelectorAll(".interest__check"));

let ul1 = null;
let onClickCheck = function() {
    let int1 = this.parentElement.parentElement;
    for (let node of int1.childNodes) {
        if(!node.nodeName.includes("text")) {
            if(node.className.includes("interests_active")) {
                ul1 = node;
                break;
            }
        }
    }
    for(i = 0; i < mas1.length; i++) {
        if(mas1[i].closest(".interests_active") == ul1) {
            mas1[i].checked = this.checked;
        }
    }
}


for(let i = 0; i < mas1.length; i++) {
    if(!mas1[i].closest(".interests_active")) {
      mas1[i].onchange  = onClickCheck;
    }
}