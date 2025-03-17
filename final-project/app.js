// State management
const store = {
    state: {
        products: [],
        cart: [],
        isCartOpen: false,
        isCheckoutOpen: false,
    },
    
    // Getters
    getCartCount() {
        return this.state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    
    getCartTotal() {
        return this.state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    // Actions
    fetchProducts() {
        // Simulating API call
        setTimeout(() => {
            this.state.products = [
                { id: 1, name: 'Premium Headphones', price: 129.99, image: 'https://via.placeholder.com/300x200?text=Headphones' },
                { id: 2, name: 'Wireless Mouse', price: 49.99, image: 'https://via.placeholder.com/300x200?text=Mouse' },
                { id: 3, name: 'Mechanical Keyboard', price: 89.99, image: 'https://via.placeholder.com/300x200?text=Keyboard' },
                { id: 4, name: 'Gaming Monitor', price: 299.99, image: 'https://via.placeholder.com/300x200?text=Monitor' },
                { id: 5, name: 'Smartphone', price: 599.99, image: 'https://via.placeholder.com/300x200?text=Smartphone' },
                { id: 6, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/300x200?text=Laptop' },
                { id: 7, name: 'Smartwatch', price: 199.99, image: 'https://via.placeholder.com/300x200?text=Smartwatch' },
                { id: 8, name: 'Wireless Earbuds', price: 79.99, image: 'https://via.placeholder.com/300x200?text=Earbuds' },
            ];
            this.renderProducts();
        }, 500);
    },
    
    addToCart(productId) {
        const product = this.state.products.find(p => p.id === productId);
        if (!product) return;
        
        const existingItem = this.state.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.state.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        this.updateCartUI();
        this.showNotification(`${product.name} added to cart!`);
    },
    
    removeFromCart(productId) {
        this.state.cart = this.state.cart.filter(item => item.id !== productId);
        this.updateCartUI();
    },
    
    updateQuantity(productId, quantity) {
        const item = this.state.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.updateCartUI();
        }
    },
    
    toggleCart() {
        this.state.isCartOpen = !this.state.isCartOpen;
        document.getElementById('cart-dropdown').classList.toggle('hidden', !this.state.isCartOpen);
    },
    
    openCheckout() {
        if (this.state.cart.length === 0) {
            this.showNotification('Your cart is empty!', 'error');
            return;
        }
        
        this.state.isCheckoutOpen = true;
        document.getElementById('checkout-modal').classList.remove('hidden');
        this.renderCheckoutItems();
        this.initPayPal();
    },
    
    closeCheckout() {
        this.state.isCheckoutOpen = false;
        document.getElementById('checkout-modal').classList.add('hidden');
    },
    
    // UI rendering functions
    renderProducts() {
        const container = document.getElementById('products-container');
        container.innerHTML = this.state.products.map(product => `
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
                    <div class="flex justify-between items-center">
                        <span class="text-xl font-bold">$${product.price.toFixed(2)}</span>
                        <button 
                            class="add-to-cart bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition" 
                            data-id="${product.id}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add event listeners
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                this.addToCart(Number(button.getAttribute('data-id')));
            });
        });
    },
    
    updateCartUI() {
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const checkoutTotal = document.getElementById('checkout-total');
        
        // Update cart count
        cartCount.textContent = this.getCartCount();
        
        // Update cart items
        if (this.state.cart.length === 0) {
            cartItems.innerHTML = '<p class="text-gray-500 text-center py-8">Your cart is empty</p>';
        } else {
            cartItems.innerHTML = this.state.cart.map(item => `
                <div class="flex items-center mb-4 pb-4 border-b">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded mr-4">
                    <div class="flex-1">
                        <h4 class="font-semibold">${item.name}</h4>
                        <div class="flex items-center mt-1">
                            <button class="quantity-btn bg-gray-200 px-2 rounded" data-id="${item.id}" data-action="decrease">-</button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="quantity-btn bg-gray-200 px-2 rounded" data-id="${item.id}" data-action="increase">+</button>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="font-semibold">$${(item.price * item.quantity).toFixed(2)}</div>
                        <button class="remove-item text-red-500 text-sm mt-1" data-id="${item.id}">Remove</button>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners
            document.querySelectorAll('.quantity-btn').forEach(button => {
                button.addEventListener('click', () => {
                    const id = Number(button.getAttribute('data-id'));
                    const action = button.getAttribute('data-action');
                    const item = this.state.cart.find(item => item.id === id);
                    
                    if (action === 'increase') {
                        this.updateQuantity(id, item.quantity + 1);
                    } else {
                        if (item.quantity > 1) {
                            this.updateQuantity(id, item.quantity - 1);
                        } else {
                            this.removeFromCart(id);
                        }
                    }
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', () => {
                    this.removeFromCart(Number(button.getAttribute('data-id')));
                });
            });
        }
        
        // Update totals
        const total = this.getCartTotal();
        cartTotal.textContent = `$${total.toFixed(2)}`;
        checkoutTotal.textContent = `$${total.toFixed(2)}`;
    },
    
    renderCheckoutItems() {
        const container = document.getElementById('checkout-items');
        container.innerHTML = this.state.cart.map(item => `
            <div class="flex justify-between mb-4">
                <div>
                    <p class="font-semibold">${item.name}</p>
                    <p class="text-sm text-gray-500">Qty: ${item.quantity}</p>
                </div>
                <p class="font-semibold">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        `).join('');
    },
    
    initPayPal() {
        const paypalContainer = document.getElementById('paypal-button-container');
        paypalContainer.innerHTML = ''; // Clear previous buttons
        
        paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: this.getCartTotal().toFixed(2)
                        }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    this.processOrder(details);
                });
            }
        }).render('#paypal-button-container');
    },
    
    processOrder(details) {
        // In a real app, you would send this data to your server
        console.log('Order processed:', details);
        
        // Clear cart and show success message
        this.state.cart = [];
        this.updateCartUI();
        this.closeCheckout();
        this.showNotification('Order successfully placed! Thank you for your purchase.', 'success');
    },
    
    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white z-50 transition-opacity duration-500`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
    },
    
    // Initialize the application
    init() {
        this.fetchProducts();
        
        // Event listeners
        document.getElementById('cart-button').addEventListener('click', () => {
            this.toggleCart();
        });
        
        document.getElementById('checkout-button').addEventListener('click', () => {
            this.toggleCart();
            this.openCheckout();
        });
        
        document.getElementById('close-checkout').addEventListener('click', () => {
            this.closeCheckout();
        });
        
        // Close cart when clicking outside
        document.addEventListener('click', (e) => {
            const cartDropdown = document.getElementById('cart-dropdown');
            const cartButton = document.getElementById('cart-button');
            
            if (this.state.isCartOpen && 
                !cartDropdown.contains(e.target) && 
                !cartButton.contains(e.target)) {
                this.toggleCart();
            }
        });
        
        // Close checkout when clicking outside the modal content
        document.getElementById('checkout-modal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('checkout-modal')) {
                this.closeCheckout();
            }
        });
    }
};

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    store.init();
});