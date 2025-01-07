import express from "express";
import prisma from "../providers/prismaClient.js";
const router = express.Router();

router.get("/", async (_req, res) => {
  res.render("supplyDepot");
});

export default router;
