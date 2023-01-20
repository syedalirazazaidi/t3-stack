import axios from "axios";
// Get all Products
// const productData = require("../../data/products.json");
const getProduct = async () => {
  const response = await axios.get("./products.json");
  console.log(response, "RESPONSE");

  return response.data;
};

const productService = {
  getProduct,
};

export default productService;
