import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoute } from "./app/modules/product/product.route";
import { OrderRoute } from "./app/modules/order/order.route";
const app: Application = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(cors());

// product route
app.use("/api/products", ProductRoute);
// order route
app.use("/api/orders", OrderRoute);


app.get("/", (req: Request, res: Response) => {
  res.send("E-commerce Product Data Server Running..............");
});

export default app;
