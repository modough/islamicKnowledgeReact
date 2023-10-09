import SearchSvg from '../../assets/search.svg'
import { fetchQuranApi } from '../../data/fetchApi'
import { quranChapters } from '../../data/quranChapters'
import './select.css'
import PropTypes from 'prop-types'

function Select({ setSurahNumber, surahNumber, setQuranData }) {
    const handleSearch = () => {
        fetchQuranApi(surahNumber, setQuranData)
    }

    return (
        <div className='search'>
            <select
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
    )
}
Select.propTypes = {
    setSurahNumber: PropTypes.func,
    surahNumber: PropTypes.number,
    setQuranData: PropTypes.func
}
export default Select
