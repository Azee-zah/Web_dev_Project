let isLoggedIn = false;

function validateSignIn() {
  const userName = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("message");

  if (userName === "" || password === "") {
    errorMessage.textContent = "Invalid username or password";
    errorMessage.style.color = "red";
    return false;
  } else if (userName === "admin" && password === "1234") {
    isLoggedIn = true;
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "staff.html";
  } else {
    isLoggedIn = true;
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html#menu_container";
  }
}

//cakes
let addCake = document.getElementById("add_cake");
let removeCake = document.getElementById("remove_cake");

if (addCake) {
  addCake.addEventListener("click", function () {
    let price = document.getElementById("cake_price").value.trim();
    if (price === "" || Number(price) <= 0) {
      document.getElementById("price_alert").textContent =
        "Please set a valid price before adding the item.";
      return;
    }

    let cakeCard =
      '<div class="menu_card">' +
      '<img src="./Images/cakes.jpg" alt="Cake" />' +
      '<div class="item_content">' +
      '<p class="name">Cake</p>' +
      '<p class="price"><sup>Price</sup>₦' + price + '</p>' +
      '<select id="select_cake">' +
      '<option value="0" selected>Select Quantity</option>' +
      '<option value="1">1</option>' +
      '<option value="2">2</option>' +
      '<option value="3">3</option>' +
      '<option value="4">4</option>' +
      '<option value="5">5</option>' +
      '<option value="6">6</option>' +
      '<option value="7">7</option>' +
      '<option value="8">8</option>' +
      '<option value="9">9</option>' +
      '<option value="10">10</option>' +
      '<option value="other">other</option>' +
      '</select><br />' +
      '<input type="number" id="hidden_cake" style="visibility:hidden;" placeholder="Enter quantity" />' +
      '</div></div>';

    localStorage.setItem("menu_card_cake", cakeCard);
  });
}

if (removeCake) {
  removeCake.addEventListener("click", function () {
    localStorage.removeItem("menu_card_cake");
    localStorage.removeItem("order_cake");
  });
}

//Food
let addFood = document.getElementById("add_food");
let removeFood = document.getElementById("remove_food");

if (addFood) {
  addFood.addEventListener("click", function () {
    let price = document.getElementById("food_price").value.trim();
    if (price === "" || Number(price) <= 0) {
      document.getElementById("price_alert_food").textContent =
        "Please set a valid price before adding the item.";
      return;
    }

    let foodCard =
      '<div class="menu_card">' +
      '<img src="./Images/jollof rice.jpg" alt="Food" />' +
      '<div class="item_content">' +
      '<p class="name">Food</p>' +
      '<p class="price"><sup>Price</sup>₦' + price + '</p>' +
      '<select id="select_food">' +
      '<option value="0" selected>Select Quantity</option>' +
      '<option value="1">1</option>' +
      '<option value="2">2</option>' +
      '<option value="3">3</option>' +
      '<option value="4">4</option>' +
      '<option value="5">5</option>' +
      '<option value="6">6</option>' +
      '<option value="7">7</option>' +
      '<option value="8">8</option>' +
      '<option value="9">9</option>' +
      '<option value="10">10</option>' +
      '<option value="other">other</option>' +
      '</select><br />' +
      '<input type="number" id="hidden_food" style="visibility:hidden;" placeholder="Enter quantity" />' +
      '</div></div>';

    localStorage.setItem("menu_card_food", foodCard);
  });
}

if (removeFood) {
  removeFood.addEventListener("click", function () {
    localStorage.removeItem("menu_card_food");
    localStorage.removeItem("order_food");
  });
}

//drinks
let addDrink = document.getElementById("add_drinks");
let removeDrink = document.getElementById("remove_drinks");

if (addDrink) {
  addDrink.addEventListener("click", function () {
    let price = document.getElementById("drinks_price").value.trim();
    if (price === "" || Number(price) <= 0) {
      document.getElementById("price_alert_drinks").textContent =
        "Please set a valid price before adding the item.";
      return;
    }

    let drinkCard =
      '<div class="menu_card">' +
      '<img src="./Images/drinks.jpg" alt="Drinks" />' +
      '<div class="item_content">' +
      '<p class="name">Drinks</p>' +
      '<p class="price"><sup>Price</sup>₦' + price + '</p>' +
      '<select id="select_drink">' +
      '<option value="0" selected>Select Quantity</option>' +
      '<option value="1">1</option>' +
      '<option value="2">2</option>' +
      '<option value="3">3</option>' +
      '<option value="4">4</option>' +
      '<option value="5">5</option>' +
      '<option value="6">6</option>' +
      '<option value="7">7</option>' +
      '<option value="8">8</option>' +
      '<option value="9">9</option>' +
      '<option value="10">10</option>' +
      '<option value="other">other</option>' +
      '</select><br />' +
      '<input type="number" id="hidden_drink" style="visibility:hidden;" placeholder="Enter quantity" />' +
      '</div></div>';

    localStorage.setItem("menu_card_drink", drinkCard);
  });
}

if (removeDrink) {
  removeDrink.addEventListener("click", function () {
    localStorage.removeItem("menu_card_drink");
    localStorage.removeItem("order_drink");
  });
}

//Display Menu
document.addEventListener("DOMContentLoaded", function () {
  let menu = document.getElementById("menu_container");
  if (!menu) return;

  let cakeCard = localStorage.getItem("menu_card_cake");
  let foodCard = localStorage.getItem("menu_card_food");
  let drinkCard = localStorage.getItem("menu_card_drink");

  if (cakeCard) menu.insertAdjacentHTML("beforeend", cakeCard);
  if (foodCard) menu.insertAdjacentHTML("beforeend", foodCard);
  if (drinkCard) menu.insertAdjacentHTML("beforeend", drinkCard);

  
  let cakeSelect = document.getElementById("select_cake");
  let hiddenCake = document.getElementById("hidden_cake");
  if (cakeSelect) {
    let cakePrice = document.querySelector("#select_cake")
                      .closest(".menu_card")
                      .querySelector(".price").textContent.replace(/\D/g, "");
    cakeSelect.addEventListener("change", function () {
      if (cakeSelect.value === "other") {
        hiddenCake.style.visibility = "visible";
      } else {
        hiddenCake.style.visibility = "hidden";
        if (cakeSelect.value !== "0") {
          let qty = Number(cakeSelect.value);
          localStorage.setItem("order_cake",
            JSON.stringify({ price: cakePrice, quantity: qty, total: qty * cakePrice })
          );
        }
      }
    });
    if (hiddenCake) {
      hiddenCake.addEventListener("input", function () {
        let qty = Number(hiddenCake.value);
        localStorage.setItem("order_cake",
          JSON.stringify({ price: cakePrice, quantity: qty, total: qty * cakePrice })
        );
      });
    }
  }

  let foodSelect = document.getElementById("select_food");
  let hiddenFood = document.getElementById("hidden_food");
  if (foodSelect) {
    let foodPrice = document.querySelector("#select_food")
                       .closest(".menu_card")
                       .querySelector(".price").textContent.replace(/\D/g, "");
    foodSelect.addEventListener("change", function () {
      if (foodSelect.value === "other") {
        hiddenFood.style.visibility = "visible";
      } else {
        hiddenFood.style.visibility = "hidden";
        if (foodSelect.value !== "0") {
          let qty = Number(foodSelect.value);
          localStorage.setItem("order_food",
            JSON.stringify({ price: foodPrice, quantity: qty, total: qty * foodPrice })
          );
        }
      }
    });
    if (hiddenFood) {
      hiddenFood.addEventListener("input", function () {
        let qty = Number(hiddenFood.value);
        localStorage.setItem("order_food",
          JSON.stringify({ price: foodPrice, quantity: qty, total: qty * foodPrice })
        );
      });
    }
  }

  let drinkSelect = document.getElementById("select_drink");
  let hiddenDrink = document.getElementById("hidden_drink");
  if (drinkSelect) {
    let drinkPrice = document.querySelector("#select_drink")
                        .closest(".menu_card")
                        .querySelector(".price").textContent.replace(/\D/g, "");
    drinkSelect.addEventListener("change", function () {
      if (drinkSelect.value === "other") {
        hiddenDrink.style.visibility = "visible";
      } else {
        hiddenDrink.style.visibility = "hidden";
        if (drinkSelect.value !== "0") {
          let qty = Number(drinkSelect.value);
          localStorage.setItem("order_drink",
            JSON.stringify({ price: drinkPrice, quantity: qty, total: qty * drinkPrice })
          );
        }
      }
    });
    if (hiddenDrink) {
      hiddenDrink.addEventListener("input", function () {
        let qty = Number(hiddenDrink.value);
        localStorage.setItem("order_drink",
          JSON.stringify({ price: drinkPrice, quantity: qty, total: qty * drinkPrice })
        );
      });
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let summary = document.getElementById("order_summary");

  let cake = localStorage.getItem("order_cake");
  if (cake) {
    cake = JSON.parse(cake);
    summary.innerHTML += `<p>Cake: ₦${cake.price} ➡️ Qty: ${cake.quantity} ➡️ Total: ₦${cake.total}</p>`;
  }

  let food = localStorage.getItem("order_food");
 
  if (food) {
    food = JSON.parse(food);
    summary.innerHTML += `<p>Food: ₦${food.price} ➡️ Qty: ${food.quantity} ➡️ Total: ₦${food.total}</p>`;
     
  }

  let drink = localStorage.getItem("order_drink");
  if (drink) {
    drink = JSON.parse(drink);
    summary.innerHTML += `<p>Drink: ₦${drink.price} ➡️ Qty: ${drink.quantity} ➡️ Total: ₦${drink.total}</p>`;
  }
});

console.log(food.total)