let inp = document.getElementById("task__input");
let form = document.getElementById("tasks__form");
form.onsubmit = (e) => {e.preventDefault()};

let list = document.getElementById("tasks__list");

let onClick = function() {
    let elem = this.closest(".task");
    elem.remove();
}

let onTypeChat = function(elem, e) {
    if(inp.value.trim() != "") {
        let elem1 = '<div class="task">'+
                    '<div class="task__title">'+ inp.value.trim() +
                    '</div> <a href="#" class="task__remove">&times;</a> </div> ';
        list.insertAdjacentHTML("afterEnd", elem1);
        let elem = list.nextElementSibling.childNodes[2];
        elem.onclick = onClick;
        inp.value = "";
    }
    e.preventDefault();
}

form.addEventListener('click', (e) => {
    onTypeChat(form, e);
});

