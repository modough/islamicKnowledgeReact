import { useState } from 'react'
import './hadithPage.css'
import PropTypes from 'prop-types'
import LoadingPage from '../loadingPage/LoadingPage';
import BookCard from '../../components/bookCard/BookCard';



const HadithPage = ({ allHadithData }) => {
    const [numOfCard, setNumOfCard] = useState(1)

    const sliceArray = allHadithData?.data?.slice(0, numOfCard)
    const loadCard = () => {
        setNumOfCard(numOfCard + 1)
    }
    return (
        !sliceArray ? <LoadingPage /> :
            <section className='hadithPage bg p-1600'>
                <div className='hadithPage-top'>
                    {sliceArray?.map((elmt) => {
                        return (
                            <div key={elmt.id} className='hadith-container p-300' >
                                <h3 className='text-2xl font-bold'>{elmt.title}</h3>
                                <p>{elmt.hadith}</p>
                                <p className='font-bold'>{`${elmt.book}, Number: ${elmt.hadithNumberArabic}`}</p>
                            </div>)
                    }).pop()}
                    <button className='fs-400' onClick={loadCard}>Load another one !</button>
                </div>
                <div className='hadithPage-bottom'>
                    <p className='fs-400'>List of Books</p>
                    <div className='books-container p-300'>
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                    </div>
                </div>
            </section>
    )
}
HadithPage.propTypes = {
    allHadithData: PropTypes.object,
}
export default HadithPage