# 🎨 ComponentCraft — Component-Based Styling

A modern, responsive, and component-driven landing page built using **Tailwind CSS**, HTML5, and JavaScript. This project demonstrates how utility-first CSS can be used to create reusable, consistent, and responsive user interfaces.

---

## 🌐 Live Demo

🔗 **Live Website:** [Add Your Live Demo URL Here](https://your-live-demo-url.com)

📂 **GitHub Repository:** [Add Your GitHub Repository URL Here](https://github.com/your-username/your-repository)

---

## 📌 Project Overview

**ComponentCraft** is a modern frontend project designed to demonstrate component-based styling using Tailwind CSS.

The website features a responsive navigation bar, hero section, framework component cards, call-to-action section, and footer. It combines Tailwind CSS utility classes with custom theme configuration to create a consistent visual design.

The project also includes JavaScript-powered mobile navigation, making the website interactive and mobile-friendly.

### 🎯 Objective

* Understand Tailwind CSS utility-first styling.
* Build reusable and consistent UI components.
* Implement responsive layouts using Tailwind CSS breakpoints.
* Customize colors, fonts, and border-radius values.
* Add JavaScript interactivity to a responsive navbar.
* Practice modern frontend development and UI design.

---

## ✨ Features

### 🧭 Responsive Navigation

* Sticky navigation bar.
* Desktop and mobile layouts.
* Collapsible mobile navigation menu.
* Sign in and Get Started buttons.
* Hover and transition effects.

### 🚀 Hero Section

* Component-driven design introduction.
* Responsive two-column layout.
* Gradient background.
* Primary and secondary call-to-action buttons.
* Key project statistics.

### 🧩 Framework Components

The project showcases three UI component categories:

| Component     | Description                               |
| ------------- | ----------------------------------------- |
| Navigation    | Responsive navbar with a collapsible menu |
| Layout System | Grid-based responsive layout              |
| Customizable  | Tailwind theme configuration and styling  |

### 📱 Responsive Design

* Mobile-first design approach.
* Tailwind responsive breakpoints.
* Flexible grid layouts.
* Adaptive spacing and typography.
* Responsive footer and CTA section.

### 🎨 Custom Styling

* Custom `brand` color palette.
* Google Sans typography.
* Custom `4xl` border radius.
* Consistent color and spacing system.
* Tailwind CSS utility classes.

### ⚡ JavaScript Interactivity

* Mobile menu toggle functionality.
* Dynamic `hidden` class switching.
* Event listener-based interaction.

---

## 🛠️ Tech Stack

| Technology        | Purpose                                     |
| ----------------- | ------------------------------------------- |
| HTML5             | Website structure and semantic markup       |
| Tailwind CSS      | Utility-first styling and responsive design |
| JavaScript (ES6+) | Mobile menu interactivity                   |
| Bootstrap Icons   | UI icons                                    |
| Google Fonts      | Google Sans typography                      |

### 📚 External Resources

* [Tailwind CSS](https://tailwindcss.com/)
* [Bootstrap Icons](https://icons.getbootstrap.com/)
* [Google Fonts](https://fonts.google.com/)

---

## 📂 Project Structure

```text
ComponentCraft/
│
├── index.html       # Main HTML structure
├── style.css        # Tailwind CSS directives
├── script.js        # Mobile navigation logic
└── README.md        # Project documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
```

### 2️⃣ Navigate to the Project Directory

```bash
cd ComponentCraft
```

### 3️⃣ Open the Project

Open `index.html` in your browser.

You can use **VS Code with the Live Server extension** for a better development experience.

> **Note:** The HTML file currently uses the Tailwind CSS CDN, so you can preview the page without configuring a local Tailwind build process.

---

## 💻 How It Works

### 1. Tailwind CSS Configuration

The project extends the default Tailwind theme with a custom brand color palette, Google Sans font family, and a custom `4xl` border radius.

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#6f42c1',
          600: '#5a32a3',
          700: '#4a2887'
        }
      }
    }
  }
}
```

### 2. Responsive Navigation

The navigation uses Tailwind responsive utility classes:

```html
<div class="hidden md:flex items-center gap-1">
  <!-- Desktop navigation -->
</div>
```

* `hidden`: Hides the element by default.
* `md:flex`: Displays the element as a flex container on medium screens and above.

### 3. Mobile Menu Toggle

JavaScript controls the mobile navigation visibility by adding or removing the `hidden` class.

```javascript
const btn = document.getElementById('navToggle');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
```

**Working principle:**

1. Select the navigation button.
2. Select the mobile menu.
3. Listen for a button click.
4. Toggle the `hidden` class.
5. Show or hide the mobile navigation.

---

## 📐 Responsive Breakpoints

The project uses Tailwind CSS responsive breakpoints to adapt the layout across devices.

| Breakpoint | Layout Behavior                            |
| ---------- | ------------------------------------------ |
| Default    | Mobile-first single-column layout          |
| `sm`       | Increased spacing and typography           |
| `md`       | Desktop navigation and two-column cards    |
| `lg`       | Two-column hero and three-column card grid |

---

## 🎨 Design System

### Color Palette

| Color     | Hex Code  | Usage                          |
| --------- | --------- | ------------------------------ |
| Brand 50  | `#f8f5ff` | Light backgrounds              |
| Brand 100 | `#ede8ff` | Borders and subtle backgrounds |
| Brand 300 | `#bda6ff` | Light accents                  |
| Brand 500 | `#6f42c1` | Primary brand color            |
| Brand 600 | `#5a32a3` | Hover states                   |
| Brand 700 | `#4a2887` | Darker text accents            |

### Typography

* **Primary Font:** Google Sans
* **Fallback:** Sans-serif
* **Design Style:** Modern, clean, minimal, and component-oriented.

---

## 📱 Responsive Preview

The website is designed to support:

* 📱 Mobile Devices
* 💻 Laptops and Desktops
* 🖥️ Large Screens

The layout uses responsive grids, flexible containers, and Tailwind breakpoints to maintain a consistent user experience.

---

## 🧠 Learning Outcomes

Through this project, I practiced:

* [x] Tailwind CSS utility classes.
* [x] Custom Tailwind theme configuration.
* [x] Responsive grid and flexbox layouts.
* [x] Mobile-first design.
* [x] Navigation menu interactivity with JavaScript.
* [x] Custom colors and typography.
* [x] Component-based UI organization.
* [x] GitHub project documentation.

---

## 🚀 Future Improvements

* [ ] Add functional navigation links.
* [ ] Implement dark mode.
* [ ] Create reusable UI component sections.
* [ ] Add accessibility improvements.
* [ ] Configure Tailwind CSS locally for production.
* [ ] Add animations and improved micro-interactions.
* [ ] Deploy the project using GitHub Pages or Netlify.

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Submit a pull request.

---

## 📄 License

This project is created for learning and educational purposes.

You can add a suitable open-source license if you intend to distribute the project under specific terms.

---

## 👨‍💻 Author

**Md Anas Aslam**

Diploma in Information Technology | Frontend Development Enthusiast

### Skills

HTML5 • CSS3 • JavaScript • Tailwind CSS • Responsive Web Design • ReactJS

---

⭐ If you find this project helpful, consider giving the repository a star!

**Built with ❤️ using HTML, Tailwind CSS, and JavaScript.**
