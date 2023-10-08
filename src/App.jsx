import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import { useEffect, useState } from 'react'
import { fetchAllHadiths, fetchHadithsApi, fetchQuranApi, fetchQuranAudioApi, fetchQuranByWord } from './data/fetchApi'
import Home from './pages/home/Home'
import HadithPage from './pages/hadith/HadithPage'
import QuranPage from './pages/quran/QuranPage'
import ErrorPage from './pages/error/ErrorPage'
import LocalContext from './context/localContext'
import i18n from './i18n'

function App() {
  const [locale, setLocale] = useState(i18n.language)
  const [quranData, setQuranData] = useState(null)
  const [quranAudio, setQuranAudio] = useState(null)
  const [hadithData, setHadithData] = useState(null)
  const [allHadithData, setAllHadithData] = useState(null)
  const chapterId = Math.floor(Math.random() * 114)
  const number = Math.floor(Math.random() * 321)
  const [surahNumber, setSurahNumber] = useState(parseInt(chapterId))
  const [word, setWord] = useState('')
  const [data, setData] = useState(null)
  i18n.on('languageChanged', function () { setLocale(i18n.language) })

  useEffect(() => {
    fetchHadithsApi(number, setHadithData)
    fetchQuranApi(surahNumber, setQuranData)
    fetchAllHadiths(setAllHadithData)
    fetchQuranAudioApi(setQuranAudio)
  }, [])
  const handleSearch = () => {
    fetchQuranByWord(word, setData);
  }
  return (
    <LocalContext.Provider value={{ locale, setLocale }} >
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
            />}
          />
          <Route path='/hadith' element={<HadithPage allHadithData={allHadithData} />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </LocalContext.Provider>
  )
}

export default App
