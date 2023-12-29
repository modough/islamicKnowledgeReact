import { API_KEY, SECRET_HADITH_HOST, SECRET_QURAN_HOST, URL, URL_AUDIO, URL_QURAN } from "../key";

const localHost = "http://localhost:8080";

export const fetchQuranApi = async (surahNumber, setQuranData) => {
    const url = `${URL_QURAN}/${surahNumber}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': SECRET_QURAN_HOST
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setQuranData(result)
    } catch (error) {
        console.error(error);
    }

};
export const fetchQuranAudioApi = async (setQuranAudio, surahNumber) => {
    const url = `${URL_AUDIO}/${surahNumber}/ar.alafasy`;
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

};


export const fetchHadithsApi = async (number, setHadithData) => {
    const url = `${URL}/hadith/${number}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': SECRET_HADITH_HOST
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
    const url = `${URL}/allHadith`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': SECRET_HADITH_HOST
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
    const url = `${URL_QURAN}/corpus/${word}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': SECRET_QURAN_HOST
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result)
    } catch (error) {
        console.error(error);
    }
};

export const handleChatbotSubmit = async (
    e,
    question,
    threadId,
    setData,
    setThreadId,
    setQuestion
) => {
    e.preventDefault();
    const options = {
        method: 'POST',
        body: JSON.stringify({ question, threadId }),
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        const response = await fetch(`${localHost}/bot`, options)
        const result = await response.json();
        setData(result.data)
        setThreadId(result.threadId)
        setQuestion('')

    } catch (error) {
        console.error(error)
    }
};




export const handleCloseThread = async (threadId, setThreadId, setData) => {
    if (threadId) {
        await fetch(`${localHost}/close/${threadId}`, {
            method: 'POST',
        });
        setThreadId(null); // Reset the thread ID
        setData('')
    }
};


export const fetchBookByName = async (name, setData) => {
    const url = `http://localhost:8080/book/${name}`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result)
    } catch (error) {
        console.error(error);
    }
};