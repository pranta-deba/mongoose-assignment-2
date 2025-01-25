import express from 'express';
import { ProductServices } from './product.service';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);

export const ProductRoute = router;