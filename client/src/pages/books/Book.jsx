import './book.css';
import { Link, useParams } from 'react-router-dom';
import arrow from '../../assets/arrow.svg';
import { useState } from 'react';
import ChapterTitle from '../../components/chapterTitle/ChapterTitle';
import { fetchDb } from '../../data/fetchJson';

const BookComponent = () => {
    const { name } = useParams()
    const data = fetchDb(name)
    const { hadiths } = data;
    const hadithsLength = hadiths.length;
    const [clicked, setClicked] = useState(hadiths[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollRight = () => {
        if (currentIndex + 1 >= hadithsLength) {
            setCurrentIndex(0);
            setClicked(hadiths[0]);
            return;
        }
        const nextHadith = hadiths.filter((elmt) => {
            return hadiths.indexOf(elmt) === currentIndex + 1;
        })
        console.log(nextHadith[0])
        setCurrentIndex(currentIndex + 1);
        setClicked(nextHadith[0]);
    }

    const scrollLeft = () => {
        if (currentIndex === 0) {
            setCurrentIndex(hadithsLength - 1);
            setClicked(hadiths[hadithsLength - 1]);
            console.log(hadiths[hadithsLength - 1])
            return;
        }
        const prevHadith = hadiths.filter((elmt) => {
            return hadiths.indexOf(elmt) === currentIndex - 1;
        })
        console.log(prevHadith[0])
        setCurrentIndex(currentIndex - 1);
        setClicked(prevHadith[0]);
    }

    return (
        <section className='book  bg'>
            {data && data.hadiths.length <= 42 &&
                <div
                    key={clicked.id}
                    className='bookHadiths-container flex items-center w-auto '
                >
                    <div className='slider-container p-400'>
                        <p className={`${clicked.english.narrator === "" ? "" : 'slider-container-title fs-400'}`}>
                            {clicked.english.narrator}
                        </p>
                        <p>
                            {clicked.english.text}
                        </p>
                        <p>
                            {clicked.arabic}
                        </p>
                        <p className='reference'>
                            {`40 Hadiths ${name}, Hadith n° ${clicked.id}`}
                        </p>
                    </div>
                    <div className='slider gap-400' >
                        <button
                            style={{ background: 'transparent', border: 'none' }}
                            type=""
                            onClick={scrollLeft}
                        >
                            <img src={arrow} alt="" className='leftArrow' />
                        </button>
                        <p className='pagination'>
                            {`${currentIndex + 1} of ${hadithsLength}`}
                        </p>
                        <button
                            style={{ background: 'transparent', border: 'none' }}
                            type=""
                            onClick={scrollRight}
                        >
                            <img src={arrow} alt="" className='rightArrow' />
                        </button>
                    </div>
                </div>
            }
            <div className='chapterTitle-section'>
                <div className={`${data.hadiths.length <= 42 ? 'none' : 'chapterTitle-sectionDiv'}`}>
                    <p className='chapterTitle-section-info'> Please select a chapter</p>
                    {data && data.hadiths.length > 42 && data.chapters.map((data) => (
                        <div
                            key={data.id}
                            className={`${data.english === '' && data.arabic === '' ? 'none' : "chapterTitle-container"}`}>
                            <Link to={`${data.id}`} >
                                <ChapterTitle data={data} />
                            </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
        </section >
    )
};
export default BookComponent;