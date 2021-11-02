import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary, // CREDENTIALS, this line of code is going to search in your process.env for something called CLOUDINARY_URL
  params: {
    folder: "amazon-marketplace",
  },
});

// function imageToCloud(req, res, next) {
//   const upload = multer({ storage: cloudinaryStorage }).single("product");
//   upload(req, res, (err) => {
//     if (err instanceof multer.MulterError) {
//       throw new Error(err);
//     } else {
//       next();
//     }
//   });
// }

export default imageToCloud;
