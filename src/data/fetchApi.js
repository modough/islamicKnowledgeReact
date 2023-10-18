import { SECRET_KEY } from "../keys";


export const fetchQuranApi = async (surahNumber, setQuranData) => {
    const url = `https://al-quran1.p.rapidapi.com/${surahNumber}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': SECRET_KEY,
            'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setQuranData(result)
    } catch (error) {
        console.error(error);
    }

}
export const fetchQuranAudioApi = async (setQuranAudio, surahNumber) => {
    const url = `http://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`;
    const options = {
        method: 'GET',
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setQuranAudio(result)
    } catch (error) {
        console.error(error);
    }

}


export const fetchHadithsApi = async (number, setHadithData) => {
    const url = `https://mutawatir-hadith-api.p.rapidapi.com/hadith/${number}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': SECRET_KEY,
            'X-RapidAPI-Host': 'mutawatir-hadith-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setHadithData(result)
    } catch (error) {
        console.error(error);
    }
}
export const fetchAllHadiths = async (setAllHadithData) => {
    const url = 'https://mutawatir-hadith-api.p.rapidapi.com/allHadith'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': SECRET_KEY,
            'X-RapidAPI-Host': 'mutawatir-hadith-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setAllHadithData(result)

    } catch (error) {
        console.error(error);
    }
}

export const fetchQuranByWord = async (word, setData) => {
    const url = `https://al-quran1.p.rapidapi.com/corpus/${word}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': SECRET_KEY,
            'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result)
    } catch (error) {
        console.error(error);
    }
}



