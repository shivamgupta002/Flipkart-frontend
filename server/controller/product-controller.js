import Product from "../model/product-schema.js";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (e) {
    console.log("Error find in Get Product controller due to ", error.message);
    return res.status(500).json(e.message);
  }
};
