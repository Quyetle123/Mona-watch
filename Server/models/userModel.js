import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    uid: {
        type: String,
        require: true
    },
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
    email: {
      type: String,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
export default userModel;
