import './SearchData.css';
import {useEffect, useState} from "react";
import axios from "axios";

function SearchData() {
    const [rooms, setRooms] = useState([]);
    const [formData, setFormData] = useState('');

    const [expanded, setExpanded] = useState(false);
    const [object, setObject] = useState([]);

    useEffect(function () {
        const url = `http://cepbep.ddns.net:2500/api/hotelDB/rooms/searchRooms/${formData}`;
        axios.get(url)
            .then((response) => {

                let data = response.data
                setRooms(data)
            });
    },)

    function dropDown() {
        setExpanded(function (){
            return !expanded;
        })
    }

    let dropLabel = [];
    for (let i = 0; i < rooms.length; i++) {

    }


    function searchData(event) {
        setFormData(function () {
            return event.target.value
        })
    }

    return (
        <div className="container">
            {/*<div className="dropDown" onClick={() => dropDown()}>{dropLabel}</div>*/}
            <form className="filter">
                <input type="text" value={formData}
                       onChange={(event) => searchData(event)}
                       placeholder="search room..."/>
                {rooms.map((room, index) => {
                    if(room.data.name.includes(formData)) {
                        return (
                            <div>
                                <div>{room.name}</div>
                            </div>
                        )
                    }
                })}
            </form>
        </div>
    )
}

export default SearchData;