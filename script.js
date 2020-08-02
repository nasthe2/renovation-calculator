const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const typeCheckboxes = document.querySelectorAll(".calc_check_type");

const crashCheckbox = document.querySelector(".calc_check_crash");
const wallCheckbox = document.querySelector(".calc_check_wall");
const electricCheckbox = document.querySelector(".calc_check_electric");
const santechCheckbox = document.querySelector(".calc_check_santech");

function calculator() {  
  let price;

  let S = 24;
  let type = 0;
  let rooms = 1;
  let crash = 1;
  let wall = 1;
  let electric = 1; 
  let santech = 1;

  type = typeCheck() === "novostroika" ? 0 : 1;

  S = Number(document.getElementById("area").value);
  rooms = Number(document.getElementById("rooms").value);

  crash = crashCheck() ? 1 : 0;
  wall = wallCheck() ? 1 : 0;
  electric = electricCheck() ? 1 : 0;
  santech = santechCheck() ? 1 : 0;

  console.log("Тип жилья: ", type === 0 ? "Новостройка" : "Вторичка");
  console.log("Площадь: ", S);
  console.log("Количество комнат: ", rooms);
  console.log("Необходимость демонтажа: ", crash);
  console.log("Выравнивание стен: ", wall);
  console.log("Электромонтажные работы: ", electric);
  console.log("Сантехнические работы: ", santech);

  price = Math.round(-48430.678584 + S * 5922.553251 + type * 27954.081042 + rooms * (7137.458947) + crash * (-27954.081042) + wall * 22495.783679 + electric * 13591.964593 + santech * 1603.015233);

  document.querySelector(".price").innerHTML = price + " руб.";
};

function typeCheck() {
  for (let i = 0; i < typeCheckboxes.length; i++) {
    if (typeCheckboxes[i].type === "radio" && typeCheckboxes[i].checked) {
      return typeCheckboxes[i].value;
    }
  }
}

function crashCheck() {
  if (crashCheckbox.type === "checkbox" && crashCheckbox.checked) {
    return crashCheckbox.checked;
  }
}

function wallCheck() {
  if (wallCheckbox.type === "checkbox" && wallCheckbox.checked) {
    return wallCheckbox.checked;
  }
}

function electricCheck() {
  if (electricCheckbox.type === "checkbox" && electricCheckbox.checked) {
    return electricCheckbox.checked;
  }
}

function santechCheck() {
  if (santechCheckbox.type === "checkbox" && santechCheckbox.checked) {
    return santechCheckbox.checked;
  }
}

form.addEventListener("change", calculator);





 










