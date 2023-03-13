let menu1 = document.querySelectorAll(".chat-widget");
let mas1 = [];
mas1 = Array.from(menu1);

let onClickChat = function() {
    mas1[0].className += " chat-widget_active";
}

mmesag = ["Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
          "Кто тут?",  "Нихт ферштейн", "Да ну нафиг!",];

let onTypeChat = function(elem, e) {
    if((e.keyCode == 13) && (elem.value != "")) {
      let now = new Date();
      date1 = now.getHours() + ":" + now.getMinutes();
      messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${date1}</div>
          <div class="message__text">
            ${elem.value}
          </div>
        </div>
      `;
      indx = Math.floor(Math.random() * 4);
      messages.innerHTML += `
        <div class="message">
          <div class="message__time">${date1}</div>
          <div class="message__text">
            ${mmesag[indx]}
          </div>
        </div>
      `;
      elem.value = "";
    }
}

menu1 = document.querySelectorAll(".chat-widget__side");
let mas2 = [];
mas2 = Array.from(menu1);
mas2[0].addEventListener('click', onClickChat);

let inp = document.getElementById("chat-widget__input");
inp.addEventListener('keyup', (e) => {
    onTypeChat(inp, e);
});

const messages = document.querySelector( '.chat-widget__messages' );

