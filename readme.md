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

### **Product Routes**

#### 1. **Get Single Product**
- **GET** `/api/products/:id`  
- **Description**: Fetches the details of a single product by its unique product ID.
- **How to hit**: Replace `:id` with the actual product ID in the URL.  
  Example:  
  `http://localhost:5000/api/products/67960536c426c8cd20e3056f`

#### 2. **Search Products**
- **GET** `/api/products/searching?searchTerm=<searchTerm>`  
- **Description**: Allows you to search for products based on a search term (e.g., name or description).
- **How to hit**: Pass the `searchTerm` as a query parameter.  
  Example:  
  `http://localhost:5000/api/products/searching?searchTerm=mouse`

#### 3. **Update Product**
- **PUT** `/api/products/:id`  
- **Description**: Updates the details of a specific product using its unique product ID.
- **How to hit**: Replace `:id` with the product ID in the URL and provide the updated data in the request body.  
  Example:  
  `http://localhost:5000/api/products/67960536c426c8cd20e3056f`

#### 4. **Delete Product**
- **DELETE** `/api/products/:id`  
- **Description**: Deletes a specific product from the database using its product ID.
- **How to hit**: Replace `:id` with the product ID in the URL.  
  Example:  
  `http://localhost:5000/api/products/67960536c426c8cd20e3056f`

#### 5. **Create Product**
- **POST** `/api/products`  
- **Description**: Creates a new product in the database.
- **How to hit**: Send a POST request with the product data in the request body.  
  Example:  
  `http://localhost:5000/api/products`

---

### **Order Routes**

#### 1. **Create Order**
- **POST** `/api/orders`  
- **Description**: Creates a new order with product and customer details.
- **How to hit**: Send a POST request with the order data in the request body.  
  Example:  
  `http://localhost:5000/api/orders`

#### 2. **Get All Orders**
- **GET** `/api/orders`  
- **Description**: Retrieves all orders from the system.
- **How to hit**: Simply hit the GET request to fetch all orders.  
  Example:  
  `http://localhost:5000/api/orders`

#### 3. **Search Orders by Email**
- **GET** `/api/orders?email=<email>`  
- **Description**: Retrieves orders associated with a specific email address.
- **How to hit**: Pass the `email` as a query parameter.  
  Example:  
  `http://localhost:5000/api/orders?email=pranta@gmail.com`

---