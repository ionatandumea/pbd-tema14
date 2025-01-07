import prisma from "../providers/prismaClient.js";

export const findAll = async (_req, res) => {
  const packagings = await prisma.packaging.findMany();

  res.json(packagings);
};

export const findOne = async (req, res) => {
  const packaging = await prisma.packaging.findUnique({
    where: { id: parseInt(req.params.id) },
  });

  res.json(packaging);
};

export const create = async (req, res) => {
  const body = req.body;

  const packaging = await prisma.packaging.create({
    data: {
      type: body.type,
      quantity: parseInt(body.quantity),
    },
  });

  res.json(packaging);
};

export const update = async (req, res) => {
  const body = req.body;

  const updatedPackaging = await prisma.packaging.update({
    where: { id: parseInt(req.params.id) },
    data: {
      name: body.name,
    },
  });

  res.json(updatedPackaging);
};

export const remove = async (req, res) => {
  const removedPackaging = await prisma.packaging.delete({
    where: { id: parseInt(req.params.id) },
  });

  res.json(removedPackaging);
};
