import Product from "../model/product-schema.js";

export const addProduct = async (req, res) => {
  const {
    id,
    url,
    detailUrl,
    title,
    price,
    quantity,
    description,
    discount,
    tagline,
  } = req.body;
  try {
    if (
      id &&
      url &&
      detailUrl &&
      title &&
      price &&
      quantity &&
      description &&
      discount &&
      tagline
    ) {
      const isProduct = await Product.findOne({ id: id });
      if (isProduct) {
        return res
          .status(208)
          .json({ message: "This product is already present" });
      } else {
        const newProduct = await Product({
          id,
          url,
          detailUrl,
          title,
          price,
          quantity,
          description,
          discount,
          tagline,
        }).save();
        if (newProduct) {
          return res.status(201).json({ message: "Product Save Successfully" });
        } else {
          return res.status(209).json({ message: "Not save" });
        }
      }
    } else {
      return res.status(210).json({ message: "All fields are required" });
    }
  } catch (e) {
    console.log("Error find in Add Product controller due to ", e.message);
    return res.status(500).json(e.message);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (e) {
    console.log("Error find in Get Product controller due to ", e.message);
    return res.status(500).json(e.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id: id });
    res.status(200).json(product);
  } catch (e) {
    console.log("Error find in Get Product By ID  due to ", e.message);
    return res.status(500).json(e.message);
  }
};
