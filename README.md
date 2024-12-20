# E-Commerce Backend (MongoDB, Node.js, Express)

Welcome to the **E-Commerce Backend** repository! This project is a robust backend for an e-commerce application built with **MongoDB**, **Node.js**, and **Express**. It includes essential features like product management, user authentication, and order processing, providing the foundation for a fully functioning e-commerce platform.

## 📌 Key Features:
- **User Authentication**: Secure login and registration system using JWT tokens.
- **Product Management**: Admins can add, update, and delete products.
- **Cart Functionality**: Users can add, update, and remove items from their cart.
- **Order Management**: Users can place orders and track order status.
- **Database**: Utilizes **MongoDB** for flexible and scalable data storage.

## 🛠 Technologies Used:
- **MongoDB**: NoSQL database for storing user and product information.
- **Node.js**: JavaScript runtime for building the backend server.
- **Express**: Web framework for building RESTful APIs.
- **JWT (JSON Web Tokens)**: For user authentication and session management.
- **Bcrypt**: For securely hashing user passwords.

## 🏗 Project Structure:
- **/models**: Contains Mongoose models for **User**, **Product**, and **Order**.
- **/routes**: Defines the API routes for **user authentication**, **products**, **cart**, and **orders**.
- **/controllers**: Contains the logic for handling the API requests (e.g., adding a product, placing an order).
- **/config**: Configuration files for MongoDB connection and authentication middleware.
- **/middleware**: Contains custom middleware, such as the authentication check for protected routes.

## 🚀 How to Get Started:
**Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/e-commerce-backend.git
   cd e-commerce-backend
   npm install
   npm start

