// document.addEventListener("DOMContentLoaded", function() {
//     const addToCartButtons = document.querySelectorAll('.btn-cart');
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', addToCart);
//     });

//     function addToCart(event) {
//         const productContainer = event.target.closest('.product-container');
//         const productTitle = productContainer.querySelector('.product-title').innerText;
//         const productPrice = parseFloat(productContainer.querySelector('.product-price').innerText.replace('$', ''));

//         // Update the total price
//         const totalElement = document.getElementById('totalAmount');
//         const currentTotal = parseFloat(totalElement.innerText.replace('$', ''));
//         const newTotal = currentTotal + productPrice;
//         totalElement.innerText = '$' + newTotal.toFixed(2); // Update total with 2 decimal places

//         // Assuming you have a function to store the cart items in localStorage or a server-side session
//         // You can also implement it to navigate to the cart page with the item details
//         // For now, let's just alert the user with the added item
//         alert(`Added to Cart:\n${productTitle} - $${productPrice}`);
//     }

//     function addToCartFromCarousel() {
//         // Get the details of the selected product from the carousel
//         // Add the product to the cart (localStorage or session)
//         // Redirect to the cart page
//         window.location.href = 'cart.html';
//     }

// });

// document.addEventListener("DOMContentLoaded", function() {
//     const addToCartButtons = document.querySelectorAll('.btn-cart');
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', addToCartFromCarousel);
//     });

//     function addToCartFromCarousel(event) {
//         const productContainer = event.target.closest('.product-container');
//         const productTitle = productContainer.querySelector('.product-title').innerText;
//         const productPrice = parseFloat(productContainer.querySelector('.product-price').innerText.replace('$', ''));

//         // Add the item details to localStorage
//         let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         cartItems.push({ title: productTitle, price: productPrice });
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));

//         // Redirect to cart.html
//         window.location.href = 'cart.html';
//     }
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const addToCartButtons = document.querySelectorAll('.btn-cart');
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', addToCartFromCarousel);
//     });

//     function addToCartFromCarousel(event) {
//         const productContainer = event.target.closest('.product-container');
//         const productTitle = productContainer.querySelector('.product-title').innerText;
//         const productPrice = parseFloat(productContainer.querySelector('.product-price').innerText.replace('$', ''));

//         // Show alert with item details
//         alert(`Added to Cart:\n${productTitle} - $${productPrice}`);

//         // // Update cart info on the page
//         // updateCartInfo(productTitle, productPrice);
//     }

//     // function updateCartInfo(title, price) {
//     //     // Update cart info on the page (you need to implement this function)
//     //     // For now, let's assume you have a function named displayCartInfo
//     //     displayCartInfo(title, price);
//     // }

//     function displayCartInfo(title, price) {
//         const cartItemsContainer = document.getElementById('cartItems');
        
//         // Create a new div element for the added item
//         const newItem = document.createElement('div');
//         newItem.classList.add('cart-item');
        
//         // Set the inner HTML of the new item
//         newItem.innerHTML = `
//             <span class="item-title">${title}</span>
//             <span class="item-price">$${price.toFixed(2)}</span>
//         `;
        
//         // Append the new item to the cart items container
//         cartItemsContainer.appendChild(newItem);
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.btn-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCartFromCarousel);
    });

    function addToCartFromCarousel(event) {
        const productContainer = event.target.closest('.product-container');
        const productTitle = productContainer.querySelector('.product-title').innerText;
        const productPrice = parseFloat(productContainer.querySelector('.product-price').innerText.replace('$', ''));
    
        // Retrieve cart items from localStorage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
        // Check if cart already has 10 items
        if (cartItems.length < 10) {
            // Add the new item to cart
            cartItems.push({ title: productTitle, price: productPrice });
    
            // Update cart items in localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
            // Show alert with item details
            alert(`Added to Cart:\n${productTitle} - $${productPrice}`);
    
            // Update cart info on the page
            updateCartInfo(productTitle, productPrice);
        } else {
            alert("Sorry, you can only add up to 10 items to the cart.");
        }
    }
});