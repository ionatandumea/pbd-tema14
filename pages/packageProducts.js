import express from "express";
import prisma from "../providers/prismaClient.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  const packagedProducts = await prisma.packagedProduct.findMany({
    include: {
      product: true,
      packaging: true,
    },
  });

  const productsList = await prisma.product.findMany();
  const packagingsList = await prisma.packaging.findMany();

  res.render("packageProducts", {
    packagedProducts,
    productsList,
    packagingsList,
  });
});

export default router;
