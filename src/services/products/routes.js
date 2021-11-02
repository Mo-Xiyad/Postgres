import { Router } from "express";

import productsRoute from "./handlers.js";

const router = Router();

router.get("/", productsRoute.getAllProducts);

router.post("/", productsRoute.createProducts);

router
  .route("/:id")
  .get(productsRoute.getProductById)
  .put(productsRoute.updateProductById)
  .delete(productsRoute.deleteProductById);

export default router;
