import {Link} from "react-router-dom";
import './Navigate.css';
import home from './assets/home.png';
import rooms from './assets/rooms.png';
import icon from './assets/icon.png'

function Navigate() {
    return (
        <div className="container">
            <nav className="navbar">
                <div className="home">
                    <img src={home} alt="image"/>
                    <Link className="nav-link" to='/'>Paradise</Link>
                </div>
                <div>
                    <img src={rooms} alt="image"/>
                    <Link className="nav-link" to='/rooms'>Rooms & Suites</Link>
                </div>
                <div>
                    <img src={icon} alt="image"/>
                    <Link className="nav-link" to='/gallery'>Gallery</Link>
                </div>
                <div>
                    <img src={icon} alt="image"/>
                    <Link className="nav-link" to='/dining'>Dining</Link>
                </div>
                <div>
                    <img src={icon} alt="image"/>
                    <Link className="nav-link" to='/support'>Support</Link>
                </div>
                <div>
                    <img src={icon} alt="image"/>
                    <Link className="nav-link" to='/sign'>Sign In</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navigate;