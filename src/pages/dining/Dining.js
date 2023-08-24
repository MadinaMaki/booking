import HeaderRoomImg from "../../components/headerRoomImg/HeaderRoomImg";
import headerImg from './assets/room-img2.png';
import terrace from './assets/terrace.png';
import cocktail from './assets/cocktail.png';
import dessert from './assets/dessert.png';
import kitchen from './assets/kitchen.png';
import './Dining.css';

function Dining() {
    return (
        <div className="container">
            <div>
                <HeaderRoomImg img={headerImg}/>
            </div>
            <section className="section">
                <div className="banner">
                    <h1>dining hotel paradise</h1>
                    <p>Enjoy Food and Drinks Offered at hotel Hotel "Paradise"</p>
                    <h3>at this hotel</h3>
                </div>
                <div className="dining">
                    <div className="dining-inner img-container">
                        <img src={terrace} alt="image"/>
                        <div className="img-container">
                            <img src={cocktail} alt="image"/>
                            <img src={dessert} alt="image"/>
                        </div>
                    </div>
                    <div className="dining-inner">
                        <p>A combination of Chicago, burlesque
                            glamour and exquisite elegance,
                            Eclipse Restaurant holds true to
                            its name – meaning when the sun,
                            earth or moon cross paths to create
                            a special magic show. The quirky and
                            stylish interior is over-the-top in
                            the best way possible, boasting the
                            perfect blend of vibrant, modern
                            colours, plush velvet, wood and
                            custom furniture pieces – think
                            black and gold leopard and zebra
                            print dining chairs, crystal
                            chandeliers that make for a
                            glittering attraction and a myriad
                            of unique accessories to add the final
                            touches. Just like the proudly African
                            culture, the bright and colourful space
                            has been designed to dazzle and adds a
                            lot more than a little sparkle to the City of Gold.
                        </p>
                        <p>
                            Set to shake up Johannesburg’s dining scene,
                            at Eclipse Restaurant the excitement goes beyond
                            what’s on your plate. Hotel guests and visitors
                            can look forward to an eclectic à la carte menu
                            of flavourful dishes and invigorating cocktails
                            coupled with live entertainment on select evenings.
                        </p>
                        <p>
                            From live music to cabaret cavorts, burlesque
                            beauties and amazing theatrical acts, as you
                            enter into the magical world of delectable
                            cuisine, live entertainment and sumptuous design,
                            you enter into an enchanting experience. What’s
                            more, if you fancy a panorama with your meal,
                            you’ve come to the right place as the floor-to-ceiling
                            windows afford gorgeous city views. Choose between
                            the opulent dining room or bar area, or the sun-drenched
                            open terrace.
                        </p>
                    </div>
                </div>

                <div className="dining">
                    <div className="visit">Visit the Eclipse Restaurant</div>
                </div>

                <div className="dining">
                    <div className="dining-inner">
                        <p>
                            Planning a special date night or romantic
                            proposal? Looking for Ayia Napa restaurants
                            that combine the finest food with the dreamiest
                            atmosphere? You and your partner will be floating
                            on cloud nine the moment you enter Immenso.
                            Occupying a prime position on the hotel’s
                            rooftop, the sunsets here are what dreams are
                            made of. Just drink up the panoramic views and
                            whet your appetite as you peruse the menu featuring
                            the finest Nikkei cuisine. All dishes have been
                            inspired by Falser’s travels to Asia and Latin
                            America. Your senses will be delighted with every
                            bite under a blanket of sparkling stars.
                        </p>
                    </div>
                    <div className="dining-inner img-container">
                        <img src={kitchen} alt="image"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dining;