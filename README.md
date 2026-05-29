# 🛒 Smart Grocery List & Inventory Manager

An AI-powered **Smart Grocery List & Inventory Management System** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** that helps users manage grocery inventory, monitor stock levels, generate shopping lists automatically, and track product expiry.

---

## 📌 Project Overview

Managing grocery inventory manually often leads to:

* ❌ Food wastage
* ❌ Forgotten grocery items
* ❌ Overstocking
* ❌ Low stock issues
* ❌ Difficulty in tracking expiry dates

This project solves these challenges by providing a **smart inventory system** that helps users track groceries efficiently.

The application allows users to:

✅ Add grocery items
✅ Update stock quantity
✅ Track low stock items
✅ Auto-generate shopping lists
✅ Monitor expiry dates
✅ Analyze grocery categories using charts
✅ Manage inventory through an interactive dashboard

---

# 🚀 Features

### 🔐 Authentication System

* User Registration
* User Login
* Secure Authentication
* Logout Functionality

### 📦 Grocery Inventory Management

* Add Grocery Items
* Edit Grocery Quantity
* Delete Grocery Items
* View Inventory

### ⚠️ Smart Alerts

* Low Stock Detection
* Expiry Date Alerts
* Automatic Shopping List Generation

### 📊 Analytics Dashboard

* Grocery Category Pie Chart
* Stock Quantity Bar Chart
* Inventory Insights

### 🎨 Premium UI

* Responsive Design
* Professional Dashboard
* Modern Grocery Cards
* Premium Styling using Tailwind CSS

---

# 🏗️ Project Architecture

```plaintext
User
   ↓
Frontend (React.js + Tailwind CSS)
   ↓
REST API Calls (Axios)
   ↓
Backend (Node.js + Express.js)
   ↓
MongoDB Atlas Database
```

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Axios
* React Icons
* Recharts

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt.js
* dotenv

## Database

* MongoDB Atlas

---

# 📂 Folder Structure

```plaintext
Smart-Grocery-Inventory-Manager/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── components/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── README.md
├── .gitignore
└── .env.example
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/Smart-Grocery-Inventory-Manager.git
```

---

## 2️⃣ Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

## 3️⃣ Configure Environment Variables

Create `.env` file inside **server** folder:

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

PORT=5000
```

---

## 4️⃣ Run Backend

```bash
cd server
npm run dev
```

---

## 5️⃣ Run Frontend

```bash
cd client
npm run dev
```

---

# 🌐 Localhost URLs

### Frontend

```plaintext
http://localhost:5173
```

### Backend

```plaintext
http://localhost:5000
```

---

# 📡 API Endpoints

## Authentication APIs

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Grocery APIs

### Add Grocery Item

```http
POST /api/grocery/add
```

### Get All Grocery Items

```http
GET /api/grocery/all
```

### Update Grocery Item

```http
PUT /api/grocery/update/:id
```

### Delete Grocery Item

```http
DELETE /api/grocery/delete/:id
```

### Low Stock Items

```http
GET /api/grocery/low-stock
```

### Expiry Alerts

```http
GET /api/grocery/expiry-alerts
```

---

# 📸 Screenshots

Add screenshots here:

* Login Page
* Register Page
* Dashboard
* Inventory Page
* Add Grocery Item
* Shopping List
* Low Stock Alerts
* Expiry Alerts
* Analytics Dashboard
* MongoDB Atlas Database

---

# 🎯 Learning Outcomes

Through this project, I learned:

* Full Stack Development using MERN
* REST API Development
* MongoDB Atlas Integration
* JWT Authentication
* CRUD Operations
* Inventory Management Logic
* React State Management
* Professional UI Design using Tailwind CSS
* Analytics Visualization using Recharts
* GitHub Project Deployment

---

# 💼 Industry Relevance

This project is useful for:

🏠 Families
🏫 Hostel Students
🍽️ Cloud Kitchens
🛒 Grocery Stores
☕ Cafés
📦 Inventory Management Systems

It helps reduce:

✅ Food Waste
✅ Stock Shortage
✅ Overspending

---

# 👨‍💻 Developed By

**Kishor Kumar**

Made with ❤️ using MERN Stack

---

## ⭐ If you liked this project, give it a star on GitHub!
