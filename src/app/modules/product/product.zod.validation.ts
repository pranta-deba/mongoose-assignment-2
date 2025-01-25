import { z } from "zod";

const productValidationSchema = z.object({
  name: z.string().trim(),
  description: z.string().trim(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string().trim()),
  variants: z.array(
    z.object({
      type: z.string().trim(),
      value: z.string().trim(),
    })
  ),
  inventory: z.object({
    quantity: z.number(),
    inStock: z.boolean(),
  }),
});

export default productValidationSchema;
