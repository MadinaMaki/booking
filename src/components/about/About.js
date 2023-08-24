import './About.css';
import preview1 from './assets/aboutUs.jpg';
import preview2 from './assets/view.jpg';
import preview3 from './assets/mountain.jpg';

function About() {
    return (
        <div className="row">
            <h1>journey into the paradise</h1>
            <div className="preview">
                <div className="info-container">
                    <p>Before you head out on your next luxury travel adventure,
                        find destination guides from The Paradise to map out
                        your perfect stay.
                    </p>
                </div>
                <img className="preview-img" src={preview1} alt="preview"/>
            </div>
            <div className="preview">
                <div className="info-container">
                    <p>
                        Discover a new perspective on luxury travel.
                        Delve into the world of travel, style and culture
                        with the guidance of the experts at The Paradise.
                    </p>
                </div>
                <img className="preview-img" src={preview2} alt="preview"/>
            </div>
            <div className="preview">
                <div className="info-container">
                    <p>From far-flung destinations to local favorites,
                        find inspiration for your next great escape.
                    </p>
                </div>
                <img className="preview-img" src={preview3} alt="preview"/>
            </div>
        </div>
    )
}

export default About;