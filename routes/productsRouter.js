import express from "express";
import {
  findAll,
  findOne,
  create,
  update,
  remove,
} from "../controllers/productsController.js";

const router = express.Router();

router
  .get("/", findAll)
  .get("/:id", findOne)
  .post("/", create)
  .patch("/:id", update)
  .delete("/:id", remove);

export default router;
