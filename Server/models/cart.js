import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      require: true,
    },
    productid: {
      type: String,
      require: true,
    },
    productname: {
      type: String
    },
    image: {
      type: String
    },
    price: {
      type: String
    },
    quantity: {
      type: Number,
      require: true,
    }
  },
  { timestamps: true }
);

const cart = mongoose.model("cart", cartSchema);
export default cart;
