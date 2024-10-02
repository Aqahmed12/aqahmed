// Get the modal, button, and close elements
const modal = document.getElementById('orderModal');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const closeBtn = document.querySelector('.close-btn');
const cancelBtn = document.querySelector('.cancel-btn');

// Product details that will be sent via WhatsApp
const productImageUrl = "https://via.placeholder.com/250"; // Placeholder image URL, replace with actual URL if dynamic

// Open modal when any "Add to Cart" button is clicked
addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when cancel button is clicked
cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Handle form submission and redirect to WhatsApp
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const quantity = document.getElementById('quantity').value;

    // Compose the message
    const message = `Order Details:
Product: Product Name
Quantity: ${quantity}
Name: ${name}
Phone: ${phone}
City: ${city}
Address: ${address}
Product Image: ${productImageUrl}`;  // Include product image URL in the message

    // WhatsApp API redirect with the message
    window.location.href = `https://wa.me/03148512768?text=${encodeURIComponent(message)}`;
});
