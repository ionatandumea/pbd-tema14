import prisma from "../providers/prismaClient.js";

export const findAll = async (_req, res) => {
  const products = await prisma.product.findMany();

  res.json(products);
};

export const findOne = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(req.params.id) },
  });

  res.json(product);
};

export const create = async (req, res) => {
  const body = req.body;

  const product = await prisma.product.create({
    data: {
      name: body.name,
      quantity: parseInt(body.quantity),
    },
  });

  res.json(product);
};

export const update = async (req, res) => {
  const body = req.body;

  const updatedProduct = await prisma.product.update({
    where: { id: parseInt(req.params.id) },
    data: {
      name: body.name,
    },
  });

  res.json(updatedProduct);
};

export const remove = async (req, res) => {
  const removedProduct = await prisma.product.delete({
    where: { id: parseInt(req.params.id) },
  });

  res.json(removedProduct);
};
