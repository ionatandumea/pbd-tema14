import express from "express";
import prisma from "../providers/prismaClient.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  const products = await prisma.product.findMany();
  const packagings = await prisma.packaging.findMany();
  const carriers = await prisma.carrier.findMany();

  res.render("index", { products, packagings, carriers });
});

export default router;
