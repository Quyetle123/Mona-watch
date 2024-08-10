import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    categoryid: {
      type: String,
      require: true,
    },
    productname: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    sold: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const products = mongoose.model("products", productsSchema);
export default products;
