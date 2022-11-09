const menuItems = [
  {
    name: "French Fries with Ketchup",
    price: 223,
    image: "plate__french-fries.png",
    alt: "French Fries",
    count: 0,
  },
  {
    name: "Salmon and Vegetables",
    price: 512,
    image: "plate__salmon-vegetables.png",
    alt: "Salmon and Vegetables",
    count: 0,
  },
  {
    name: "Spaghetti Meat Sauce",
    price: 782,
    image: "plate__spaghetti-meat-sauce.png",
    alt: "Spaghetti with Meat Sauce",
    count: 0,
  },
  {
    name: "Bacon, Eggs, and Toast",
    price: 599,
    image: "plate__bacon-eggs.png",
    alt: "Bacon, Eggs, and Toast",
    count: 0,
  },
  {
    name: "Chicken Salad with Parmesan",
    price: 698,
    image: "plate__chicken-salad.png",
    alt: "Chicken Salad with Parmesan",
    count: 0,
  },
  {
    name: "Fish Sticks and Fries",
    price: 634,
    image: "plate__fish-sticks-fries.png",
    alt: "Fish Sticks and Fries",
    count: 0,
  },
];

const menu = document.querySelector("ul.menu");
const cartSummary = document.querySelector("ul.cart-summary");
const emptyPara = document.querySelector("p.empty");
const subTotal = document.querySelector("div.subtotal");
const cartTotalDiv = document.querySelector("div.line-item.total")
  .childNodes[3];
const cartTaxes = document.querySelector("div.amount.price.tax");

let totalWithoutTaxes = 0;
let totalTaxes = 0;
let cartTot = 0;

menuItems.forEach((item, idx) => {
  const liEL = document.createElement("li");
  liEL.innerHTML = `
            <div class="plate">
              <img
                src="images/${item.image}"
                alt="${item.alt}"
                class="plate"
              />
            </div>
            <div class="content" data-item=${idx}>
              <p class="menu-item">${item.name}</p>
              <p class="price">$${item.price / 100}</p>
              <button class="add">Add to Cart</button>
            </div>
         `;
  menu.appendChild(liEL);
});

const increaseItems = (id) => {
  menuItems[id].count += 1;
  document.querySelector(
    `div.quantity[data-item="${id}"]`
  ).textContent = `${menuItems[id].count}`;
  document.querySelector(
    `div.quantity__wrapper[data-item="${id}"]`
  ).children[1].textContent = menuItems[id].count;
  total(id);
};

const decreaseItems = (id) => {
  menuItems[id].count -= 1;
  total(id);
  if (menuItems[id].count < 1) {
    document.querySelector(`li[data-item="${id}"]`).remove();
    const targetBtn = document.querySelector(`div[data-item="${id}"] button`);
    targetBtn.innerHTML = ``;
    targetBtn.textContent = "Add To Cart";
    targetBtn.classList = "add";
  } else {
    document.querySelector(
      `div.quantity[data-item="${id}"]`
    ).textContent = `${menuItems[id].count}`;
    document.querySelector(
      `div.quantity__wrapper[data-item="${id}"]`
    ).children[1].textContent = menuItems[id].count;
  }
};

//Renders
const renderItemToCart = () => {
  const cartItems = menuItems.filter((el) => el.count > 0);
  emptyPara.style.display = !cartItems.length ? "block" : "none";
};

const total = (id) => {
  menuItems[id].total = (menuItems[id].count * menuItems[id].price) / 100;
  document.querySelector(
    `div.subtotal[data-item="${id}"]`
  ).textContent = `$${menuItems[id].total}`;

  subTotalCal();
  calTotalTaxes();
  cartTotal();
  renderBtnInCart(id);
};

const createLiEL = (itemIdx) => {
  const cartEl = document.createElement("li");
  const btnAdd = document.createElement("button");
  const btnDes = document.createElement("button");

  btnAdd.className = "increase";
  btnDes.className = "decrease";

  html = `<img src="images/chevron.svg" />`;

  btnAdd.innerHTML = html;
  btnDes.innerHTML = html;

  cartEl.dataset.item = itemIdx;
  cartEl.innerHTML = `
            <div class="plate">
              <img
                src="images/${menuItems[itemIdx].image}"
                alt=${menuItems[itemIdx].alt}
                class="plate"
              />
              <div class="quantity" data-item=${itemIdx}>${
    menuItems[itemIdx].count
  }</div>
            </div>

            <div class="content">
              <p class="menu-item">${menuItems[itemIdx].name}</p>
              <p class="price">$${menuItems[itemIdx].price / 100}</p>
            </div>

            <div class="quantity__wrapper" data-item=${itemIdx}>
              <div class="quantity" data-item=${itemIdx}>${
    menuItems[itemIdx].count
  }</div>
            </div>

            <div class="subtotal" data-item=${itemIdx}>$${
    menuItems[itemIdx].total
  }</div>`;

  cartSummary.appendChild(cartEl);
  const qtyWrapper = document.querySelector(
    `div.quantity__wrapper[data-item="${itemIdx}"]`
  );
  qtyWrapper.insertAdjacentElement("afterbegin", btnDes);
  qtyWrapper.insertAdjacentElement("beforeend", btnAdd);

  btnAdd.addEventListener("click", (e) => increaseItems(itemIdx));
  btnDes.addEventListener("click", (e) => decreaseItems(itemIdx));
};

// Event Handlers
const addTooCart = (e) => {
  const itemIdx = e.target.parentElement.dataset.item;
  menuItems[itemIdx].count += 1;

  if (!document.querySelector(`li[data-item="${itemIdx}"]`)) {
    createLiEL(itemIdx);
  } else {
    menuItems[itemIdx].count += 1;
  }
  renderItemToCart();
  total(itemIdx);
};

const subTotalCal = () => {
  totalWithoutTaxes = menuItems
    .filter((el) => el.count > 0)
    .reduce((previous, current) => {
      return current.total + previous;
    }, 0)
    .toFixed(2);

  subTotal.textContent = `$${totalWithoutTaxes}`;
};

const calTotalTaxes = () => {
  totalTaxes = totalWithoutTaxes * 0.1;
  cartTaxes.textContent = `$${totalTaxes.toFixed(2)}`;
};

const cartTotal = () => {
  cartTot = +totalWithoutTaxes + +totalTaxes;

  cartTotalDiv.textContent = `$${cartTot.toFixed(2)}`;
};

const renderBtnInCart = (id) => {
  const targetBtn = document.querySelector(`div[data-item="${id}"] button`);
  targetBtn.innerHTML = `<img src="images/check.svg" alt="Check" />`;
  targetBtn.textContent = "In Cart";
  targetBtn.classList = "in-cart";
};

//Event Listeners
document.querySelectorAll("button.add").forEach((el) => {
  el.addEventListener("click", addTooCart);
});

renderItemToCart();
