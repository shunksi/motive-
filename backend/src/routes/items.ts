import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (_, res) => {
  const items = await prisma.item.findMany();
  res.json(items);
});

router.post('/', async (req, res) => {
  const { name } = req.body;
  const newItem = await prisma.item.create({ data: { name } });
  res.json(newItem);
});

export default router;

