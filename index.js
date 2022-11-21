import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routes/auth.routers.js';
import transactionsRouter from './routes/transactions.routers.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(transactionsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Servidor funcionando na ${PORT}!`);})