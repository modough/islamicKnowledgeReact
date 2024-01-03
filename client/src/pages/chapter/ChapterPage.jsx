import './chapterPage.css';
import { useParams } from 'react-router-dom';
import { fetchDb } from '../../data/fetchJson';
import { useState } from 'react';
import arrow from '../../assets/arrow.svg';

const ChapterPage = () => {
    const { name, id } = useParams()
    const data = fetchDb(name)
    const { hadiths } = data;
    const chapterHadiths = hadiths.filter(hadith => hadith.chapterId === parseInt(id));
    const chapterHadithsLength = chapterHadiths.length;
    const [clicked, setClicked] = useState(hadiths[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollRight = () => {
        if (currentIndex + 1 >= chapterHadithsLength) {
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
            setCurrentIndex(chapterHadithsLength - 1);
            setClicked(hadiths[chapterHadithsLength - 1]);
            console.log(hadiths[chapterHadithsLength - 1])
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
        <section className='chapterPage bg' >
            <div
                key={clicked.id}
                className='chapterPage-container flex items-center w-auto '

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
                        {`Hadiths ${name}, Hadith n° ${clicked.id}`}
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
                        {`${currentIndex + 1} of ${chapterHadithsLength}`}
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
        </section >
    )
};

export default ChapterPage;