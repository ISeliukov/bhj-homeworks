let mas1 = Array.from(document.querySelectorAll(".has-tooltip"));

let onClick = function(elem, e) {
    next1 = elem.nextElementSibling;
    if((next1 != null) && (next1.className.includes("tooltip_active"))) {
          next1.remove();
    }
    else {
        let coords = elem.getBoundingClientRect();
        left1 = Math.round(coords.left);
        let elem1 = '<div class="tooltip tooltip_active" style="left: '+left1+'px; top: '+
                    (20 + coords.top)+'px">'+elem.title+'</div>';
        elem.insertAdjacentHTML("afterEnd", elem1);
    }
    e.preventDefault();
}

for(let i = 0; i < mas1.length; i++) {
    mas1[i].addEventListener('click', (e) => {
        onClick(mas1[i], e);
    });
}


