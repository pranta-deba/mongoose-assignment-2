import { TProduct } from "./product.interface";  // Importing the interface for product data
import { Product } from "./product.model";       // Importing the Mongoose model for Product

// Function to create a new product in the database
const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);  // Using the Mongoose create method to insert a new product
  return result;  // Returning the created product document
};

// Function to retrieve all products from the database
const getAllProductIntoDB = async () => {
  const result = await Product.find();  // Using the Mongoose find method to retrieve all products
  return result;  // Returning an array of all product documents
};

// Function to retrieve a single product by its ID from the database
const getSingleProductIntoDB = async (id: string) => {
  const result = await Product.findOne({ _id: id });  // Using the Mongoose findOne method to find a product by its ID
  return result;  // Returning the found product document or null if not found
};

// Function to update a single product by its ID in the database
const updateSingleProductIntoDB = async (
  productId: string,
  productData: TProduct
) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      productData,
      { new: true }  // Using Mongoose findByIdAndUpdate to update a product by its ID and return the updated document
    );
    if (!updatedProduct) {
      throw new Error("Product not found.");  // Throw an error if product with given ID is not found
    }
    return updatedProduct;  // Returning the updated product document
  } catch (error) {
    throw error;  // Throw any caught error
  }
};

// Function to delete a single product by its ID from the database
const deleteSingleProductIntoDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });  // Using the Mongoose deleteOne method to delete a product by its ID
  return result;  // Returning the deletion result
};

// Function to search products by name or tags using a case-insensitive regex
const searchProductsIntoDB = async (searchTerm: string) => {
  try {
    const regex = new RegExp(searchTerm, "i");  // Creating a case-insensitive regex pattern
    const results = await Product.find({
      $or: [
        { name: { $regex: regex } },  // Searching by product name
        { tags: { $in: [regex] } }    // Searching by product tags
      ],
    }).exec();  // Using Mongoose find method with regex and $or operator

    return results;  // Returning an array of matching product documents
  } catch (error: any) {
    throw new Error(`Error searching products: ${error.message}`);  // Throw an error if search fails
  }
};

// Exporting all product-related services
export const ProductServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductIntoDB,
  updateSingleProductIntoDB,
  deleteSingleProductIntoDB,
  searchProductsIntoDB,
};

