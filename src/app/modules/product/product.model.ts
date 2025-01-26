import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
  name: { type: String, required: [true, "Name field is required!."] },
  description: {
    type: String,
    required: [true, "Description field is required!."],
  },
  price: { type: Number, required: [true, "Price field is required!."] },
  category: { type: String, required: [true, "Category field is required!."] },
  tags: { type: [String], required: [true, "Tags field is required!."] },
  variants: [
    {
      type: { type: String, required: [true, "Type field is required!."] },
      value: { type: String, required: [true, "Value field is required!."] },
    },
  ],
  inventory: {
    quantity: {
      type: Number,
      required: [true, "Quantity field is required!."],
    },
    inStock: {
      type: Boolean,
      required: [true, "In Stock field is required!."],
    },
  },
});

// Export the Mongoose model for the "Product" collection
export const Product = model<TProduct>("Product", productSchema);
