import './Support.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.png';
import headerImg from "../../components/routerLayout/assets/room-img.png";
import HeaderRoomImg from "../../components/headerRoomImg/HeaderRoomImg";

function Support() {
    return (
        <div>
            <HeaderRoomImg img={headerImg}/>
            <div className="section">
                <div className="container">
                    <div className="support">
                        <div className="info-container">
                            <p>
                                At Radisson Hotel Group we strive to be the
                                first choice in the mind of guests, owners and
                                talent. In our journey to achieve this, we
                                practice strong beliefs and actions that respect
                                the diversity of people, the community, ethics
                                and the plane
                            </p>
                            <p>
                                We are present in 120 countries worldwide with
                                nine distinctive brands covering five continents.
                                Together with our partners we continue to develop
                                new hotels and to generate synergies to go much further.
                            </p>
                            <p>
                                We are present in 120 countries worldwide with
                                nine distinctive brands covering five continents.
                                Together with our partners we continue to develop new
                                hotels and to generate synergies to go much further.
                            </p>
                        </div>
                        <img src={img1} alt="image"/>
                    </div>
                    <div className="support">
                        <img src={img2} alt="image"/>
                        <div className="info-container">
                            <p>
                                At Radisson Hotel Group we strive to be the
                                first choice in the mind of guests, owners and
                                talent. In our journey to achieve this, we
                                practice strong beliefs and actions that respect
                                the diversity of people, the community, ethics
                                and the plane
                            </p>
                            <p>
                                We are present in 120 countries worldwide with
                                nine distinctive brands covering five continents.
                                Together with our partners we continue to develop
                                new hotels and to generate synergies to go much further.
                            </p>
                            <p>
                                We are present in 120 countries worldwide with
                                nine distinctive brands covering five continents.
                                Together with our partners we continue to develop new
                                hotels and to generate synergies to go much further.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;