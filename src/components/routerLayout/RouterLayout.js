import { Outlet } from "react-router-dom";
import Navigate from "../navigate/Navigate";
import './RouterLayout.css';

function RouterLayout() {
    return (
        <div>
            <div className="header">
                <div className="container header-inner">
                    <Navigate/>
                </div>
                <h1>welcome to Paradise Hotel</h1>
            </div>
            <Outlet/>
        </div>
    )
}

export default RouterLayout;