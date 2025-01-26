import { z } from "zod";

const orderValidationSchema = z.object({
  email: z.string().email("Invalid email format").min(1),
  productId: z.string().min(1),
  price: z.number().positive("Price must be a positive number"),
  quantity: z.number().int().positive("Quantity must be a positive integer"),
});

export default orderValidationSchema;
