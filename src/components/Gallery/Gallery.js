import React from 'react'
import Form from "../common/Form";

import "./styles.css";

const getSubarray = (array) => {
    let subarray = [[], [], []];

    for(let i = 0; i < array.length; i ++) {
        subarray[i % 3].push(array[i]);
    }

    return subarray;
}

function Gallery() {
    const images = [
        '/img/gallery-1.jpg',
        '/img/window1.jpg',
        '/img/gallery-2.jpg',
        '/img/window2.jpg',
        '/img/gallery-3.jpg',
        '/img/window3.jpg',
        '/img/gallery-4.jpg',
        '/img/window4.jpg',
        '/img/gallery-5.jpg',
        // '/img/window5.jpg',
        // '/img/window6.jpg',
        // '/img/window7.jpg',
        // '/img/window8.jpg',
        // '/img/window9.jpg',
        // '/img/window10.jpg',
        // '/img/window11.jpg',
        // '/img/window12.jpg',
    ]

    const list = getSubarray(images);

    const items1 = list[0].map((value, index) => 
        <img src={value} alt="" width="100%" key={`img1_${index}`} className="py-1"/>
    )

    const items2 = list[1].map((value, index) => 
        <img src={value} alt="" width="100%" key={`img2_${index}`} className="py-1"/>
    )

    const items3 = list[2].map((value, index) => 
        <img src={value} alt="" width="100%" key={`img3_${index}`} className="py-1"/>
    )

    return (
        <div className="container" style={{marginTop: '88px'}}>
            <img src="/img/background.png" alt="background" className="w-100" />

            <div className="row mt-5">
                <div className="col-lg-8">
                    <h2>Smooth Gallery</h2>
                    <div className="row">
                        <div className="column px-1">{items1}</div>
                        <div className="column px-1">{items2}</div>
                        <div className="column px-1">{items3}</div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-9 col-10 mt-3 mt-lg-0 mx-auto"><Form /></div>
            </div>
        </div>
    )
}

export default Gallery