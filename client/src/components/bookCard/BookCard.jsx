import './bookCard.css';


const BookCard = ({ book, setLink, arabic }) => {
    return (
        <section className="bookCard fs-400">
            <button
                className='bookCard-name'

            >
                <p>{book}</p>
                <p>{arabic}</p>
            </button>

        </section>
    )
}

export default BookCard