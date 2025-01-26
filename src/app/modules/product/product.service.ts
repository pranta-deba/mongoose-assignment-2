import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductIntoDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductIntoDB = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

const updateSingleProductIntoDB = async (
  productId: string,
  productData: TProduct
) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      productData,
      { new: true }
    );
    if (!updatedProduct) {
      throw new Error("Product not found.");
    }
    return updatedProduct;
  } catch (error) {
    throw error;
  }
};

const deleteSingleProductIntoDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

const searchProductsIntoDB = async (searchTerm: string) => {
  try {
    const regex = new RegExp(searchTerm, "i");
    const results = await Product.find({
      $or: [{ name: { $regex: regex } }, { tags: { $in: [regex] } }],
    }).exec();

    return results;
  } catch (error: any) {
    throw new Error(`Error searching products: ${error.message}`);
  }
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductIntoDB,
  updateSingleProductIntoDB,
  deleteSingleProductIntoDB,
  searchProductsIntoDB,
};
