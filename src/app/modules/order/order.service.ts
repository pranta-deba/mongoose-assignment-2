import { Product } from "../product/product.model"; // Importing the Product model to interact with products in database
import { TOrder } from "./order.interface"; // Importing the Order interface for type safety
import { Order } from "./order.model"; // Importing the Order model for interacting with orders in database

// Service function to create a new order in the database
const createOrderIntoDB = async (orderData: TOrder) => {
  try {
    const product = await Product.findById(orderData.productId); // Finding the product by productId in the database
    if (!product) {
      throw new Error("Product not found"); // Throw error if product is not found
    }
    if (orderData.quantity > product.inventory.quantity) {
      throw new Error("InsufficientQuantityError"); // Throw error if ordered quantity exceeds available quantity in inventory
    }

    // Update inventory quantity and inStock status based on ordered quantity
    product.inventory.quantity -= orderData.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save(); // Save updated product inventory in database

    const result = await Order.create(orderData); // Create the order in the database
    return result;
  } catch (error: any) {
    throw error; // Throw any caught errors for handling in the controller
  }
};

// Service function to get all orders from the database
const getAllOrderIntoDB = async () => {
  const result = await Order.find(); // Find all orders in the database
  return result;
};

// Service function to get all orders by email from the database
const getAllOrderByEmailIntoDB = async (email: string) => {
  const result = await Order.find({ email }); // Find orders by email in the database
  return result;
};

// Exporting OrderServices with defined service functions
export const OrderServices = {
  createOrderIntoDB,
  getAllOrderIntoDB,
  getAllOrderByEmailIntoDB,
};
