import prisma from "../providers/prismaClient.js";

export const findAll = async (_req, res) => {
  const packagedProducts = await prisma.packagedProduct.findMany();

  res.json(packagedProducts);
};

export const findOne = async (req, res) => {
  const packagedProduct = await prisma.packagedProduct.findUnique({
    where: { id: parseInt(req.params.id) },
  });

  res.json(packagedProduct);
};

export const create = async (req, res) => {
  const body = req.body;

  const packagedProduct = await prisma.packagedProduct.create({
    data: {
      productId: body.productId,
      packagingId: body.packagingId,
    },
  });

  res.json(packagedProduct);
};

export const update = async (req, res) => {
  const body = req.body;

  const updatedPackagedProduct = await prisma.packagedProduct.update({
    where: { id: parseInt(req.params.id) },
    data: {
      productId: body.productId,
      packagingId: body.packagingId,
    },
  });

  res.json(updatedPackagedProduct);
};

export const remove = async (req, res) => {
  const removedPackagedProduct = await prisma.packagedProduct.delete({
    where: { id: parseInt(req.params.id) },
  });

  res.json(removedPackagedProduct);
};
