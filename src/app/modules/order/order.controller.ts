import { Request, Response } from "express";
import { OrderServices } from "./order.service"; // Importing the Order Services
import { z } from "zod"; // Importing Zod for validation
import orderValidationSchema from "./order.zod.validation"; // Importing the validation schema for orders

// Controller function to create a new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body; // Extracting order data from request body
    const validatedData = orderValidationSchema.parse(orderData); // Validating order data using Zod schema
    const result = await OrderServices.createOrderIntoDB(orderData); // Calling service to create order in database
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    } else if (error.message === "InsufficientQuantityError") {
      res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    } else {
      // Other errors
      res.status(500).json({
        success: false,
        message: error.message || "Something went wrong!",
        error: error,
      });
    }
  }
};

// Controller function to get all orders
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string; // Extracting email from query parameters
    if (email) {
      const result = await OrderServices.getAllOrderByEmailIntoDB(email); // Fetching orders by email
      res.status(200).json({
        success: true,
        message: `Orders fetched successfully for user ${email}!`,
        data: result,
      });
    } else {
      const result = await OrderServices.getAllOrderIntoDB(); // Fetching all orders
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (error: any) {
    // Error handling for any caught errors
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong!",
      error: error,
    });
  }
};

// Exporting order controllers
export const OrderControllers = {
  createOrder,
  getAllOrder,
};
