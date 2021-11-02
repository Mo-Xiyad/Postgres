import { Router } from "express";

import usersHandler from "./handlers.js";

const router = Router();

router.get("/", usersHandler.getAll);

router.post("/", usersHandler.createUser);

router
  .route("/:id")
  .get(usersHandler.getById)
  .put(usersHandler.updateUserById)
  .delete(usersHandler.deleteUserById);

export default router;
