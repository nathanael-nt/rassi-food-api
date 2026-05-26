import express from 'express';
import cors from 'cors';

const app = express()

app.use(express.json());
app.use(cors());

app.get('/teste', (req, res) => {
  res.status(401).json({mensagem: "Senha ou e-mail inválidos"});
})

app.listen(3001, () => {
  console.log('Servidor executando na parta: http://localhost:3001')
})