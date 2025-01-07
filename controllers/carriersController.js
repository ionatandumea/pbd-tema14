import prisma from "../providers/prismaClient.js";

export const findAll = async (_req, res) => {
  const carriers = await prisma.carrier.findMany();

  res.json(carriers);
};

export const findOne = async (req, res) => {
  const carrier = await prisma.carrier.findUnique({
    where: { id: parseInt(req.params.id) },
  });

  res.json(carrier);
};

export const create = async (req, res) => {
  const body = req.body;

  const carrier = await prisma.carrier.create({
    data: {
      type: body.type,
      licensePlate: body.licensePlate,
      maxPackagings: parseInt(body.maxPackagings),
    },
  });

  res.json(carrier);
};

export const update = async (req, res) => {
  const body = req.body;

  const updatedCarrier = await prisma.carrier.update({
    where: { id: parseInt(req.params.id) },
    data: {
      type: body.type,
      licensePlate: body.licensePlate,
      maxPackagings: parseInt(body.maxPackagings),
    },
  });

  res.json(updatedCarrier);
};

export const remove = async (req, res) => {
  const removedCarrier = await prisma.carrier.delete({
    where: { id: parseInt(req.params.id) },
  });

  res.json(removedCarrier);
};
