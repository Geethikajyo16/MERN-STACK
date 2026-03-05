const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 45 },
];

let cart = [];
function displayProducts() {
  console.log("Available Products:");
  products.forEach(product => {
    console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}`);
  });
  console.log("--------------------------------------------------");
}


function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    console.log(`${product.name} added to cart.`);
  } else {
    console.log("Product not found!");
  }
}

function displayCart() {
  console.log("Cart Contents:");
  if (cart.length === 0) {
    console.log("Cart is empty.");
  } else {
    cart.forEach(item => {
      console.log(`Name: ${item.name}, Price: $${item.price}, Quantity: ${item.quantity}`);
    });
  }
  console.log("--------------------------------------------------");
}


displayProducts();
addToCart(2);
displayCart();
addToCart(1);
displayCart();



