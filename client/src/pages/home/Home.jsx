import './home.css'
import PropTypes from 'prop-types'
import QuranInput from '../../components/quranInput/QuranInput'
import LoadingPage from '../loadingPage/LoadingPage';
import Highlighter from "react-highlight-words";

const Home = ({ hadithData, quranData, data, word, setWord, handleSearch }) => {
    return (
        !hadithData && !quranData && !data ? <LoadingPage /> :
            <section className="home bg">
                <h2 className="title">Welcome to Islamic Knowledge</h2>
                <div className="hadith p-400">
                    <h4 className='hadith-title'>{hadithData?.title}</h4>
                    <p className='description'>{hadithData?.hadith}</p>
                    <p>{`${hadithData?.book}, Hadith: ${hadithData?.hadithNumberArabic}`}</p>
                </div>
                <div className="quran p-400" >
                    <div className='home-quranTitle'>
                        <h3 className='home-quranTitle-top'>
                            {`${quranData?.id} - ${quranData?.surah_name} - ${quranData?.translation} - ${quranData?.surah_name_ar}`}
                        </h3>
                        <h4>
                            {`${quranData?.total_verses} Verses - ${quranData?.type?.toUpperCase()}`}
                        </h4>
                    </div>
                    <p className='description'>{quranData?.description}</p>

                    <QuranInput setWord={setWord} word={word} handleSearch={handleSearch} />

                    {data?.map((elmt, i) => {
                        console.log(data[0])
                        return (
                            i !== 0 &&
                            <div key={`${elmt?.surah_no}-${elmt?.verse_no}`} className="quranDetails">
                                <h3>{`Surah n° ${elmt?.surah_no} - Verse n°  ${elmt?.verse_no}`}</h3>
                                <Highlighter
                                    className='description'
                                    searchWords={[word]}
                                    textToHighlight={elmt?.content}
                                    autoEscape={true}
                                />
                            </div>
                        )
                    }
                    )}
                </div>
            </section>
    )
}
Home.propTypes = {
    hadithData: PropTypes.object,
    quranData: PropTypes.object,
    data: PropTypes.array,
    word: PropTypes.string,
    setWord: PropTypes.func,
    handleSearch: PropTypes.func,
}
export default Home