import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (orderData: TOrder) => {
  try {
    const product = await Product.findById(orderData.productId);
    if (!product) {
      throw new Error("Product not found");
    }
    if (orderData.quantity > product.inventory.quantity) {
      throw new Error("InsufficientQuantityError");
    }
    product.inventory.quantity -= orderData.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save();

    const result = await Order.create(orderData);
    return result;
  } catch (error: any) {
    throw error;
  }
};

const getAllOrderIntoDB = async () => {
  const result = await Order.find();
  return result;
};

const getAllOrderByEmailIntoDB = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrderIntoDB,
  getAllOrderByEmailIntoDB,
};
