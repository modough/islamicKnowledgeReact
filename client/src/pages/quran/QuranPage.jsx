import PropTypes from 'prop-types'
import './quranPage.css'
import Select from '../../components/select/Select';
import LoadingPage from '../loadingPage/LoadingPage';


const QuranPage = ({ quranData, setSurahNumber, surahNumber, setQuranData, quranAudio, setQuranAudio }) => {
    let array = [];
    const verse = quranData?.verses && Object.keys(quranData?.verses).map(key => {
        return quranData?.verses[key]
    })

    if (verse?.length === quranAudio?.data?.ayahs?.length) {
        array = verse?.map((text, index) => {
            const audio = quranAudio?.data?.ayahs[index]
            return { text, audio, index }
        });
    }
    return (
        !quranData && !quranAudio ? <LoadingPage /> :
            <section className='quranPage flex flex-col justify-center gap bg-logo p-1300 p-498'>
                <Select
                    setSurahNumber={setSurahNumber}
                    surahNumber={surahNumber}
                    setQuranData={setQuranData}
                    setQuranAudio={setQuranAudio}
                />
                <div className='flex flex-col items-center justify-center border '>
                    <div className='quran-title flex flex-col items-center justify-center'>
                        <h3 className='text-xl font-bold'>
                            {`${quranData?.surah_name} - ${quranData?.translation} - ${quranData?.surah_name_ar}`}
                        </h3>
                        <h4>{`${quranData?.total_verses} Verses - ${quranData?.type?.toUpperCase()}`}</h4>
                    </div>
                    <span className=' bg-white'>
                        <p className='p-10'>{quranData?.description}</p>
                    </span>
                </div>
                <table className='flex flex-col items-center justify-between gap border '>
                    <tbody>
                        {quranData?.id === 9 ? null : (
                            quranData?.id !== 1 && (
                                <tr className='relative flex w-auto '>
                                    <td className=' texts'>
                                        <p className='bolder'>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
                                        <p className='bold'> In the name of God, the merciful and compassionate</p>
                                        <p className=''>Bismillahi rahmani rahim</p>
                                    </td>
                                </tr>
                            )
                        )}

                        {array?.map((item, i) => {
                            const next = item.audio.audio[i + 1]
                            return <tr key={item.index} className='relative flex w-auto '>
                                <td className="line-number flex items-center justify-center border absolute">{item.audio.numberInSurah}</td>
                                <td className=' texts'>
                                    <p className='bolder'>{item.text.content}</p>
                                    <p className='bold'>{item.text.translation_eng}</p>
                                    <p className=''>{item.text.transliteration}</p>
                                    <audio
                                        onEnded={() => {
                                            next.play()
                                        }}
                                        key={item.audio.number}
                                        className='audio'
                                        src={item.audio.audio || item.audio.audioSecondary}
                                        controls

                                    />
                                </td>

                            </tr>
                        }
                        )
                        }
                    </tbody>
                </table>
            </section>
    )
}
QuranPage.propTypes = {
    quranData: PropTypes.object,
    setSurahNumber: PropTypes.func,
    surahNumber: PropTypes.number,
    setQuranData: PropTypes.func,
    quranAudio: PropTypes.object,
    setQuranAudio: PropTypes.func,

}
export default QuranPage