import './loadingPage.css'
import loaderImg from '../../assets/loader.svg';
import { block } from "million/react";

const LoadingPage = block(() => {
    return (
        <section className='loadingPage'>
            <div className="loadingBackground">
                <img src={loaderImg} alt='loader image' />
            </div>
        </section>
    )
})

export default LoadingPage