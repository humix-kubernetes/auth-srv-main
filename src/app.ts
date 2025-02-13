// app.ts
import express, { Request, Response } from 'express';
import router from './routes/routes';

// Inicializando a aplicação Express
const app = express();
const PORT = process.env.PORT || 8080;
// Configurando uma rota inicial para exibir uma mensagem de boas-vindas
app.get('/', (req: Request, res: Response) => {
  res.send('Bem-vindo à API de tarefas!');
});

app.use(router)

// Inicializando o servidor e fazendo com que ele escute na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});