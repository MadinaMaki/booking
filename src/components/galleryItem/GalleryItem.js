import '..//galleryItem/GalleryItem.css';
import {useEffect, useState} from "react";
import axios from "axios";

function GalleryItem() {
    const [rooms, setRooms] = useState([])

    useEffect(function () {
        const url = `http://cepbep.ddns.net:2500/api/hotelDB/rooms/getAllRooms`;
        axios.get(url)
            .then((response) => {

                let data = response.data.payload
                setRooms(data)
            })
    }, [])

    return (
        <div>
            {rooms.map((room, index) => {
                return (
                    <div key={index} className="gallery row">
                        <div className="sub-title">
                            <p>{room.name}</p>
                        </div>
                        {room.photosURL.map((photo, index) => {
                            return (
                                <div key={index} className="room-img-container col-4">
                                    <img src={photo} alt="image"/>
                                </div>
                            )
                        })
                        }
                    </div>
                )
            })}

        </div>
    )
}

export default GalleryItem;