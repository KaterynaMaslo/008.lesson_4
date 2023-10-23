const categories = document.getElementById("categories");
const products = document.getElementById("products");
const productInfo = document.getElementById("product-info");

const categoryData = [
  { id: 1, name: "Електроніка" },
  { id: 2, name: "Одяг" },
  { id: 3, name: "Аксесуари" }
];

const productData = [
  { id: 1, category: 1, name: "Смартфон", price: 500 },
  { id: 2, category: 1, name: "Ноутбук", price: 800 },
  { id: 3, category: 2, name: "Футболка", price: 20 },
  { id: 4, category: 2, name: "Джинси", price: 30 },
  { id: 5, category: 3, name: "Годинник", price: 100 },
  { id: 6, category: 3, name: "Окуляри", price: 10 }
];

const buyProduct = (product) => {
  productInfo.innerHTML = `<p>Товар "${product.name}" куплений.</p>`;
  setTimeout(() => {
    productInfo.innerHTML = "";
    showCategories();
  }, 2000);
};

const showCategories = () => {
  categories.innerHTML = "<h2>Категорії</h2>";
  const ul = document.createElement("ul");
  categoryData.forEach((category) => {
    const li = document.createElement("li");
    li.textContent = category.name;
    li.addEventListener("click", () => showProductsByCategory(category.id));
    ul.appendChild(li);
  });
  categories.appendChild(ul);
  products.innerHTML = "";
  productInfo.innerHTML = "";
};

const showProductsByCategory = (categoryId) => {
  products.innerHTML = "<h2>Товари</h2>";
  const ul = document.createElement("ul");
  const categoryProducts = productData.filter((product) => product.category === categoryId);
  categoryProducts.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    li.addEventListener("click", () => showProductInfo(product));
    ul.appendChild(li);
  });
  products.appendChild(ul);
  productInfo.innerHTML = "";
};

const showProductInfo = (product) => {
  productInfo.innerHTML = `<h2>${product.name}</h2>
  <p>Ціна: $${product.price}</p>
  <button id="buy-button">Купити</button>`;
  const buyButton = document.getElementById("buy-button");
  buyButton.addEventListener("click", () => buyProduct(product));
};

showCategories();
