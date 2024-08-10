import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      require: true,
    },
    categoryname: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const categories = mongoose.model("categories", categoriesSchema);
export default categories;
