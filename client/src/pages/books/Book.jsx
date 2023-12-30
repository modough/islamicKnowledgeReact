import './book.css';
import qudsi from '../../../public/qudsi.json';
import nawawi from '../../../public/nawawi.json';
import shahwaliullah from '../../../public/shahwaliullah.json';
import bulugh_almaram from '../../data/json/bulugh_almaram.json';
import riyad_assalihin from '../../data/json/riyad_assalihin.json';
import { Link, useParams } from 'react-router-dom';
import arrow from '../../assets/arrow.svg';
import { useState } from 'react';
import ChapterTitle from '../../components/chapterTitle/ChapterTitle';

const BookComponent = () => {
    const { name } = useParams()

    const fetchDb = () => {
        if (name === 'qudsi') {
            return qudsi
        }
        if (name === 'shahwaliullah') {
            return shahwaliullah
        }
        if (name === 'bulugh_almaram') {
            return bulugh_almaram
        }
        if (name === 'riyad_assalihin') { return riyad_assalihin }
        if (name === 'nawawi') { return nawawi }

    }
    const data = fetchDb()
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
        <section className='book p-1300 p-498 bg'>

            {data && data.hadiths.length <= 42 &&
                <div
                    key={clicked.id}
                    className=' flex items-center w-auto '
                    style={{ width: '100%', padding: '200px 0', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '20px' }}
                >
                    <div className='slider gap-400' >
                        <button
                            style={{ background: 'transparent', border: 'none' }}
                            type=""
                            onClick={scrollLeft}
                        >
                            <img src={arrow} alt="" className='leftArrow' />
                        </button>
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
                        <button
                            style={{ background: 'transparent', border: 'none' }}
                            type=""
                            onClick={scrollRight}
                        >
                            <img src={arrow} alt="" className='rightArrow' />
                        </button>
                    </div>

                    <p className='pagination'>
                        {`${currentIndex + 1}/${hadithsLength}`}
                    </p>

                </div>
            }
            <div className="chapterTitle-container">
                {data && data.hadiths.length > 42 && data.chapters.map((data) => (
                    <Link key={data.id} to={`${data.id}`} >

                        <ChapterTitle data={data} />

                    </Link>
                )
                )}
            </div>


        </section >
    )


};

export default BookComponent;