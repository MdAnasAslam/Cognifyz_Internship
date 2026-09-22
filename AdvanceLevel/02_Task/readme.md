# 📝 Form Styling & Validation

A modern, responsive **Registration Form** built using **HTML, CSS, and JavaScript**.

This project demonstrates how to create a professional-looking form with **client-side validation, password strength detection, password visibility toggling, custom checkbox styling, responsive design, and interactive error/success states** — without using any external JavaScript framework or library.

---

## 🌐 Project Overview

The **Form Styling & Validation** project provides a complete account-registration interface where users can enter their personal information and receive real-time feedback while filling out the form.

The form includes:

* Full Name
* Email Address
* Username
* Password
* Confirm Password
* Phone Number
* Country Selection
* Terms & Conditions Agreement

JavaScript handles the validation and interaction logic, while CSS provides the modern visual design and responsive layout.

---

## ✨ Features

### 🎨 Modern UI Design

* Clean and professional registration interface
* Soft gradient background
* Glassmorphism-inspired card design
* Rounded corners
* Smooth shadows and transitions
* Google Sans typography
* Responsive layout for different screen sizes

### ✅ Form Validation

Each field has its own validation rules.

**Full Name**

* Required
* Minimum 3 characters
* Maximum 50 characters
* Allows letters, spaces, apostrophes, dots, and hyphens

**Email**

* Required
* Validates email format

**Username**

* Required
* 4–20 characters
* Allows letters, numbers, and underscores only

**Password**

* Required
* Minimum 8 characters
* Must contain:

  * At least one uppercase letter
  * At least one lowercase letter
  * At least one number

**Confirm Password**

* Required
* Must match the password

**Phone Number**

* Optional
* Accepts digits, spaces, `+`, `-`, and parentheses
* Supports 7–20 characters

**Country**

* Required
* User must select a country

**Terms & Conditions**

* User must accept the Terms of Service

---

## 🔐 Password Strength Meter

The project includes a dynamic password-strength meter.

The strength is calculated using:

* Password length
* Uppercase letters
* Lowercase letters
* Numbers
* Special characters

Possible strength levels:

| Strength    | Description                       |
| ----------- | --------------------------------- |
| Weak        | Basic or short password           |
| Fair        | Some character variety            |
| Good        | Better password complexity        |
| Strong      | Good combination of characters    |
| Very Strong | High character variety and length |

The strength bar updates automatically while the user types.

---

## 👁️ Password Visibility Toggle

Both password fields include a visibility button.

Users can switch between:

```text
••••••••
```

and

```text
password123
```

This improves usability when entering or checking passwords.

---

## ⚡ Interactive Validation

The form provides immediate feedback through:

* `input` events
* `blur` events
* `change` events
* Submit validation

Invalid fields receive a visual error state, while valid fields receive a success state.

Example:

```text
❌ Please enter a valid email address.
```

or:

```text
✓ Valid
```

---

## 🎯 Technologies Used

| Technology      | Purpose                                        |
| --------------- | ---------------------------------------------- |
| HTML5           | Form structure and semantic markup             |
| CSS3            | Styling, layout, animations and responsiveness |
| JavaScript ES6+ | Validation and interactivity                   |
| Google Sans     | Typography                                     |

No framework or JavaScript library is required.

---

## 📂 Project Structure

```text
Form-Styling-Validation/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the complete registration form structure, including:

* Input fields
* Labels
* Select menu
* Checkbox
* Password toggle buttons
* Submit button
* Error messages
* Success message

### `style.css`

Responsible for:

* Page layout
* Form card
* Input styling
* Focus states
* Validation states
* Password strength meter
* Custom checkbox
* Button animations
* Responsive design
* CSS animations

### `script.js`

Responsible for:

* Form validation
* Password strength calculation
* Password visibility toggle
* Error handling
* Success message
* Form reset
* Interactive field validation

---

## 🧠 JavaScript Concepts Demonstrated

This project uses several important JavaScript concepts:

* DOM Selection
* DOM Manipulation
* Event Listeners
* Functions
* Objects
* Regular Expressions
* Form Handling
* Form Validation
* Conditional Statements
* Arrays
* `classList`
* `setTimeout()`
* `addEventListener()`
* Template Literals
* Immediately Invoked Function Expression (IIFE)
* Strict Mode
* Dynamic CSS manipulation

Example:

```javascript
inputEl.addEventListener('input', function () {
    validateField(fieldName);
});
```

This allows the form to validate a field as the user types.

---

## 🛡️ Validation Architecture

The validation logic is organized using a centralized `rules` object.

```javascript
const rules = {
    name: function (value) {
        // validation logic
    },

    email: function (value) {
        // validation logic
    },

    username: function (value) {
        // validation logic
    }
};
```

This approach makes the validation system:

* Organized
* Reusable
* Easier to maintain
* Easier to extend

---

## 🔎 Regular Expressions

Regular expressions are used to validate specific input formats.

### Username

```javascript
/^[a-zA-Z0-9_]+$/
```

Allows:

```text
john123
john_doe
User2026
```

Does not allow:

```text
john doe
john@123
john-doe
```

### Name

```javascript
/^[a-zA-Z\s'.-]+$/
```

### Phone

```javascript
/^[0-9+\-\s()]{7,20}$/
```

Regular expressions help enforce consistent input formats before the form is submitted.

---

## 🎨 UI States

The form uses different visual states depending on the validation result.

### Default

```text
Normal input
```

### Focus

```text
Blue border + focus shadow
```

### Valid

```text
Green border + light green background
```

### Invalid

```text
Red border + light red background
```

This makes it easier for users to understand the current state of each field.

---

## 📱 Responsive Design

The form is designed to work across:

* 💻 Desktop
* 🖥️ Large screens
* 📱 Tablets
* 📱 Mobile devices

A CSS media query is used for smaller screens:

```css
@media (max-width: 480px) {
    .form-card {
        padding: 1.8rem 1.4rem;
    }
}
```

The layout automatically adjusts the spacing, font sizes, and form dimensions for smaller devices.

---

## 🚀 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/MdAnasAslam/Form-Styling-Validation.git
```

### 2. Open the Project

Navigate into the project directory:

```bash
cd Form-Styling-Validation
```

### 3. Run the Project

Simply open:

```text
index.html
```

in your browser.

You can also use **VS Code Live Server** for development.

---

## 🧪 How to Test

Try submitting the form without entering any information.

The form should display validation messages such as:

```text
Full name is required.
Email address is required.
Username is required.
Password is required.
Please confirm your password.
Please select your country.
You must accept the Terms of Service.
```

Then enter valid information and verify that:

* Fields become valid
* Password strength updates
* Password visibility can be toggled
* Confirm Password matches
* Terms can be selected
* Submit button displays a loading state
* Success message appears after submission

---

## ⚠️ Important Note

This project currently demonstrates **front-end/client-side form validation**.

The form does **not** create a real user account or store registration information in a database.

The successful submission is simulated using JavaScript:

```javascript
setTimeout(function () {
    // Success simulation
}, 1200);
```

For a production application, the form should be connected to a backend API and a secure database.

---

## 🔒 Security Note

Client-side validation improves user experience, but it should **not be considered sufficient security**.

A real application should also perform:

* Server-side validation
* Secure password hashing
* Authentication
* CSRF protection
* Rate limiting
* Input sanitization
* Secure database operations
* HTTPS communication

Never store plain-text passwords in a production application.

---

## 🎯 Learning Objectives

This project was created to practice:

1. Building structured HTML forms
2. Creating modern CSS interfaces
3. Making forms responsive
4. Handling DOM events
5. Creating custom validation rules
6. Working with Regular Expressions
7. Manipulating CSS classes using JavaScript
8. Creating password-strength indicators
9. Implementing interactive UI components
10. Understanding client-side form validation

---

## 🔮 Future Improvements

Possible future enhancements include:

* [ ] Backend API integration
* [ ] Database integration
* [ ] Real user registration
* [ ] Login system
* [ ] Email verification
* [ ] Stronger password validation
* [ ] Password breach checking
* [ ] Username availability checking
* [ ] API-based country selection
* [ ] Dark mode
* [ ] Accessibility improvements
* [ ] Multi-step registration
* [ ] Server-side validation
* [ ] Toast notifications

---

## 📸 Preview

### Registration Form

The interface provides a clean account-creation experience with real-time validation and interactive controls.

> Add a screenshot or GIF of your project here.

Example:

```markdown
![Form Preview](./preview.png)
```

---

## 📌 Project Highlights

> **Responsive Design**
> Works across desktop, tablet and mobile screens.

> **Real-Time Validation**
> Provides feedback while users interact with form fields.

> **Password Strength Detection**
> Dynamically evaluates password complexity.

> **Clean JavaScript Architecture**
> Validation rules are organized inside a reusable rules object.

> **Modern UI**
> Uses gradients, shadows, transitions, custom controls and responsive styling.

---

## 👨‍💻 Author

**Md Anas Aslam**

Diploma in Information Technology
Frontend & Web Development Learner

### Skills

* HTML5
* CSS3
* JavaScript
* C
* C++
* Java
* Python
* Tailwind CSS
* ReactJS
* Git & GitHub

---

## 📄 License

This project is created for **Learning and Educational purposes**.

You are free to study, modify, and use the code for your own learning projects.

---

⭐ **If you found this project useful, consider giving the repository a star!**
