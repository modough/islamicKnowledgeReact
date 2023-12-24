import express from 'express';
import cors from 'cors';
import { closeThread, teachBot } from './src/bot.js';


const app = express();
app.use(express.json());
app.use(cors());

app.post('/bot', teachBot);
app.post('/close/:threadId', closeThread);


const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
