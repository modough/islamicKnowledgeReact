import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { teachBot } from './controllers/teachBotControllers.js';
import { quranAudio, quranBySurah, quranByWord } from './controllers/quranControllers.js';
import { closeThread } from './closeThread.js';
import { allHadiths, hadithByNumber } from './controllers/hadithControllers.js';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/bot', teachBot);
app.post('/close/:threadId', closeThread);
app.get('/surah/:surahNumber', quranBySurah);
app.get('/quran/:word', quranByWord)
app.get('/audio/:surahNumber', quranAudio);
app.get('/hadith/:hadithNumber', hadithByNumber)
app.get('/hadith', allHadiths)

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
