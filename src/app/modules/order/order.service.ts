import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
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
