import './loadingPage.css'
import loaderImg from '../../assets/loader.svg';

function loadingPage() {
    return (
        <section className='loadingPage'>
            <div className="loadingBackground">
                <img src={loaderImg} alt='loader image' />
            </div>
        </section>
    )
}

export default loadingPage