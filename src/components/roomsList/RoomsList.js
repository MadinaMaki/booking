import Offer from '../offer/Offer';
import './RoomsList.css';
import {Link} from 'react-router-dom';
import {Outlet} from 'react-router-dom';

import RoomListButton from '../../ui/roomListButton/RoomListButton';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import About from "../about/About";

function RoomsList() {
    const [rooms, setRooms] = useState([]);
    const [searchData, setSearchData] = useState('');

    useEffect(function () {
        const url = `http://cepbep.ddns.net:2500/api/hotelDB/rooms/getAllRooms`;
        axios.get(url).then((response) => {
            let data = response.data.payload;
            setRooms(data);
        });
    }, []);

    return (
        <>
            <About/>
            <div className="home-page-container">
                <Offer title="Special Offer"/>
            </div>
            <div className='rooms-list'>
                <Offer title='Best Offer'/>
                <nav className='rooms-list-navbar'>
                    <input
                        className="search"
                        placeholder='Search...'
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                    />
                    {rooms.map((room) => {
                        if (room.name.includes(searchData)) {
                            return (
                                <div key={room._id}>
                                    <Link to={`/single/${room._id}`} className='rooms-list-link'>
                                        <div className='left'>
                                            <img alt='' className='preview-img' src={room.photosURL[0]}/>
                                            <p>{room.name}</p>
                                        </div>
                                        <RoomListButton/>
                                    </Link>
                                    <hr/>
                                </div>
                            );
                        }
                    })}
                </nav>
                <Outlet/>
            </div>
        </>
    );
}

export default RoomsList;