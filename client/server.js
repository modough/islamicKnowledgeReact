import express from 'express';
import cors from 'cors';
import { teachBot } from './src/bot.js';


const app = express();
app.use(express.json());
app.use(cors());

app.post('/bot', teachBot);


const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
