// Form handling and validation
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('passwordToggle');
    const emailInput = document.getElementById('email');

    // Password visibility toggle
    passwordToggle.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle eye icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (!isValidEmail(email)) {
            showError(emailInput, 'Please enter a valid email address');
            return;
        }
        
        if (password.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters long');
            return;
        }

        // If validation passes, you can proceed with login
        console.log('Login attempt:', { email, password });
        // Add your login logic here
    });

    // Input focus effects
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.borderColor = '#4a90e2';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.borderColor = '#e1e1e1';
            removeError(this);
        });
    });

    // Social login buttons
    const googleBtn = document.querySelector('.google');
    const facebookBtn = document.querySelector('.facebook');

    googleBtn.addEventListener('click', () => {
        console.log('Google login clicked');
        // Implement Google login
    });

    facebookBtn.addEventListener('click', () => {
        console.log('Facebook login clicked');
        // Implement Facebook login
    });
});

// Helper functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const existingError = formGroup.querySelector('.error-message');
    
    if (!existingError) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;
        formGroup.appendChild(errorDiv);
    }
    
    input.style.borderColor = '#e74c3c';
}

function removeError(input) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Remember me functionality
const rememberCheckbox = document.getElementById('remember');
if (rememberCheckbox) {
    rememberCheckbox.addEventListener('change', function() {
        if (this.checked) {
            // Implement remember me logic
            console.log('Remember me checked');
        } else {
            console.log('Remember me unchecked');
        }
    });
}