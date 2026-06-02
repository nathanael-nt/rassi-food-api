import express, { Router } from 'express';
import cors from 'cors';
import router from "./routes.ts";

const app = express()

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3001, () => {
  console.log('Servidor executando na parta: http://localhost:3001')
})