import './bookCard.css';
import PropTypes from 'prop-types';


const BookCard = ({ book, arabic }) => {
    return (

        <button className='bookCard-name fs-400'>
            <p>{book}</p>
            <p>{arabic}</p>
        </button>


    )
}
BookCard.propTypes = {
    book: PropTypes.string,
    arabic: PropTypes.string,
}
export default BookCard