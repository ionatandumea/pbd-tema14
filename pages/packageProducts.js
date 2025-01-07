import express from "express";
import prisma from "../providers/prismaClient.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  const packagedProducts = await prisma.packagedProduct.findMany();

  res.render("packageProducts", { packagedProducts });
});

export default router;
