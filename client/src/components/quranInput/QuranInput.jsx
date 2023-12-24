import './quranInput.css';
import PropTypes from 'prop-types'
import searchSvg from '../../assets/search.svg';

function QuranInput({ setWord, word, handleSearch }) {

    return (
        <div className='quranInput'>
            <div className='quranInputDiv'>
                <label>
                    <input
                        placeholder='Search by Word'
                        value={word}
                        onChange={(e) => {
                            setWord(e.target.value)
                        }}
                    />
                </label>
                <img src={searchSvg} alt="" onClick={handleSearch} onKeyDown={handleSearch} />
            </div>
            <div className='tag'>
                <p>Tag:</p>
                <span>{word}</span>
            </div>
        </div>
    )
}
QuranInput.propTypes = {
    setWord: PropTypes.func,
    word: PropTypes.string,
    handleSearch: PropTypes.func
}
export default QuranInput