import React from "react";
import './Home.css';
import headerImg from "../../components/navigate/assets/room-img.png";
import HeaderRoomImg from "../../components/headerRoomImg/HeaderRoomImg";
import RoomsList from "../../components/roomsList/RoomsList";
import Deal from "../../components/deal/Deal";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <HeaderRoomImg img={headerImg}/>
                <section className="section">
                    {/*<SearchData/>*/}
                    <RoomsList/>
                    <Deal/>
                </section>
            </div>
        );
    }
}

export default Home;

