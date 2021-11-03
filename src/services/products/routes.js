import { Router } from "express";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

import productsRoute from "./handlers.js";

import productReviewHandler from "../reviews/handlers.js";

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary, // CREDENTIALS, this line of code is going to search in your process.env for something called CLOUDINARY_URL
  params: {
    folder: "amazon-marketplace",
  },
});

const router = Router();

router.get("/", productsRoute.getAllProducts);

router.post("/", productsRoute.createProducts);

router
  .route("/:id/productCover")
  .put(
    multer({ storage: cloudinaryStorage }).single("product"),
    productsRoute.addProductImage
  );

router
  .route("/:id")
  .get(productsRoute.getProductById)
  .put(productsRoute.updateProductById)
  .delete(productsRoute.deleteProductById);

router
  .route("/:productId/reviews")
  .post(productReviewHandler.createReview)
  .get(productReviewHandler.getAllReviewsbyProductId);

router
  .route("/:productId/reviews/:reviewId")
  .get(productReviewHandler.getReviewsbyId)
  .put(productReviewHandler.updateReviewById);

export default router;
