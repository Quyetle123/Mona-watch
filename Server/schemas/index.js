import { gql } from "apollo-server-express";

export const typeDefs = gql`
scalar Upload
type Users {
    id: String!,
    uid: String!,
    username: String!,
    password: String,
    role: String,
    email: String,
    city: String,
    address: String,
}

type Categories {
    id: String!,
    categoryname: String!,
    description: String,
    userid: Users,
    products: [Products]
}

type Products {
    id: String!,
    categoryid: String!,
    productname: String!,
    description: String!,
    price: Int!,
    image: String!,
    quantity: Int,
    sold: Int
}

type Cart {
    id: String!,
    userid: String!,
    productid: String!,
    productname: String!,
    image: String!,
    price: Int!,
    quantity: Int!,
}

type Order {
    id: String!,
    userid: String!,
    total: Int!,
    address: String!,
    city: String!,
    productname: [String!]!,
    quantity: [Int!]!,
    status: String!,
    createdAt: String
}

type File {
    url: String!
}


type Query {
    login(username: String!, password: String!): Users,
    loginWithGoogle(email: String!): Users,
    categories: [Categories],
    category(categoryid: String!): Categories,
    products: [Products],
    product(productid: String!): Products,
    sellingProduct: [Products],
    newProduct: [Products],
    carts(userid: String!): [Cart],
    ProductWithcateId(categoryid: String!): [Products],
    ProductWithcateIdPriceDesc(categoryid: String!): [Products],
    ProductWithcateIdPriceAsc(categoryid: String!): [Products],
    SellingProductWithcateId(categoryid: String!): [Products],
    CartWithProductId(userid: String!, productid: String!): [Cart],
    users: [Users],
    user(userid: String!): Users,
    orders(userid: String!): [Order],
    allOrder: [Order],
}


type Mutation {
    register(uid: String!, username: String!, password: String, role: String, email: String, city: String, address: String): Users,
    updateUser(id: String!, username: String!, role: String, email: String, city: String, address: String): Users,
    addCategory(userid: String!, categoryname: String!, description: String): Categories,
    updateCategory(id: String!, categoryname: String!, description: String!): Categories,
    deleteCategory(id: String!): Categories,
    addProduct(id: String!,categoryid: String!,productname: String!,description: String!,price: Int!, image: String!, quantity: Int, sold: Int): Products,
    updateProduct(id: String!,categoryid: String!,productname: String!,description: String!,price: Int!,image: String!, quantity: Int): Products,
    deleteProduct(id: String!): Products,
    addCart(userid: String!,productid: String!, productname: String!, image: String!, price: Int!, quantity: Int!): Cart,
    updateCart(id: String!, quantity: Int!): Cart,
    deleteCart(id: String!): Cart,
    addOrder(userid: String!, total: Int!, address: String!, city: String!, productname: [String!]!, quantity: [Int!]!, status: String!): Order,
    updateOrder(id: String!, status: String!): Order,
    deleteOrder(id: String!): Order,
    uploadFile(file: Upload!): File!,
}
`;

