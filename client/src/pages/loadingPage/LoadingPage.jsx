import './loadingPage.css'
import loaderImg from '../../assets/loader.svg';


const LoadingPage = () => {
    return (
        <section className='loadingPage'>
            <div className="loadingBackground">
                <img src={loaderImg} alt='loader image' />
            </div>
        </section>
    )
}

export default LoadingPage