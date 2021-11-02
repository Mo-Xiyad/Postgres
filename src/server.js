import express from "express";
import listEndpoints from "express-list-endpoints";
import productsRoute from "./services/products/routes.js";
import createDefaultTables from "./db/create-tables.js";

const server = express();

const { PORT } = process.env;

server.use(express.json());

server.use("/products", productsRoute);

console.table(listEndpoints(server));
server.listen(PORT, async () => {
  console.log(`✅ Server is running on port ${PORT}`);
  await createDefaultTables();
});

server.on("error", console.log);
