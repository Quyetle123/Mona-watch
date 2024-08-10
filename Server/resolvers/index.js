import { categories, products, userModel, cart } from "../models/index.js";
import path from "path";
import fs from "fs";
import order from "../models/order.js";

export const resolvers = {
  Query: {
    login: async (parent, args) => {
      const username = args.username;
      const password = args.password;
      const user = await userModel.findOne({ username, password });
      return user;
    },
    loginWithGoogle: async (parent, args) => {
      const email = args.email;
      const user = await userModel.findOne({ email: email });
      return user;
    },
    users: async (parent, args, context) => {
      const allUsers = await userModel
        .find({
          userId: context.uid,
        })
        .sort({
          createdAt: "desc",
        });
      console.log(context);
      return allUsers;
    },
    user: async (parent, args) => {
      const userId = args.userid;
      const user = await userModel.findById(userId);

      return user;
    },
    categories: async (parent, args, context) => {
      const category = await categories
        .find({
          userId: context.id,
        })
        .sort({
          createdAt: "desc",
        });
      return category;
    },
    category: async (parent, args) => {
      const categoryId = args.categoryid;
      const category = await categories.findById(categoryId);

      return category;
    },
    products: async (parent, args, context) => {
      const product = await products
        .find({
          userId: context.id,
        })
        .sort({
          createdAt: "desc",
        });
      return product;
    },
    sellingProduct: async (parent, args, context) => {
      const product = await products
        .find({
          userId: context.id,
        })
        .sort({
          sold: "desc",
        })
        .limit(4);
      return product;
    },
    newProduct: async (parent, args, context) => {
      const product = await products
        .find({
          userId: context.id,
        })
        .sort({
          createdAt: "desc",
        })
        .limit(10);
      return product;
    },
    product: async (parent, args) => {
      const productId = args.productid;
      const product = await products.findById(productId);

      return product;
    },
    ProductWithcateId: async (parent, args) => {
      const categoryId = args.categoryid;
      const product = await products.find({ categoryid: categoryId });

      return product;
    },
    ProductWithcateIdPriceDesc: async (parent, args) => {
      const categoryId = args.categoryid;
      const product = await products.find({ categoryid: categoryId }).sort({
        price: "desc",
      });

      return product;
    },
    ProductWithcateIdPriceAsc: async (parent, args) => {
      const categoryId = args.categoryid;
      const product = await products.find({ categoryid: categoryId }).sort({
        price: "asc",
      });

      return product;
    },
    SellingProductWithcateId: async (parent, args) => {
      const categoryId = args.categoryid;
      const product = await products.find({ categoryid: categoryId }).sort({
        sold: "desc",
      });

      return product;
    },
    CartWithProductId: async (parent, args) => {
      const userid = args.userid;
      const productId = args.productid;
      const product = await cart.find({ productid: productId, userid });

      return product;
    },
    carts: async (parent, args, context) => {
      const userid = args.userid;
      const carts = await cart
        .find({
          userid,
        })
        .sort({
          createdAt: "desc",
        });
      return carts;
    },
    orders: async (parent, args, context) => {
      const userid = args.userid;
      const oders = await order
        .find({
          userid,
        })
        .sort({
          createdAt: "desc",
        });
      return oders;
    },
    allOrder: async (parent, args, context) => {
      const oders = await order
        .find({
          userId: context.id,
        })
        .sort({
          createdAt: "desc",
        });
      return oders;
    },
  },
  Categories: {
    userid: async (parent, args) => {
      const userId = parent.userId;
      const user = await userModel.findOne({
        uid: userId,
      });
      return user;
    },
  },
  Mutation: {
    register: async (parent, args) => {
      const foundUser = await userModel.findOne({ uid: args.uid }); // Sử dụng await để đợi kết quả trả về
      if (!foundUser) {
        const newUser = new userModel(args);
        await newUser.save();
        return newUser;
      }

      return foundUser;
    },
    addCategory: async (parent, args, context) => {
      const newCategory = new categories({ ...args, args });

      await newCategory.save();
      return newCategory;
    },
    updateCategory: async (parent, args) => {
      const categoryid = args.id;
      const category = await categories.findByIdAndUpdate(categoryid, args);
      return category;
    },
    deleteCategory: async (parent, args) => {
      const categoryid = args.id;
      await categories.findByIdAndDelete(categoryid);
    },
    uploadFile: async (parent, args) => {
      console.log(args);
      const name = await args;
      console.log(name);
      console.log(createReadStream);
      const stream = createReadStream();
      const pathName = path.join(__dirname, `/public/images/${name}`);
      const url = `http://localhost:4000/images/${name}`;

      // Lưu file vào server
      await new Promise((resolve, reject) =>
        stream
          .pipe(fs.createWriteStream(pathName))
          .on("finish", () => resolve({ url })) // Trả về đường dẫn của file sau khi ghi hoàn thành
          .on("error", reject)
      );

      return { url };
    },
    addProduct: async (parent, args) => {
      const newProduct = new products({ ...args, args });

      await newProduct.save();
      return newProduct;
    },
    updateProduct: async (parent, args) => {
      const productid = args.id;
      const product = await products.findByIdAndUpdate(productid, args);
      return product;
    },
    deleteProduct: async (parent, args) => {
      const productid = args.id;
      await products.findByIdAndDelete(productid);
    },
    addCart: async (parent, args) => {
      const newCart = new cart({ ...args, args });

      await newCart.save();
      return newCart;
    },
    updateCart: async (parent, args) => {
      const cartId = args.id;
      const productCart = await cart.findByIdAndUpdate(cartId, args);
      return productCart;
    },
    deleteCart: async (parent, args) => {
      const cartId = args.id;
      await cart.findByIdAndDelete(cartId);
    },
    updateUser: async (parent, args) => {
      const userId = args.id;
      const user = await userModel.findByIdAndUpdate(userId, args);
      return user;
    },
    addOrder: async (parent, args) => {
      const newOrder = new order({ ...args, args });

      await newOrder.save();
      return newOrder;
    },
    updateOrder: async (parent, args) => {
      const orderId = args.id;
      const orderUpdate = await order.findByIdAndUpdate(orderId, args);
      return orderUpdate;
    },
    deleteOrder: async (parent, args) => {
      const orderId = args.id;
      await order.findByIdAndDelete(orderId);
    },
  },
};
