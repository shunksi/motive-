import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import itemRoutes from './routes/items';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors({
  origin: 'http://localhost:5173'  // frontend URL
}));

app.use(cors());
app.use(express.json());
app.use('/api/items', itemRoutes);

app.listen(5000, () => {
  console.log('🔥 Server running on http://localhost:5000');
});


