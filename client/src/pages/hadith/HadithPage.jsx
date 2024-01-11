import { useState } from 'react'
import './hadithPage.css'
import PropTypes from 'prop-types'
import LoadingPage from '../loadingPage/LoadingPage';
import BookCard from '../../components/bookCard/BookCard';
import { hadithBooks } from '../../data/hadithBooksList';
import { Link } from 'react-router-dom';


const HadithPage = ({ allHadithData }) => {
    const [numOfCard, setNumOfCard] = useState(1)
    const sliceArray = allHadithData?.data?.slice(0, numOfCard)
    const loadCard = () => {
        setNumOfCard(numOfCard + 1)
    }

    return (
        !sliceArray ? <LoadingPage /> :
            <section className='hadithPage bg '>
                <div className='hadithPage-top'>
                    {sliceArray?.map((elmt) => {
                        return (
                            <div key={elmt.id} className='hadith-container p-300' >
                                <button className='fs-400 load' onClick={loadCard}>Click to load another one !</button>
                                <h3 className='text-2xl font-bold'>{elmt.title}</h3>
                                <p>{elmt.hadith}</p>
                                <p className='font-bold'>{`${elmt.book}, Number: ${elmt.hadithNumberArabic}`}</p>
                            </div>)
                    }).pop()}
                </div>
                <div className='hadithPage-bottom'>
                    <div className='hadithPage-bottom-container'>
                        <p className='bottom-paragraph fs-400'>List of Books</p>
                        <div className='books-container p-300'>
                            {hadithBooks.map((book) => {
                                return (
                                    <Link key={book.key} to={`${book.key}`}>
                                        <BookCard
                                            key={book.key}
                                            book={book.name}
                                            arabic={book.arabic}
                                        />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section >
    )
}
HadithPage.propTypes = {
    allHadithData: PropTypes.object,
    collectionData: PropTypes.object,
}
export default HadithPage