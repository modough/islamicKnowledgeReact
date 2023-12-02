
const localHost = "http://localhost:8080";

export const fetchQuranApi = async (surahNumber, setQuranData) => {
    const url = `${localHost}/surah/${surahNumber}`;
    const options = {
        method: 'GET',
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
    const url = `${localHost}/audio/${surahNumber}`;
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
    const url = `${localHost}/hadith/${number}`;
    const options = {
        method: 'GET',
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
    const url = `${localHost}/hadith`;
    const options = {
        method: 'GET',
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
    const url = `${localHost}/quran/${word}`;
    try {
        const response = await fetch(url);
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

