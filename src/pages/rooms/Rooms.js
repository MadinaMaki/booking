import headerImg from '../../components/navigate/assets/room-img.png';
import HeaderRoomImg from '../../components/headerRoomImg/HeaderRoomImg';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Rooms.css';
import {Link} from 'react-router-dom';

function Rooms() {

    const [rooms, setRooms] = useState([]);

    const [filter, setFilter] = useState({
        minPrice: '',
        maxPrice: '',
        roomAmount: '',
        peopleCapacity: '',
    });

    useEffect(function () {
        const url = `http://cepbep.ddns.net:2500/api/hotelDB/rooms/postRoomFilter`;
        axios
            .post(url)
            .then((response) => {
                let data = response.data;
                setRooms(data);
            });
    }, []);

    function filterRooms() {
        const url = `http://cepbep.ddns.net:2500/api/hotelDB/rooms/postRoomFilter`;
        let data = {
            filter: {},
        };
        if (filter.minPrice !== '' || filter.maxPrice !== '') {
            data.filter.price = {};
            if (filter.minPrice !== '') {
                data.filter.price.$gt = filter.minPrice;
            }
            if (filter.maxPrice !== '') {
                data.filter.price.$lt = filter.maxPrice;
            }
        }
        if (filter.roomAmount !== '') {
            data.filter.roomAmount = filter.roomAmount;
        }
        if (filter.peopleCapacity !== '') {
            data.filter.peopleCapacity = filter.peopleCapacity;
        }
        axios
            .post(url, data).then((response) => {
            let data = response.data;
            setRooms(data);
        });
    }

    return (
        <div>
            <HeaderRoomImg img={headerImg}/>
            <div className="container">
                <section className="section">
                    <div className="filter">
                        <input
                            type="text"
                            value={filter.minPrice}
                            onChange={(event) => {
                                let newFilter = {...filter};
                                newFilter.minPrice = event.target.value;
                                setFilter(newFilter);
                            }}
                            placeholder="price (from)"
                        />
                        <input
                            type="text"
                            value={filter.maxPrice}
                            onChange={(event) => {
                                let newFilter = {...filter};
                                newFilter.maxPrice = event.target.value;
                                setFilter(newFilter);
                            }}
                            placeholder="price (to)"
                        />
                        <input
                            type="text"
                            value={filter.roomAmount}
                            onChange={(event) => {
                                let newFilter = {...filter};
                                newFilter.roomAmount = event.target.value;
                                setFilter(newFilter);
                            }}
                            placeholder="how many rooms..."
                        />
                        <input
                            type="text"
                            value={filter.peopleCapacity}
                            onChange={(event) => {
                                let newFilter = {...filter};
                                newFilter.peopleCapacity = event.target.value;
                                setFilter(newFilter);
                            }}
                            placeholder="how many people..."
                        />
                        <button onClick={filterRooms}>Filter</button>
                    </div>
                    {rooms.map((room) => {
                        return (
                            <Link key={room._id} to={`/single/${room._id}`} className="room-link">
                                <div className="room-info">
                                    <div className="card_item">
                                        <div className="card_inner">
                                            <div className="card_img">
                                                <img src={room.photosURL[0]} alt="1"/>
                                            </div>
                                            <div className="card_text">{room.name}</div>
                                        </div>
                                    </div>
                                    <div className="details-list">
                                        <p>Price: <span>${room.price} per night</span></p>
                                        <p>Rooms Count: <span>{room.roomAmount}</span></p>
                                        <p>Adults: <span>{room.peopleCapacity}</span></p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </section>
            </div>
        </div>
    );
}

// {
//   filter: {
//     price: {
//       $gt: ...,
//       $lt: ...,
//     },
//     roomAmount: ...,
//     peopleCapacity: ...,
//   },
// };

export default Rooms;