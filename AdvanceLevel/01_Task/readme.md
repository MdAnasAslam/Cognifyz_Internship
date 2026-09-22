
# 🌐 API User Profile Card

A responsive and interactive **User Profile Card** built using HTML5, CSS3, and JavaScript. This project integrates the JSONPlaceholder REST API to fetch and display dynamic user information.

The application displays one user at a time and allows users to refresh the card to view a different randomly selected profile.

---

## 🚀 Live Demo

🔗 **Live Website:** [Add Your Live Demo Link Here]

🔗 **GitHub Repository:** [Add Your GitHub Repository Link Here]

---

## 📌 Project Overview

This project demonstrates how to integrate an external API into a frontend website using JavaScript's `fetch()` method.

User data is retrieved from the JSONPlaceholder API and dynamically displayed inside a beautifully designed profile card.

The application includes:

- Dynamic API data fetching
- Random user selection
- Interactive refresh button
- Loading state with animated spinner
- Error handling and retry functionality
- Responsive design for mobile devices

---

## ✨ Features

### 1. 🔄 API Integration

Fetches user information from the JSONPlaceholder API.

**API Endpoint:**

```text
https://jsonplaceholder.typicode.com/users
```

The API provides sample user data, including:

- Name
- Username
- Email
- Phone
- Website
- Company
- Address

---

### 2. 🎲 Random User Display

Displays one randomly selected user from the API response.

When the user clicks the **Refresh** button, another user is selected and displayed.

The application attempts to prevent showing the same user consecutively.

---

### 3. ⚡ Dynamic DOM Rendering

JavaScript dynamically updates the HTML content using:

- `innerHTML`
- Template literals
- DOM element selection
- Event listeners

User details are displayed without manually writing individual profile cards in HTML.

---

### 4. ⏳ Loading State

A loading screen is displayed while the API request is being processed.

Features:

- Animated loading spinner
- Loading message
- Clean user experience

---

### 5. ❌ Error Handling

The application handles API-related errors using:

- HTTP response validation
- Invalid API response detection
- Empty user data handling
- Retry button
- Console error logging

---

### 6. 📱 Responsive Design

The website is responsive and adapts to different screen sizes.

The design includes a mobile breakpoint at:

```css
@media (max-width: 480px)
```

Responsive adjustments include:

- Card padding
- Avatar size
- Font size
- Footer layout
- Button alignment

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| JavaScript (ES6+) | API integration and DOM manipulation |
| Fetch API | Retrieving external API data |
| JSONPlaceholder | Sample REST API |
| Google Sans | Typography |
| Git & GitHub | Version control and project hosting |

---

## 📂 Project Structure

```text
API-User-Profile-Card/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### 📄 File Description

**index.html**

Contains the basic HTML structure of the application and the profile card container.

**style.css**

Contains the visual styling, animations, card layout, and responsive design.

**script.js**

Handles API requests, user selection, dynamic DOM rendering, loading states, and error handling.

**README.md**

Provides project documentation and setup instructions.

---

## 🔌 API Integration Workflow

The application follows these steps:

```text
1. Open the Website
       ↓
2. Call the JSONPlaceholder API
       ↓
3. Fetch User Data
       ↓
4. Parse JSON Response
       ↓
5. Select a Random User
       ↓
6. Display User Profile
       ↓
7. Click Refresh
       ↓
8. Display Another User
```

---

## 💻 How to Run the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
```

### Step 2: Navigate to the Project Folder

```bash
cd API-User-Profile-Card
```

### Step 3: Open the Project

Open `index.html` in your browser.

You can also use the **Live Server extension in VS Code** for development.

---

## 📡 JavaScript API Example

The project uses the Fetch API to retrieve user data:

```javascript
fetch(API_URL)
    .then(function (response) {
        if (!response.ok) {
            throw new Error('HTTP ' + response.status);
        }

        return response.json();
    })
    .then(function (users) {
        console.log(users);
    })
    .catch(function (error) {
        console.error('Fetch error:', error);
    });
```

This code retrieves the API response, converts it into JSON, and handles potential errors.

---

## 🎨 Design Highlights

- Modern glassmorphism-inspired card
- Blue gradient background
- Rounded card corners
- Soft shadows
- Animated loading spinner
- Interactive hover effects
- Mobile-friendly layout
- Clean and minimal user interface

---

## 📚 Learning Objectives

Through this project, I practiced:

- Understanding REST APIs
- Using JavaScript `fetch()`
- Handling Promises
- Working with JSON data
- Dynamic DOM manipulation
- Event handling
- Error handling
- Responsive CSS design
- JavaScript caching concepts

---

## 🔮 Future Improvements

The following features can be added in future versions:

- [ ] Search users by name
- [ ] Previous and Next navigation
- [ ] Display multiple user cards
- [ ] Add dark mode
- [ ] Add skeleton loading animation
- [ ] Add pagination
- [ ] Improve accessibility
- [ ] Add API request cancellation using AbortController

---

## 👨‍💻 Author

**Md Anas Aslam**

Diploma in Information Technology

Interested in Web Development, JavaScript, Data Science, and Artificial Intelligence.

---

## 📄 License

This project is created for educational and internship learning purposes.

The user data is provided by [JSONPlaceholder](https://jsonplaceholder.typicode.com/).