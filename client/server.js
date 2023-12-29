import express from 'express';
import cors from 'cors';
import { closeThread, teachBot } from './src/bot.js';
import { booksData } from './src/booksData.js';


const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.post('/bot', teachBot);
app.post('/close/:threadId', closeThread);
app.get('/book/name', booksData);


const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
