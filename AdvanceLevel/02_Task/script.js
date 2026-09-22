(function () {
    'use strict';

    const form = document.getElementById('registrationForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('successMsg');

    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirm = document.getElementById('toggleConfirm');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirmPassword');

    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');

    const rules = {
        name: function (value) {
            const v = value.trim();
            if (!v) return 'Full name is required.';
            if (v.length < 3) return 'Name must be at least 3 characters.';
            if (v.length > 50) return 'Name must be under 50 characters.';
            if (!/^[a-zA-Z\s'.-]+$/.test(v)) return 'Name can only contain letters, spaces, apostrophes, dots and hyphens.';
            return '';
        },

        email: function (value) {
            const v = value.trim();
            if (!v) return 'Email address is required.';
            // RFC-ish email regex
            const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!re.test(v)) return 'Please enter a valid email address.';
            return '';
        },

        username: function (value) {
            const v = value.trim();
            if (!v) return 'Username is required.';
            if (v.length < 4) return 'Username must be at least 4 characters.';
            if (v.length > 20) return 'Username must be under 20 characters.';
            if (!/^[a-zA-Z0-9_]+$/.test(v)) return 'Username can only contain letters, numbers and underscores.';
            return '';
        },

        password: function (value) {
            if (!value) return 'Password is required.';
            if (value.length < 8) return 'Password must be at least 8 characters.';
            if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter.';
            if (!/[a-z]/.test(value)) return 'Password must contain at least one lowercase letter.';
            if (!/[0-9]/.test(value)) return 'Password must contain at least one number.';
            return '';
        },

        confirmPassword: function (value) {
            if (!value) return 'Please confirm your password.';
            if (value !== passwordInput.value) return 'Passwords do not match.';
            return '';
        },

        phone: function (value) {
            const v = value.trim();
            if (!v) return ''; 
            if (!/^[0-9+\-\s()]{7,20}$/.test(v)) return 'Please enter a valid phone number (7–20 digits).';
            return '';
        },

        country: function (value) {
            if (!value) return 'Please select your country.';
            return '';
        },

        terms: function (_, checkbox) {
            if (!checkbox.checked) return 'You must accept the Terms of Service.';
            return '';
        }
    };

    function getValue(fieldName) {
        const el = form.elements[fieldName];
        if (!el) return '';
        if (el.type === 'checkbox') return el.checked;
        return el.value;
    }

    function getGroup(fieldName) {
        return document.querySelector(`.form-group[data-field="${fieldName}"]`);
    }

    function getErrorEl(fieldName) {
        return document.getElementById(fieldName + 'Error');
    }

    function validateField(fieldName) {
        const group = getGroup(fieldName);
        const errorEl = getErrorEl(fieldName);
        if (!group || !errorEl) return true;

        const value = getValue(fieldName);
        const inputEl = form.elements[fieldName];
        const errorMessage = rules[fieldName]
            ? rules[fieldName](value, inputEl)
            : '';

        group.classList.remove('valid', 'invalid');
        errorEl.classList.remove('show');
        errorEl.textContent = '';

        if (errorMessage) {
            group.classList.add('invalid');
            errorEl.textContent = errorMessage;
            errorEl.classList.add('show');
            return false;
        } else {
            if (value !== '' && value !== false) {
                group.classList.add('valid');
            }
            return true;
        }
    }

    function validateAll() {
        const fields = ['name', 'email', 'username', 'password', 'confirmPassword', 'phone', 'country', 'terms'];
        let allValid = true;

        fields.forEach(function (field) {
            const valid = validateField(field);
            if (!valid) allValid = false;
        });

        return allValid;
    }

    function updateStrengthMeter(value) {
        let score = 0;

        if (!value) {
            strengthFill.style.width = '0%';
            strengthFill.style.background = '#d64545';
            strengthText.textContent = 'Enter a password';
            return;
        }

        if (value.length >= 8) score++;
        if (value.length >= 12) score++;

        // Character variety
        if (/[A-Z]/.test(value)) score++;
        if (/[a-z]/.test(value)) score++;
        if (/[0-9]/.test(value)) score++;
        if (/[^A-Za-z0-9]/.test(value)) score++;

        const percent = Math.min(100, (score / 6) * 100);
        strengthFill.style.width = percent + '%';

        let label, color;
        if (score <= 2) {
            label = 'Weak';
            color = '#d64545';
        } else if (score === 3) {
            label = 'Fair';
            color = '#e08a3c';
        } else if (score === 4) {
            label = 'Good';
            color = '#d4b52b';
        } else if (score === 5) {
            label = 'Strong';
            color = '#4a9c5c';
        } else {
            label = 'Very Strong';
            color = '#1d7a3e';
        }

        strengthFill.style.background = color;
        strengthText.textContent = label;
        strengthText.style.color = color;
    }

    const fieldNames = ['name', 'email', 'username', 'password', 'confirmPassword', 'phone', 'country', 'terms'];

    fieldNames.forEach(function (fieldName) {
        const inputEl = form.elements[fieldName];
        if (!inputEl) return;

        if (fieldName === 'password') {
            inputEl.addEventListener('input', function () {
                updateStrengthMeter(this.value);
                if (confirmInput.value) {
                    validateField('confirmPassword');
                }
                if (getGroup(fieldName).classList.contains('invalid')) {
                    validateField(fieldName);
                }
            });
        } else if (fieldName === 'confirmPassword') {
            inputEl.addEventListener('input', function () {
                if (getGroup(fieldName).classList.contains('invalid')) {
                    validateField(fieldName);
                }
            });
        } else {
            inputEl.addEventListener('input', function () {
                validateField(fieldName);
            });
        }

        inputEl.addEventListener('blur', function () {
            validateField(fieldName);
        });

        if (inputEl.tagName === 'SELECT') {
            inputEl.addEventListener('change', function () {
                validateField(fieldName);
            });
        }

        if (inputEl.type === 'checkbox') {
            inputEl.addEventListener('change', function () {
                validateField(fieldName);
            });
        }
    });

    function setupToggle(button, input, iconEl) {
        button.addEventListener('click', function () {
            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';
            iconEl.textContent = isPassword ? '🙈' : '👁️';
            button.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
        });
    }

    setupToggle(togglePassword, passwordInput, document.getElementById('toggleIcon'));
    setupToggle(toggleConfirm, confirmInput, document.getElementById('toggleConfirmIcon'));

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const isValid = validateAll();

        if (!isValid) {
            const firstInvalid = document.querySelector('.form-group.invalid input, .form-group.invalid select');
            if (firstInvalid) firstInvalid.focus();

            const card = document.querySelector('.form-card');
            card.style.animation = 'none';
            setTimeout(function () {
                card.style.animation = 'shake 0.4s ease';
            }, 10);
            return;
        }

        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        setTimeout(function () {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            successMsg.classList.add('show');

            form.reset();

            document.querySelectorAll('.form-group').forEach(function (group) {
                group.classList.remove('valid', 'invalid');
            });
            document.querySelectorAll('.error-msg').forEach(function (el) {
                el.classList.remove('show');
                el.textContent = '';
            });

            updateStrengthMeter('');

            setTimeout(function () {
                successMsg.classList.remove('show');
            }, 5000);
        }, 1200);
    });

    updateStrengthMeter('');
})();