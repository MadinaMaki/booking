import HeaderRoomImg from "../../components/headerRoomImg/HeaderRoomImg";
import headerImg from "../../components/navigate/assets/room-img.png";
import React, {useEffect, useState} from "react";
import './RoomPage.css';
import Reservation from "../../components/reservation/Reservation";
import {useParams} from "react-router-dom";
import axios from "axios";

import single from './assets/singleRoom/singleRoom.png';

function RoomPage() {
    const {_id} = useParams();
    const [room, setRoom] = useState([]);

    useEffect(function () {
        const url = `http://cepbep.ddns.net:2500/api/hotelDB/rooms/getRoomById/${_id}`;
        axios.get(url)
            .then((response) => {
                let data = response.data
                setRoom(data)
            });
    }, [_id])

    return (
        <div>
            <HeaderRoomImg img={headerImg}/>
            <section className="section">
                <div className="container">
                    {room && (
                        <div>
                            <div className="title">
                                <h1>{room.name}</h1>
                                <img className="room-main-photo" src={single} alt="image"/>
                                <p className="description">{room.description}</p>
                            </div>
                            <div className="room-info">
                                <div className="caption">
                                    <h2>more details</h2>
                                    <div className="details-list">
                                        <p>Adults: <span>{room.peopleCapacity}</span></p>
                                        <p>Price: <span>${room.price} per night</span></p>
                                        <p>Rooms: <span>{room.roomAmount}</span></p>
                                        <p>Beds: <span>two single beds</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <Reservation/>
                </div>
            </section>
        </div>
    )
}

export default RoomPage;