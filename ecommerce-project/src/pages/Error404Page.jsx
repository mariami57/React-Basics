import { Header } from "../components/Header";
import HomeIcon from '../assets/images/home-favicon.png';
import './Error404Page.css';

export function Error404Page({ cart }) {
    return (
        <>  
            <title>404 Page Not Found</title>
            <link rel="icon" type="image/svg+xml" href={HomeIcon} />

            <Header cart={cart}/>
            
            <div className="not-found-message">
                <h1>Page not found</h1>
            </div>
        </>
    )
}

