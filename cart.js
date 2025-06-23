const cart = [];

function updateCart() {
    const cartContainer = document.getElementById("cart");
    const totalDisplay = document.getElementById("total");
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const div = document.createElement("div");
        div.innerHTML = `${item.name} - $${item.price} x ${item.quantity} 
            <button onclick="removeItem(${index})">Remove</button>`;
        cartContainer.appendChild(div);
    });

    totalDisplay.innerText = `Total: $${total.toFixed(2)}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart.length = 0;
    updateCart();
}

document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-name");
        const price = parseFloat(btn.getAttribute("data-price"));
        const existing = cart.find(item => item.name === name);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCart();
    });
});

document.getElementById("clear-cart").addEventListener("click", clearCart);
