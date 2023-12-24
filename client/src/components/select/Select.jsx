import SearchSvg from '../../assets/search.svg'
import { fetchQuranApi, fetchQuranAudioApi } from '../../data/fetchApi'
import { quranChapters } from '../../data/quranChapters'
import './select.css'
import PropTypes from 'prop-types'

function Select({ setSurahNumber, surahNumber, setQuranData, setQuranAudio }) {
    const handleSearch = () => {
        fetchQuranApi(surahNumber, setQuranData)
        fetchQuranAudioApi(setQuranAudio, surahNumber)
    }

    return (
        <div className='search '>
            <div className='selectDiv '>
                <select
                    className='w-400 w-330'
                    type="text"
                    onChange={(e) => {
                        setSurahNumber(parseInt(e.target.value))
                    }}
                >
                    <option>Search by Surah</option>
                    {quranChapters.map((number) => {
                        return (
                            <option key={number.id} value={number.id}>{`Surah n° ${number.id} - ${number.name}`}</option>
                        )
                    })}
                </select>
                <button
                    src={SearchSvg}
                    alt="search button"
                    onClick={handleSearch}
                >Load</button>
            </div>
        </div>
    )
}
Select.propTypes = {
    setSurahNumber: PropTypes.func,
    surahNumber: PropTypes.number,
    setQuranData: PropTypes.func,
    setQuranAudio: PropTypes.func
}
export default Select
