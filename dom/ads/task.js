let menu1 = document.querySelectorAll(".card");
let mas2 = [];
mas2 = Array.from(menu1);

menu1 = document.querySelectorAll(".rotator__case");
let mas1 = [];
mas1 = Array.from(menu1);

mas3 = [];
mas4 = [];
for(let i = 0; i < mas2.length; i++) {
  mas3[i] = 0;
  for(let j = 0; j < mas1.length; j++) {
    if(mas1[j].closest(".card") == mas2[i]) {
      mas4[i, mas3[i]] = mas1[j];
      mas3[i]++;
    }
  }
}

let fbFunc = function() {
    for(let i = 0; i < mas2.length; i++) {
      let res = mas1.findIndex(function(item) {
          return item.className.includes("rotator__case_active") &&
          (item.closest(".card") == mas2[i]);
          
      });
      if(res >= 0) {
        let elem1 = mas1[res];
        elem1.className = "rotator__case";
        if(res < mas3[i] - 1) {
          res++;
        }
        else {
          res = 0;
        }
        elem1 = mas4[i, res];
        elem1.className += " rotator__case_active";
      }
    }

    return false;
}

window.setInterval(fbFunc, 1000);

