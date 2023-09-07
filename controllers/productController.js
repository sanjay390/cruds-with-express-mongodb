const Product = require("../model/Products");

//get all
const productAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch {
    res.json({ message: error });
  }
};

//single product
const productDetail = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
};

//Add new
// const productCreate = async (req, res) => {
//   const product = new Product({
//     title: req.body.title,
//     price: req.body.price,
//     image: req.body.image,
//     details: req.body.details,
//   });

//   try {
//     const saveProduct = await product.save();
//     res.status(201).json(saveProduct);
// console.log(saveProduct);
//     res.send(saveProduct);
//   } catch (error) {
//     console.error("Error saving product to MongoDB:", error);

//     res.status(400).send(error);
//   }
// };

const productCreate = async (req, res) => {
    try {
      // Create a new product instance using data from the request body
      const product = new Product({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details,
      });
  
      // Attempt to save the product to the database
      const savedProduct = await product.save();
  
      // Send a successful response after saving
      res.status(201).json(savedProduct);
    } catch (error) {
      // Handle any errors that occur during the save operation
      console.error("Error saving product to MongoDB:", error);
      res.status(500).json({ message: "Error creating product", error: error });
    }
  };
  

//Update Product
const productUpdate = async (req, res) => {
  try {
    const product = {
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
      detail: req.body.detail,
    };

    const updateProduct = await Products.findByIdAndUpdate(
      { _id: req.params.productId },
      product
    );
    res.json(updateProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

//Delete Product
const productDelete = (req, res) => {};

module.exports = {
  productAll,
  productDetail,
  productCreate,
  productUpdate,
  productDelete,
};
