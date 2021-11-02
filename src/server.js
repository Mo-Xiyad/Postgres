import express from "express";
import usersRoute from "./services/products/routes.js";
import createDefaultTables from "./db/create-tables.js";

const server = express();

const { PORT } = process.env;

server.use(express.json());

server.use("/users", usersRoute);

server.listen(PORT, async () => {
  console.log(`✅ Server is running on port ${PORT}`);
  await createDefaultTables();
});

server.on("error", console.log);