import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userid: {
        type: String,
        require: true,
    },
    total: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    productname: {
        type: Array,
        require: true
    },
    quantity: {
        type: Array,
        require: true
    },
    status: {
        type: String,
        require: true
    }
  },
  { timestamps: true }
);

const order = mongoose.model("order", orderSchema);
export default order;
