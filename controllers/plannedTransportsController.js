import prisma from "../providers/prismaClient.js";

export const findAll = async (_req, res) => {
  const plannedTransports = await prisma.plannedTransport.findMany();

  res.json(plannedTransports);
};

export const findOne = async (req, res) => {
  const plannedTransport = await prisma.plannedTransport.findUnique({
    where: { id: parseInt(req.params.id) },
  });

  res.json(plannedTransport);
};

export const create = async (req, res) => {
  const body = req.body;

  res.json({
    body,
  });
  /*
  const plannedTransport = await prisma.plannedTransport.create({
    data: {
      carrier: {
        connect: { id: carrierId },
      },
      start,
      end,
    },
  });

  await prisma.packagedProduct.update({
    where: { id: packagedProductId },
    data: {
      plannedTransport: {
        connect: { id: plannedTransport.id },
      },
    },
  });

  res.json(plannedTransport);
  */
};

export const update = async (req, res) => {
  const updatedPlannedTransport = await prisma.plannedTransport.update({
    where: { id: parseInt(req.params.id) },
    data: {
      ...req.body,
    },
  });

  res.json(updatedPlannedTransport);
};

export const remove = async (req, res) => {
  const removedPlannedTransport = await prisma.plannedTransport.delete({
    where: { id: parseInt(req.params.id) },
  });

  res.json(removedPlannedTransport);
};
