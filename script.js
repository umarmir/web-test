const products = [
    {
        id: 1,
        name: 'Kids Bed 1',
        image: 'https://furniturecity.com.pk/cdn/shop/products/KB58_2_720x.jpg',
        price: 150
    },
    {
        id: 2,
        name: 'Kids Bed 2',
        image: 'https://furniturecity.com.pk/cdn/shop/products/KB22_1_720x.jpg',
        price: 299
    },
    {
        id: 3,
        name: 'Kids Bed 3',
        image: 'https://furniturecity.com.pk/cdn/shop/products/KB02_720x.jpg',
        price: 200
    },
    {
        id: 4,
        name: 'Kids Bed 4',
        image: 'https://furniturecity.com.pk/cdn/shop/products/KB06_720x.jpg',
        price: 350
    },
    {
        id: 5,
        name: 'Kids Bed 5',
        image: 'https://furniturecity.com.pk/cdn/shop/products/KB07_1_720x.jpg',
        price: 800
    },
    {
        id: 6,
        name: 'Kids Bed 6',
        image: 'https://furniturecity.com.pk/cdn/shop/products/KB10_720x.jpg',
        price: 290
    },
];


let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartCount();
});

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    const existingProduct = cart.find(p => p.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Quantity: ${item.quantity}</p>
            <p>Total: $${item.price * item.quantity}</p>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartCount.textContent = cart.length;
}

function checkout() {
    alert('Thanks for your purchase!');
    cart = [];
    updateCart();
}

document.getElementById('checkout-button').addEventListener('click', checkout);

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}
