let inp = document.getElementById("task__input");
let form = document.getElementById("tasks__form");
form.onsubmit = (e) => {e.preventDefault()};

let list = document.getElementById("tasks__list");

let onClick = function() {
    this.remove();
}

let onTypeChat = function(elem, e) {

    if((e.keyCode == 13) && (inp.value.trim() != "")) {
        let elem1 = '<div class="task">';
        elem1 +='<div class="task__title">';
        elem1 += inp.value.trim();
        elem1 +='</div> <a href="#" class="task__remove">&times;</a> </div> ';
        list.insertAdjacentHTML("afterEnd", elem1);
        list.nextElementSibling.onclick = onClick;
    }

    e.preventDefault();
}

form.addEventListener('keyup', (e) => {
    onTypeChat(form, e);
});

