import prisma from "../providers/prismaClient.js";
import express from "express";
const router = express.Router();

router.get("/", async (_req, res) => {
  const packagedProducts = await prisma.packagedProduct.findMany({
    include: {
      packaging: true,
      product: true,
    },
  });

  const carriers = await prisma.carrier.findMany();

  res.render("planTransports", { packagedProducts, carriers });
});

export default router;
