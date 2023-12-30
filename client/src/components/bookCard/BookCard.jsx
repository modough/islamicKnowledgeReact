import './bookCard.css';


const BookCard = ({ book, setLink, arabic }) => {
    return (

        <button className='bookCard-name fs-400'>
            <p>{book}</p>
            <p>{arabic}</p>
        </button>


    )
}

export default BookCard