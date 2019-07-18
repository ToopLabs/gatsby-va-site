import React from 'react'
import { Link } from 'gatsby'
import thaiRescueThumb from '../images/2018-thai-cave-rescue-thumb.jpg'

import './preview.css'

const Preview = () =>
<section className="preview">
    <h2>
        Stories in the region
    </h2>
    <p>
        2000+ Tweets. 200+ Live Stories. 50+ Published Articles.
    </p>
    <ul className="list">
        <Link className="item" to="/2018-thai-cave-rescue">
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
        </Link>
        <Link className="item" to="/2018-thai-cave-rescue">
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
        </Link>
        <Link className="item" to="/2018-thai-cave-rescue">
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
        </Link>
    </ul>
    <Link className="link" to="/tv">Browse all stories →</Link>
</section>



export default Preview;