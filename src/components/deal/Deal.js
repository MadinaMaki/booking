import {Link} from "react-router-dom";
import './Deal.css';

function Deal() {
    return (
        <div className="yellow-box">
            <Link to='/rooms' className="nav-link">
                <p>Book your perfect deals</p>
                <div>book now</div>
            </Link>
        </div>
    )
}

export default Deal;