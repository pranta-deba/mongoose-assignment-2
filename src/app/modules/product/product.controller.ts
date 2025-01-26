import { Request, Response } from "express";
import { ProductServices } from "./product.service"; // Importing ProductServices from product.service
import productValidationSchema from "./product.zod.validation"; // Importing product validation schema
import { z } from "zod"; // Importing zod for validation

// Controller function to create a new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body; // Extract product data from request body
    const validatedData = productValidationSchema.parse(productData); // Validate product data using Zod schema
    const result = await ProductServices.createProductIntoDB(productData); // Call service method to create product
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error: any) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    } else {
      // Handle other errors
      res.status(500).json({
        success: false,
        message: error.message || "Something went wrong!",
        error: error,
      });
    }
  }
};

// Controller function to fetch all products
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductIntoDB(); // Call service method to fetch all products
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong!",
      error: error,
    });
  }
};

// Controller function to fetch a single product by productId
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params; // Extract productId from request parameters
    const result = await ProductServices.getSingleProductIntoDB(productId); // Call service method to fetch single product
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong!",
      error: error,
    });
  }
};

// Controller function to update a single product by productId
const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params; // Extract productId from request parameters
    const updatedData = req.body; // Extract updated data from request body
    const result = await ProductServices.updateSingleProductIntoDB(
      productId,
      updatedData
    ); // Call service method to update product
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error: any) {
    // Handle specific error (e.g., product not found)
    let statusCode = 500;
    if (error.message === "Product not found.") {
      statusCode = 404;
    }
    res.status(statusCode).json({
      success: false,
      message: error.message || "Something went wrong!",
      error: error,
    });
  }
};

// Controller function to delete a single product by productId
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params; // Extract productId from request parameters
    const result = await ProductServices.deleteSingleProductIntoDB(productId); // Call service method to delete product
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (error: any) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong!",
      error: error,
    });
  }
};

// Controller function to search for products by searchTerm
const searchSpecificProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string; // Extract searchTerm from query parameters
    if (!searchTerm) {
      throw new Error("Search term is required");
    }
    const result = await ProductServices.searchProductsIntoDB(searchTerm); // Call service method to search products
    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (error: any) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong!",
      error: error,
    });
  }
};

// Exporting all product controllers as an object
export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
  searchSpecificProducts,
};
