import {Route, Routes} from "react-router-dom";
import RouterLayout from "../components/routerLayout/RouterLayout";

import Home from "../pages/home/Home";
import Rooms from "../pages/rooms/Rooms";
import Gallery from "../pages/gallery/Gallery";
import Dining from "../pages/dining/Dining";
import Support from "../pages/support/Support";
import RoomPage from "../pages/roomPage/RoomPage";
import Deal from "../components/deal/Deal";
import SignIn from "../pages/signIn/SignIn";

function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<RouterLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='rooms' element={<Rooms/>}/>
                    <Route path='gallery' element={<Gallery/>}/>
                    <Route path='dining' element={<Dining/>}/>
                    <Route path='support' element={<Support/>}/>
                    <Route path='sign' element={<SignIn/>}/>
                    {/* Rooms */}
                    <Route path='single/:_id' element={<RoomPage/>}/>
                    <Route path='deals' element={<Deal/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default Router;