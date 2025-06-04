let cart = [];
let allProducts = [];

db.collection("products").onSnapshot((snapshot) => {
  const container = document.getElementById("product-container");
  container.innerHTML = "";
  allProducts = [];

  snapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    allProducts.push(data);
  });

  renderProducts(allProducts);
});

function renderProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";
  products.forEach(data => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${data.image}" alt="${data.name}">
      <div class="product-info">
        <h3>${data.name}</h3>
        <p>${data.description}</p>
        <p><strong>₹${data.price}</strong></p>
        <div class="product-buttons">
          <button class="add-to-cart" onclick="addToCart('${data.id}')">Add to Cart</button>
          <button class="buy-now">Buy Now</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function addToCart(productId) {
  cart.push(productId);
  document.getElementById("cartCount").innerText = `Cart (${cart.length})`;
}

document.getElementById("searchBar").addEventListener("input", function(e) {
  const keyword = e.target.value.toLowerCase();
  const filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(keyword) ||
    p.description.toLowerCase().includes(keyword)
  );
  renderProducts(filtered);
});