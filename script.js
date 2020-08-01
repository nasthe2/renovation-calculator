const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const typeCheckboxes = document.querySelectorAll(".calc_type_radio");

function calculator() {  
  let price;

  let S = 24;
  let type = 0;
  let rooms = 1;
  let crash = 1;
  let wall = 1;
  let electric = 1; 
  let santech = 1;

  S = Number(document.getElementById("area").value);
  type = typeCheck() === "novostroika" ? 0 : 1;
  rooms = Number(document.getElementById("rooms").value);
  crash = Number(document.getElementById("crash").value);
  wall = Number(document.getElementById("wall").value);
  electric = Number(document.getElementById("electric").value);
  santech = Number(document.getElementById("santech").value);

  console.log(type);
  console.log(S);
  console.log(rooms);
  console.log(crash);
  console.log(wall);
  console.log(electric);
  console.log(santech);

  price = Math.round(-48430.678584 + S * 5922.553251 + type * 27954.081042 + rooms * (7137.458947) + crash * (-27954.081042) + wall * 22495.783679 + electric * 13591.964593 + santech * 1603.015233);

  document.querySelector(".price").innerHTML = price + " руб.";
};

function typeCheck() {
  for (let i = 0; i < typeCheckboxes.length; i++) {
    if (typeCheckboxes[i].type === "radio" && typeCheckboxes[i].checked) {
      console.log(typeCheckboxes[i].value);
      return typeCheckboxes[i].value;
    }
  }
}

form.addEventListener("change", calculator);





 










