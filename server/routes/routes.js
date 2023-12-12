import express from "express";
import { userSignUp, userLogin } from "../controller/user-controller.js";
import { getProducts } from "../controller/product-controller.js";

const router = express.Router();

router.post("/signUp", userSignUp);
router.post("/login", userLogin);

router.get('/products',getProducts)

export default router;
