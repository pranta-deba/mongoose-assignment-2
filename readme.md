# 🛒 E-Commerce Product and Order API  

This project is an e-commerce backend API built with Node.js, Express, and MongoDB. It supports CRUD operations for managing products and orders, with features like search functionality and order retrieval by email.

---

## 🌐 Live Demo  
Access the live site here: [Live Demo](https://assignment-2-pi-pink.vercel.app/)

---

## 📑 Table of Contents  
- [About the Project](#about-the-project)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [API Endpoints](#api-endpoints)  
- [CRUD Operations](#crud-operations)  
- [Testing](#testing)  
- [Deployment](#deployment)  
- [License](#license)  
- [Contributing](#contributing)  
- [Author](#author)  

---

## 🛠️ About the Project  
This project provides an API for managing products and orders for an e-commerce platform. It supports creating, reading, updating, and deleting products and orders, with additional search functionalities.

---

## 🔥 Features  
- CRUD operations for products and orders.  
- Search functionality for products and orders.  
- Validation with Zod for improved error handling.  
- Built with TypeScript for type safety.  

---

## 🛠️ Technologies Used  
- **Node.js**  
- **Express.js**  
- **MongoDB**  
- **TypeScript**  
- **Zod**  
- **Cors**  
- **dotenv**  

---

## 🛠️ CRUD Operations

## 🚀 Product API Routes

### **1. Add a New Product**
- **POST** `/products`
- **Description**: Adds a new product to the database.
- **How to hit**: Send a POST request with product data in the request body.
  
### **2. Get All Products**
- **GET** `/products`
- **Description**: Retrieves a list of all products in the system.
- **How to hit**: Send a GET request to retrieve all product data.

### **3. Search Products**
- **GET** `/products/searching`
- **Description**: Searches for products based on a search term.
- **How to hit**: Pass the search term as a query parameter.  
  Example:  
  `http://localhost:5000/products/searching?searchTerm=mouse`

### **4. Get a Single Product by ID**
- **GET** `/products/:productId`
- **Description**: Retrieves the details of a single product using its unique product ID.
- **How to hit**: Replace `:productId` with the actual product ID in the URL.  
  Example:  
  `http://localhost:5000/products/67960536c426c8cd20e3056f`

### **5. Update a Product by ID**
- **PUT** `/products/:productId`
- **Description**: Updates the details of an existing product by its ID.
- **How to hit**: Replace `:productId` with the product ID and send the updated product data in the request body.  
  Example:  
  `http://localhost:5000/products/67960536c426c8cd20e3056f`

### **6. Delete a Product by ID**
- **DELETE** `/products/:productId`
- **Description**: Deletes a product from the system using its ID.
- **How to hit**: Replace `:productId` with the product ID to be deleted.  
  Example:  
  `http://localhost:5000/products/67960536c426c8cd20e3056f`

---

## 🛒 Order API Routes

### **1. Place an Order**
- **POST** `/orders`
- **Description**: Places a new order.
- **How to hit**: Send a POST request with order details in the request body.

### **2. Get All Orders**
- **GET** `/orders`
- **Description**: Retrieves all orders in the system.
- **How to hit**: Send a GET request to fetch all orders.

### **3. Get Orders by Email**
- **GET** `/orders/email/:email`
- **Description**: Retrieves orders placed by a specific email address.
- **How to hit**: Replace `:email` with the customer's email address.  
  Example:  
  `http://localhost:5000/orders/email/pranta@gmail.com`

---
