const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function calculator() {  
  let price;

  let S = Number(document.getElementById("area").value);
  let type = Number(document.getElementById("type").value);
  let rooms = Number(document.getElementById("rooms").value);
  let crash = Number(document.getElementById("crash").value);
  let wall = Number(document.getElementById("wall").value);
  let electric = Number(document.getElementById("electric").value);
  let santech = Number(document.getElementById("santech").value);

  price = Math.round(-48430.678584 + S * 5922.553251 + type * 27954.081042 + rooms * (7137.458947) + crash * (-27954.081042) + wall * 22495.783679 + electric * 13591.964593 + santech * 1603.015233);

  document.querySelector(".price").innerHTML = price + " руб.";
};














