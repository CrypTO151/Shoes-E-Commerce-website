document.addEventListener("DOMContentLoaded", function() {
    // Load cart items from localStorage
    displayCartItems();

    function displayCartItems() {
        const cartItemsContainer = document.getElementById('cartItems');
        const totalAmountElement = document.getElementById('totalAmount');
        let totalAmount = 0;
    
        // Clear previous items
        cartItemsContainer.innerHTML = '';
    
        // Retrieve cart items from localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
        // Limit to displaying only the first 10 items
        const itemsToDisplay = cartItems.slice(0, 10);
    
        // Iterate through each cart item
        itemsToDisplay.forEach(item => {
            const newItem = document.createElement('div');
            newItem.classList.add('cart-item');
            newItem.innerHTML = `
                <span class="item-title">${item.title}</span>
                <span class="item-price">$${item.price.toFixed(2)}</span>
            `;
            cartItemsContainer.appendChild(newItem);
    
            // Update total amount
            totalAmount += item.price;
        });
    
        // Update total amount on the page
        totalAmountElement.textContent = '$' + totalAmount.toFixed(2);
    }
});