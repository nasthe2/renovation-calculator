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

  let type = typeCheck() === "novostroika" ? 0 : 1;

  let S = Number(document.querySelector(".calc_area").value);
  let rooms = Number(document.querySelector(".calc_rooms").value);

  let crash = crashCheck() ? 1 : 0;
  let wall = wallCheck() ? 1 : 0;
  let electric = electricCheck() ? 1 : 0;
  let santech = santechCheck() ? 1 : 0;

  console.log("Тип жилья: ", type === 0 ? "Новостройка" : "Вторичка");
  console.log("Площадь: ", S);
  console.log("Количество комнат: ", rooms);
  console.log("Необходимость демонтажа: ", crash);
  console.log("Выравнивание стен: ", wall);
  console.log("Электромонтажные работы: ", electric);
  console.log("Сантехнические работы: ", santech);

  price = Math.round(-48430.678584 + S * 5922.553251 + type * 27954.081042 + rooms * (7137.458947) + crash * (-27954.081042) + wall * 22495.783679 + electric * 13591.964593 + santech * 1603.015233);

  if (String(price).length === 6) {
    document.querySelector(".price").innerHTML = String(price).substring(0, 3) + " " + String(price).substring(3) + " руб.";
  } else if (String(price).length === 5) {
    document.querySelector(".price").innerHTML = String(price).substring(0, 2) + " " + String(price).substring(2) + " руб.";
  }
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

function decreaseArea() {
  if (document.querySelector(".calc_area").value >= 16) {
    document.querySelector(".calc_area").value--;
    calculator();
  }
}

function increaseArea() {
  if (document.querySelector(".calc_area").value <= 199) {
    document.querySelector(".calc_area").value++;
    calculator();
  }
}

function decreaseRooms() {
  if (document.querySelector(".calc_rooms").value >= 2) {
    document.querySelector(".calc_rooms").value--;
    calculator();
  }
}

function increaseRooms() {
  if (document.querySelector(".calc_rooms").value <= 6) {
    document.querySelector(".calc_rooms").value++;
    calculator();
  }
}

document.querySelector(".calc_area_minus").addEventListener("click", decreaseArea);

document.querySelector(".calc_area_plus").addEventListener("click", increaseArea);

document.querySelector(".calc_rooms_minus").addEventListener("click", decreaseRooms);

document.querySelector(".calc_rooms_plus").addEventListener("click", increaseRooms);

form.addEventListener("change", calculator);





 










