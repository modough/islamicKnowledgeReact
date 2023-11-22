import 'dotenv/config';
import fetch from 'node-fetch';

export const hadithByNumber = async (req, res) => {
    const { hadithNumber } = req.params;
    const url = `https://mutawatir-hadith-api.p.rapidapi.com/hadith/${hadithNumber}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'mutawatir-hadith-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
export const allHadiths = async (req, res) => {
    const url = 'https://mutawatir-hadith-api.p.rapidapi.com/allHadith'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'mutawatir-hadith-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};