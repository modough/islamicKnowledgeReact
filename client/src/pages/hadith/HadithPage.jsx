import { useState } from 'react'
import './hadithPage.css'
import PropTypes from 'prop-types'
import LoadingPage from '../loadingPage/LoadingPage';



const HadithPage = ({ allHadithData }) => {
    const [numOfCard, setNumOfCard] = useState(1)

    const sliceArray = allHadithData?.data.slice(0, numOfCard)
    const loadCard = () => {
        setNumOfCard(numOfCard + 1)
    }
    return (
        !sliceArray ? <LoadingPage /> :
            <section className='hadithPage'>
                {sliceArray?.map((elmt) => {
                    return (
                        <div key={elmt.id} className='hadith-container'>
                            <h3 className='text-2xl font-bold'>{elmt.title}</h3>
                            <p>{elmt.hadith}</p>
                            <p className='font-bold'>{`${elmt.book}, Number: ${elmt.hadithNumberArabic}`}</p>
                        </div>)
                }).pop()}
                <button onClick={loadCard}>Load another one !</button>
            </section>
    )
}
HadithPage.propTypes = {
    allHadithData: PropTypes.object,
}
export default HadithPage