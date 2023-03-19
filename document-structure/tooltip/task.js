let mas1 = Array.from(document.querySelectorAll(".has-tooltip"));

let onClick = function(elem, e) {
    next1 = elem.nextElementSibling;
    let flg = 0;
//    console.log(elem, next1);
    if(next1 != null) {
      if(next1.className.includes("tooltip_active")) {
          next1.remove();
          flg = 1;
      }
    }
    if(flg != 1) {
        let coords = elem.getBoundingClientRect();
        left1 = Math.round(coords.left);
    //    console.log(left1, coords.top);
        let elem1 = '<div class="tooltip tooltip_active" style="left: '+left1+'; top: '+
                    coords.top+'">'+elem.title+'</div>';
        elem.insertAdjacentHTML("afterEnd", elem1);
    }
    
    e.preventDefault();
}

for(let i = 0; i < mas1.length; i++) {
    mas1[i].addEventListener('click', (e) => {
        onClick(mas1[i], e);
    });
}


