import React from 'react'
import { Link } from 'gatsby'
import thaiRescueThumb from '../images/2018-thai-cave-rescue-thumb.jpg'
import changingFaceVideo from '../videos/changing_face_240p.mp4'
import changingFaceThumb from '../images/changing_face_thumb.png'
import christmasCancelledThumb from '../images/christmas_cancelled_thumb.jpg'
import colivingGainsPopularityVideo from '../videos/co-living_gains_popularity.mp4'
import colivingGainsPopularityThumb from '../images/co-living_gains_popularity_thumb.png'
import bridgeThreatensDolphinsVideo from '../videos/bridge_threatens_dolphins.mp4'
import bridgeThreatensDolphinsThumb from '../images/bridge_threatens_dolphins_thumb.png'
import hongKongBooksellerVideo from '../videos/hong_kong_bookseller.mp4'
import hongKongBooksellerThumb from '../images/hong_kong_bookseller_thumb.png'

import './portfolio.css'

const Portfolio = () =>
<section id="portfolio" className="portfolio">
    <h2>Portfolio</h2>
    <ul className="list">
        <div className="item">
            <div className="thumb">
                <video muted poster={changingFaceThumb} controls loop preload="auto">
                    <source src={changingFaceVideo} type="video/mp4" media="all and (min-width:769px)" />
                </video>            </div>
            <div className="description">
                <div className="title">
                    Changing Face: China’s cosmetic surgery boom
                </div>
                <div className="body">
                    An in-depth look into the country's growing obsession with cosmetic surgery and the challenges that lie ahead for an industry laden with risks.
                </div>
                <div className="action">
                    CGTN - Presenter/Producer
                </div>
            </div>
        </div>
        <a className="item" href="https://www.aljazeera.com/ajimpact/christmas-cancelled-chinese-factories-feel-chill-trade-190627144329359.html">
            <div className="thumb">
                <img src={christmasCancelledThumb} />
            </div>
            <div className="description">
                <div className="title">
                    Christmas cancelled: Chinese factories feel chill of US trade war
                </div>
                <div className="body">
                    Existing and looming tariffs are shrinking production at US export-focused factories. Some are moving to Southeast Asia.
                </div>
                <div className="action">
                    AL JAZEERA - Writer
                </div>
                <div className="action">
                    See more →
                </div>
            </div>
        </a>
        {/*<Link className="item" to="/2018-thai-cave-rescue">
            <div className="thumb">
                <img src={thaiRescueThumb} />
            </div>
            <div className="description">
                <div className="title">
                    2018 Thai cave rescue
                </div>
                <div className="body">
                    The media village at Tham Luang cave is packed - there’s more than 1,000 of us - and yet the Thai volunteers here remain so patient and hospitable
                </div>
                <div className="action">
                    See more →
                </div>
            </div>
        </Link>*/}
        <div className="item">
            <div className="thumb">
                <video muted poster={colivingGainsPopularityThumb} controls loop preload="auto">
                    <source src={colivingGainsPopularityVideo} type="video/mp4" media="all and (min-width:769px)" />
                </video>            </div>
            <div className="description">
                <div className="title">
                    Co-living gains popularity amid housing crisis in Hong Kong
                </div>
                <div className="body">
                    As housing prices spiral in Hong Kong, young professionals are living in ever shrinking spaces.
                </div>
                <div className="action">
                    TRT WORLD - Correspondent
                </div>
            </div>
        </div>
        <div className="item">
            <div className="thumb">
                <video muted poster={bridgeThreatensDolphinsThumb} controls loop preload="auto">
                    <source src={bridgeThreatensDolphinsVideo} type="video/mp4" media="all and (min-width:769px)" />
                </video>            </div>
            <div className="description">
                <div className="title">
                    Bridge to China threatens Hong Kong's pink dolphin
                </div>
                <div className="body">
                    Hong Kong’s rare pink dolphins are battling for survival as building work on a 19-mile bridge linking the Asian financial hub with China disrupts the communication and feeding activities of the highly sociable animals.
                </div>
                <div className="action">
                    REUTERS - Correspondent
                </div>
            </div>
        </div>
        <div className="item">
            <div className="thumb">
                <video muted poster={hongKongBooksellerThumb} controls loop preload="auto">
                    <source src={hongKongBooksellerVideo} type="video/mp4" media="all and (min-width:769px)" />
                </video>            </div>
            <div className="description">
                <div className="title">
                    Hong Kong Booksellers: Gui Minhai reportedly abducted on holiday
                </div>
                <div className="body">
                    Hong Kong bookseller Gui Minhai had been free for only three months before being reportedly kidnapped for a second time. His disappearance while travelling in China adds to concerns over Beijing's growing influence in Hong Kong.
                </div>
                <div className="action">
                    TRT WORLD - Correspondent
                </div>
            </div>
        </div>
    </ul>
</section>



export default Portfolio;