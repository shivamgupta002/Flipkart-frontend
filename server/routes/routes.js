import express from "express";
import { userSignUp, userLogin } from "../controller/user-controller.js";
import {
  addProduct,
  getProducts,
  getProductById,
} from "../controller/product-controller.js";

const router = express.Router();

router.post("/signUp", userSignUp);
router.post("/login", userLogin);

router.post('/addProduct',addProduct)

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

export default router;
