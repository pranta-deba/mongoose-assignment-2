import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.zod.validation";
import { z } from "zod";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const validatedData = productValidationSchema.parse(productData);
    const result = await ProductServices.createProductIntoDB(productData);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    } else {
      res.status(500).json({
        success: false,
        message: error.message || "Something went wrong!",
        error: error,
      });
    }
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductIntoDB();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong!",
      error: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProduct,
};
