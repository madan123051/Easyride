# Easyride (Yatri) 🚗 

**Nepal's #1 Ride & Delivery App** — Modern single-page application built with vanilla HTML, CSS, and JavaScript.

## 📁 Project Structure

```
Easyride/
├── index.html                # App shell (~150 lines)
├── css/styles.css            # Custom styles (~70 lines)
├── pages/                    # HTML page injectors
│   └── (auth, main, branch, profile pages)
└── js/                       # Feature logic
    ├── data.js               # Static data (branches, fares, profile)
    ├── nav.js                # Navigation & state
    ├── auth.js               # Login, Signup, OTP
    ├── home.js               # Service picker
    ├── booking.js            # Vehicle, booking, rating
    ├── delivery.js           # Package delivery
    ├── branches.js           # Branch management
    ├── sidebar.js            # Menu & logout
    └── profile.js ⭐NEW      # User profile feature
```

## ✨ Features

### 🆕 NEW: User Profile
- **Dashboard** – View stats, loyalty points, level
- **Edit Profile** – Update personal info
- **Ride History** – Track all trips with filters
- **Wallet** – Balance, top-up, transactions
- **Settings** – Notifications, 2FA, language
- **Security** – Change password, account management

### Existing Features
- 🎨 Splash screen & language selection
- 🔐 Login, Signup, OTP verification
- 🏢 75+ branches across Nepal
- 🚗 Ride booking (Bike, Go, Premium, Auto)
- 📦 Delivery service
- ⭐ Ratings & feedback

## 🚀 Quick Start

```bash
git clone https://github.com/madan123051/Easyride.git
cd Easyride
python3 -m http.server 8000
# Open http://localhost:8000
```

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (TailwindCSS CDN), ES6+ JavaScript
- **Icons:** FontAwesome 6.5.1
- **State:** In-memory variables
- **Animations:** CSS transitions

## 📱 Design

- Mobile-first responsive design
- Gradient red-amber theme
- 90px bottom navigation
- Full-screen page overlay transitions
- Accessibility-friendly components

## 🔐 Security

⚠️ **Demo App** – Mock authentication, no backend.
For production: implement proper auth, API encryption, validation.

---

Made with ❤️ for Nepal 🇳🇵
