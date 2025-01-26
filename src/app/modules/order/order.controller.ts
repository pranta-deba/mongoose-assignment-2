import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { z } from "zod";
import orderValidationSchema from "./order.zod.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const validatedData = orderValidationSchema.parse(orderData);
    const result = await OrderServices.createOrderIntoDB(orderData);
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

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    console.log(email);
    if (email) {
      const result = await OrderServices.getAllOrderByEmailIntoDB(email);
      res.status(200).json({
        success: true,
        message: `Orders fetched successfully for user ${email}!`,
        data: result,
      });
    } else {
      const result = await OrderServices.getAllOrderIntoDB();
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong!",
      error: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrder,
};
