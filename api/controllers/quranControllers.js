import 'dotenv/config';
import fetch from 'node-fetch';

const fetchMethod = async (url, options, res, req) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const quranBySurah = async (req, res) => {
    const { surahNumber } = req.params;
    const url = `https://al-quran1.p.rapidapi.com/${surahNumber}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
        }
    };
    fetchMethod(url, options, res, req)
};
export const quranByWord = async (req, res) => {
    const { word } = req.params;
    const url = `https://al-quran1.p.rapidapi.com/corpus/${word}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
        }
    };
    fetchMethod(url, options, res, req)
};
export const quranAudio = async (req, res) => {
    const { surahNumber } = req.params;
    const url = `http://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`;
    const options = {
        method: 'GET',
    }
    fetchMethod(url, options, res, req)
};