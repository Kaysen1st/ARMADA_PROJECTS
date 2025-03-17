    // Get DOM elements
    const balanceElement = document.getElementById('balance');
    const amountInput = document.getElementById('amount');
    const depositBtn = document.getElementById('depositBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const feedbackElement = document.getElementById('feedback');
 
    
    // Initialize account
    let balance = 1000.00;
    
    // Update balance display function
    function updateBalanceDisplay() {
        balanceElement.classList.add('scale-110', 'text-blue-600');
        balanceElement.textContent = `$${balance.toFixed(2)}`;
        
        setTimeout(() => {
            balanceElement.classList.remove('scale-110', 'text-blue-600');
        }, 300);
    }
    
    // Initialize display
    updateBalanceDisplay();
    
    // Event listeners
    depositBtn.addEventListener('click', handleDeposit);
    withdrawBtn.addEventListener('click', handleWithdraw);
    
    // Handle deposit transaction
    function handleDeposit() {
        const amount = parseFloat(amountInput.value);
        
        if (!validateAmount(amount)) return;
        
        // Process deposit
        balance += amount;
        updateBalanceDisplay();
        
        // Show feedback
        showFeedback(`Successfully deposited $${amount.toFixed(2)}`, 'success');
        
        // Reset input
        amountInput.value = '';
    }
    
    // Handle withdraw transaction
    function handleWithdraw() {
        const amount = parseFloat(amountInput.value);
        
        if (!validateAmount(amount)) return;
        
        // Check if sufficient funds
        if (amount > balance) {
            showFeedback('Insufficient funds for this withdrawal', 'error');
            return;
        }
        
        // Process withdrawal
        balance -= amount;
        updateBalanceDisplay();
        
        // Show feedback
        showFeedback(`Successfully withdrew $${amount.toFixed(2)}`, 'success');
        
        // Reset input
        amountInput.value = '';
    }
    
    // Validate transaction amount
    function validateAmount(amount) {
        if (isNaN(amount) || amount <= 0) {
            showFeedback('Please enter a valid positive amount', 'error');
            return false;
        }
        return true;
    }
    
    // Show feedback message
    function showFeedback(message, type) {
        feedbackElement.textContent = message;
        feedbackElement.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
        
        if (type === 'success') {
            feedbackElement.classList.add('bg-green-100', 'text-green-800');
        } else {
            feedbackElement.classList.add('bg-red-100', 'text-red-800');
        }
        
        // Auto hide after 3 seconds
        setTimeout(() => {
            feedbackElement.classList.add('hidden');
        }, 3000);
    };