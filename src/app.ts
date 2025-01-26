import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoute } from "./app/modules/product/product.route"; // Importing ProductRoute from its module
import { OrderRoute } from "./app/modules/order/order.route"; // Importing OrderRoute from its module

const app: Application = express();

// Middleware - JSON parser for request bodies
app.use(express.json());

// Middleware - Enable CORS
app.use(cors());

// Routes
// Product routes
app.use("/api/products", ProductRoute);

// Order routes
app.use("/api/orders", OrderRoute);

// Root route handler
app.get("/", (req: Request, res: Response) => {
  res.send("E-commerce Product Data Server Running..............");
});

// Catch-all route handler for undefined routes
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


export default app;
