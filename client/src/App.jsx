import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import { useEffect, useState } from 'react'
import {
  fetchAllHadiths,
  fetchHadithsApi,
  fetchQuranApi,
  fetchQuranAudioApi,
  fetchQuranByWord
} from './data/fetchApi'
import Home from './pages/home/Home'
import HadithPage from './pages/hadith/HadithPage'
import QuranPage from './pages/quran/QuranPage'
import ErrorPage from './pages/error/ErrorPage'
import Chatbot from './components/chatbot/Chatbot'
import BookComponent from './pages/books/Book'
import ChapterPage from './pages/chapter/ChapterPage'


function App() {
  const [quranData, setQuranData] = useState(null)
  const [quranAudio, setQuranAudio] = useState(null)
  const [hadithData, setHadithData] = useState(null)
  const [allHadithData, setAllHadithData] = useState(null)
  const chapterId = Math.floor(Math.random() * 114)
  const number = Math.floor(Math.random() * 321)
  const [surahNumber, setSurahNumber] = useState(parseInt(chapterId))
  const [word, setWord] = useState('')
  const [data, setData] = useState(null)
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState(false);
  const [hideToast, setHideToast] = useState(false);
  setTimeout(() => {
    setToast(true)
  }, 5000);
  useEffect(() => {
    fetchHadithsApi(number, setHadithData)
    fetchQuranApi(surahNumber, setQuranData)
    fetchAllHadiths(setAllHadithData)
    fetchQuranAudioApi(setQuranAudio, surahNumber)
  }, [])
  const handleSearch = () => {
    fetchQuranByWord(word, setData);
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home
            quranData={quranData}
            hadithData={hadithData}
            data={data} word={word}
            setWord={setWord}
            handleSearch={handleSearch}
          />}
        />
        <Route
          path='/quran'
          element={<QuranPage
            quranData={quranData}
            setSurahNumber={setSurahNumber}
            surahNumber={surahNumber}
            setQuranData={setQuranData}
            quranAudio={quranAudio}
            setQuranAudio={setQuranAudio}
          />}
        />
        <Route path='/hadith' element={<HadithPage allHadithData={allHadithData} />} />
        <Route path='/hadith/:name' element={<BookComponent />} />
        <Route path='/hadith/:name/:id' element={<ChapterPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Chatbot
        show={show}
        setShow={setShow}
        toast={toast}
        hideToast={hideToast}
        setHideToast={setHideToast}
      />
    </Router>
  )
}
export default App
