import express from 'express';
import { produtoRoutes } from './routes/produtoRoutes.js';


export const app = express();

//Middle : ensina o express a ler o corpo da requisição em Json
app.use(express.json());

//Testar a api
app.get('/api/check', (req, res) => {
  res.status(200).json({status:'ok', mensagem: 'Servidor funcionando via HTTP!'});
});

app.use('/api/produtos', produtoRoutes);

app.use((req, res) => {
  res.status(404).json({erro: `A rota ${req.method} ${req.originalUrl} não existe`});
})

app.use((erro, req, res, _next))
console.error('Erro de Sistema: ', erro.message);
res.status(500).json({ erro: 'Falha interna do servidor'});

