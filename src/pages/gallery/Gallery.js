import headerImg from "../../components/navigate/assets/room-img.png";
import HeaderRoomImg from "../../components/headerRoomImg/HeaderRoomImg";
import '..//gallery/Gallery.css';
import GalleryItem from "../../components/galleryItem/GalleryItem";

function Gallery() {
    return(
        <div>
            <HeaderRoomImg img={headerImg}/>
            <div className="container">
                <section className="section">
                    <div className="title">
                        <p>hotel "paradise"
                            <span> gallery</span>
                        </p>
                    </div>
                    <GalleryItem/>
                </section>
            </div>
        </div>
    )
}

export default Gallery;