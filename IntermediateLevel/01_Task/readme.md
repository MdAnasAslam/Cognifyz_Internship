# Task 3 | Responsive Design with Media Queries

A modern, responsive webpage built using **HTML5 and External CSS**, demonstrating how media queries adapt layouts, typography, spacing, and components across different screen sizes.

This project is part of the **Cognifyz Internship** tasks.

## 📌 Project Overview

The Responsive Design project demonstrates how to create a user-friendly website that works smoothly on mobile phones, tablets, and desktop screens.

The webpage includes a responsive navigation header, hero section, feature cards, image gallery, and an informational section. CSS media queries are used to adjust the layout based on the viewport width.

## ✨ Features

* **Responsive Navigation:** Header layout adapts to different screen sizes.
* **Responsive Hero Section:** Font sizes, spacing, and buttons adjust across devices.
* **Fluid Grid Layout:** Feature cards change from one column to three columns.
* **Responsive Image Gallery:** Gallery reflows based on screen width.
* **Flexible Images:** Images scale within their containers using `max-width: 100%`.
* **Media Queries:** Multiple breakpoints for phones, tablets, and desktops.
* **Smooth Scrolling:** Navigation links scroll smoothly to page sections.
* **Hover Effects:** Interactive buttons, cards, and navigation links.
* **Accessibility:** Semantic HTML elements and descriptive image alt text.
* **Reduced Motion Support:** Respects the user's `prefers-reduced-motion` setting.

## 🛠️ Technologies Used

| Technology        | Purpose                         |
| ----------------- | ------------------------------- |
| HTML5             | Webpage structure               |
| CSS3              | Styling and responsive design   |
| CSS Media Queries | Adapting layout to screen sizes |
| Google Sans       | Typography                      |
| Remix Icon        | Feature icons                   |
| Picsum Photos     | Gallery images                  |

## 📂 Project Structure

```text
Task-3/
│
├── index.html
├── style.css
└── README.md
```

## 📱 Responsive Breakpoints

The project uses CSS media queries to adapt the layout:

| Screen Size      | Layout                                          |
| ---------------- | ----------------------------------------------- |
| Up to 480px      | Mobile-friendly single-column layout            |
| 481px and above  | Two-column grid and horizontal header           |
| 769px and above  | Three-column grids and two-column About section |
| 1024px and above | Larger typography and spacing                   |
| 1280px and above | Extra-large heading and subtitle                |

### Responsive Grid Behavior

* **Mobile:** Feature cards and gallery display in one column.
* **Tablet:** Feature cards and gallery display in two columns.
* **Desktop:** Feature cards and gallery display in three columns.

## 🎨 Main Sections

### 1. Header

Contains the ResponsiveDemo logo and navigation links:

* Features
* Showcase
* About

### 2. Hero Section

Introduces the responsive design concept with:

* Main heading
* Description
* Call-to-action buttons

### 3. Features Section

Highlights three responsive design concepts:

* Fluid Layout
* Scalable Type
* Flexible Media

### 4. Showcase Section

Displays a responsive image gallery that changes its column layout based on the viewport width.

### 5. About Section

Explains the importance of responsive design and demonstrates the different breakpoints used in the project.

### 6. Footer

Includes project information, a responsive design reminder, and the developer's GitHub profile.

## 📐 CSS Concepts Demonstrated

* CSS Grid
* Flexbox
* Media Queries
* `clamp()` concept in responsive typography
* `max-width: 100%`
* `aspect-ratio`
* CSS Transitions
* Hover and Focus States
* `prefers-reduced-motion`
* Responsive Padding and Font Sizes

## 🚀 How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/MdAnasAslam/Cognifyz_Internship.git
   ```

2. Open the project folder.

3. Ensure `index.html` and `style.css` are in the correct location.

4. Open `index.html` in your browser.

5. Resize the browser window to observe the responsive behavior.

### Using VS Code

You can use the **Live Server extension** in Visual Studio Code to launch the webpage and test responsiveness in real time.

## 🔍 Learning Outcomes

Through this task, I learned:

* How to create responsive websites using CSS media queries.
* How to use CSS Grid and Flexbox for adaptive layouts.
* How to adjust typography and spacing for different screen sizes.
* How to create responsive image galleries.
* How to improve website usability across devices.
* How to structure HTML and CSS in separate files.

## 👨‍💻 Author

**Md Anas Aslam**

* GitHub: [MdAnasAslam](https://github.com/MdAnasAslam)
* Project: Cognifyz Internship — Task 3

## 📄 License

This project is created for educational and internship purposes.

---

⭐ If you find this project helpful, feel free to explore the repository and learn from the implementation.
