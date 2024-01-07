const localHost = "https://islamic-knowledge-uaxg.onrender.com";

export const fetchQuranApi = async (surahNumber, setQuranData) => {
    const url = `${localHost}/surah/${surahNumber}`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        setQuranData(result)
    } catch (error) {
        console.error(error);
    }

};
export const fetchQuranAudioApi = async (setQuranAudio, surahNumber) => {
    const url = `${localHost}/audio/${surahNumber}`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        setQuranAudio(result)
    } catch (error) {
        console.error(error);
    }

};


export const fetchHadithsApi = async (number, setHadithData) => {
    const url = `${localHost}/hadith/${number}`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        setHadithData(result)
    } catch (error) {
        console.error(error);
    }
}
export const fetchAllHadiths = async (setAllHadithData) => {
    const url = `${localHost}/hadith`;


    try {
        const response = await fetch(url);
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
    const url = `${localHost}/bot`;
    const options = {
        method: 'POST',
        body: JSON.stringify({ question, threadId }),
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        const response = await fetch(url, options)
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


export const fetchBookByName = async (name, setBookData) => {
    const url = `${localHost}/book/${name}`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        setBookData(result)
    } catch (error) {
        console.error(error);
    }
};