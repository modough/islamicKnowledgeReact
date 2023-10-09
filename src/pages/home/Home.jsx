import './home.css'
import PropTypes from 'prop-types'
import QuranInput from '../../components/quranInput/QuranInput'
import LoadingPage from '../loadingPage/LoadingPage';
import { block } from "million/react";

const Home = block(({ hadithData, quranData, data, word, setWord, handleSearch }) => {
    return (
        !hadithData && !quranData && !data ? <LoadingPage /> :
            <section className="home">
                <h2 className="title">Welcome to Islamic Knowledge</h2>
                <div className="hadith">
                    <h4>{hadithData?.title}</h4>
                    <p className='description'>{hadithData?.hadith}</p>
                    <p>{`${hadithData?.book}, Hadith: ${hadithData?.hadithNumberArabic}`}</p>
                </div>
                <div className="quran">
                    <QuranInput setWord={setWord} word={word} handleSearch={handleSearch} />
                    <h3 className='home-quranTitle'>
                        {`${quranData?.surah_name} - ${quranData?.translation} - ${quranData?.surah_name_ar}`}
                    </h3>
                    <h4>
                        {`${quranData?.total_verses} Verses - ${quranData?.type?.toUpperCase()}`}
                    </h4>
                    <p className='description'>{quranData?.description}</p>
                    {data?.map((elmt, i) => {
                        return (
                            i !== 0 &&
                            <div key={`${elmt?.surah_no}-${elmt?.verse_no}`} className="quranDetails">
                                <h3>{`Surah n° ${elmt?.surah_no} - Verse n°  ${elmt?.verse_no}`}</h3>
                                <p className='description' >{elmt?.content}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </section>

    )
})
Home.propTypes = {
    hadithData: PropTypes.object,
    quranData: PropTypes.object,
    data: PropTypes.array,
    word: PropTypes.string,
    setWord: PropTypes.func,
    handleSearch: PropTypes.func,
}
export default Home