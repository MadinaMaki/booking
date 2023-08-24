import './style.css';

function HeaderRoomImg(props) {
    return (
        <div className="header-img">
            <img src={props.img} alt="image"/>
        </div>
    )
}

export default HeaderRoomImg;