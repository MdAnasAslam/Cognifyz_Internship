# Task 4 | Interactive Button with JavaScript

A simple interactive webpage built using **HTML5, CSS3, and JavaScript**. When the user clicks the button, JavaScript generates a random RGB color and dynamically changes the background color of the page.

This project is part of the **Cognifyz Internship** tasks.

## 📌 Project Overview

The main objective of this task is to demonstrate basic **JavaScript DOM manipulation and event handling**.

The webpage contains a single interactive button:

> **Click Here to Change**

Whenever the button is clicked, JavaScript generates three random values between `0` and `255` and uses them to create an RGB color. The generated color is then applied to the main container as its background color.

## ✨ Features

* Interactive button using JavaScript.
* Random RGB color generation.
* Dynamic background color change.
* JavaScript DOM selection using `querySelector()`.
* Click event handling using `addEventListener()`.
* CSS hover effect on the button.
* Smooth background color transition.
* Responsive and centered layout.
* Google Sans typography.

## 🛠️ Technologies Used

| Technology  | Purpose                                         |
| ----------- | ----------------------------------------------- |
| HTML5       | Creates the webpage structure                   |
| CSS3        | Styling, layout, hover effects, and transitions |
| JavaScript  | Handles interaction and random color generation |
| Google Sans | Website typography                              |

## 📂 Project Structure

```text
Task-4/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🧩 How It Works

### 1. HTML

The HTML contains a main container and a button:

```html
<div id="main">
    <button>Click Here to Change</button>
</div>
```

The JavaScript file is connected at the end of the `<body>`:

```html
<script src="script.js"></script>
```

### 2. JavaScript Button Selection

The button is selected using `querySelector()`:

```javascript
let button = document.querySelector("button");
```

The main container is also selected:

```javascript
let main = document.querySelector("#main");
```

### 3. Click Event

An event listener waits for the user to click the button:

```javascript
button.addEventListener("click", function() {
    // Code runs when button is clicked
});
```

### 4. Random RGB Values

Three random numbers are generated:

```javascript
let r1 = Math.floor(Math.random() * 256);
let r2 = Math.floor(Math.random() * 256);
let r3 = Math.floor(Math.random() * 256);
```

Each value can range from:

```text
0 → 255
```

These values represent:

* `r1` → Red
* `r2` → Green
* `r3` → Blue

### 5. Dynamic Background Color

The generated values are inserted into an RGB color using a template literal:

```javascript
main.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;
```

For example, JavaScript might generate:

```text
rgb(45, 180, 92)
```

The background will then change to that color.

## 🔄 Program Flow

```text
User clicks the button
        ↓
Click event is triggered
        ↓
Generate random Red value
        ↓
Generate random Green value
        ↓
Generate random Blue value
        ↓
Create RGB color
        ↓
Apply color to #main
        ↓
Background changes
```

## 🎨 CSS Features

The project uses CSS for:

* Flexbox centering
* Button styling
* Rounded corners
* Box shadows
* Hover effects
* Smooth transitions
* Custom typography
* Full viewport layout

The button uses:

```css
cursor: pointer;
```

to indicate that it is interactive.

A transition is also applied:

```css
transition: all 0.25s cubic-bezier(0.2, 0, 0, 1);
```

This makes the button interaction smoother.

## 🚀 How to Run the Project

### Method 1 — Direct Browser

1. Download or clone the project.
2. Open the project folder.
3. Make sure these files are present:

   * `index.html`
   * `style.css`
   * `script.js`
4. Open `index.html` in your browser.
5. Click the button.

### Method 2 — VS Code

1. Open the project in **Visual Studio Code**.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Click the button and observe the background color changing.

## 🧠 JavaScript Concepts Demonstrated

This project demonstrates the following JavaScript concepts:

* Variables with `let`
* `document.querySelector()`
* DOM manipulation
* `addEventListener()`
* `click` events
* Anonymous functions
* `Math.random()`
* `Math.floor()`
* Template literals
* RGB color representation
* Inline style manipulation

## 📚 Learning Outcomes

Through this task, I learned how to:

* Connect JavaScript with an HTML webpage.
* Select HTML elements using the DOM.
* Handle user interactions with event listeners.
* Generate random values using JavaScript.
* Dynamically modify CSS properties using JavaScript.
* Use template literals to construct dynamic strings.
* Create simple interactive web experiences.

## 👨‍💻 Author

**Md Anas Aslam**

* GitHub: [MdAnasAslam](https://github.com/MdAnasAslam)
* Project: Cognifyz Internship — Task 4

## 📄 License

This project is created for **educational and internship purposes**.

---

⭐ **Cognifyz Internship — Task 4**

A simple project demonstrating how **JavaScript can make a static webpage interactive.**
