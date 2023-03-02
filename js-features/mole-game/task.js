let deadcount = 0;
let lostcount = 0;
let elemdead = document.getElementById("dead");
let elemlost = document.getElementById("lost");

function GameOver(flag) {
    deadcount = 0;
    lostcount = 0;
    elemdead.textContent = deadcount.toString();
    elemlost.textContent = lostcount.toString();
    if(flag == 0) {
        window.alert("Победа!!!");
    }
    else {
        window.alert("Проиграли :(");
    }
}

function getHole( ind ) {
    return document.getElementById("hole" + ind.toString());
}

let OnClickFunc = function() {
    if(this.className.includes( 'hole_has-mole' )) {
        deadcount++;
        elemdead.textContent = deadcount.toString();
        if(deadcount >= 10) {
            GameOver(0);
        }
    }
    else {
        lostcount++;
        elemlost.textContent = lostcount.toString();
        if(lostcount >= 5) {
            GameOver(1);
        }
    }
}

for (let i = 1; i < 10; i++) {
    let elem = getHole(i);
    elem.onclick = OnClickFunc;
}
