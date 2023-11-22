import { Link } from "react-router-dom"
import './errorPage.css';

function ErrorPage() {
    return (
        <div id="error-page">
            <h1>404</h1>
            <p className="error-message">Oups! That page doesn&apos;t exist.</p>
            <Link to='/'>
                <p className="homepage">Return to Homepage</p>
            </Link>
        </div>
    )
}

export default ErrorPage