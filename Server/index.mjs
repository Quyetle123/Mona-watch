import express from "express";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { resolvers } from "./resolvers/index.js";
import { typeDefs } from "./schemas/index.js";
import "./firebaseConfig.js";

const app = express();
const httpServer = http.createServer(app);

// Kết nối cơ sở dữ liệu
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context: ({ req, res }) => {
    const token = req.headers.authorization || "";

    const tokenParts = token.split(" ");
    if (tokenParts.length === 2 && tokenParts[0] === "Bearer") {
      const accessToken = tokenParts[1];
      const decodedToken = decodeToken(accessToken);

      console.log(decodedToken);
      const uid = decodedToken.userId;
      return { uid };
    }
    return {};
  },
});

async function startServer() {
  await server.start();
  app.use(cors());
  app.use(bodyParser.json());
  server.applyMiddleware({ app });
  await mongoose.connect("mongodb://localhost:27017/HDWatch");
  await new Promise((resolve) => httpServer.listen(PORT, resolve));
  console.log(`Server đang chạy trên cổng ${PORT}`);
}

startServer().catch((err) => console.error(err));
