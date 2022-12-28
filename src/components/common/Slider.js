import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

function Slider(props) {
    const items = props.items.map((value, index) => (
        <SwiperSlide key={`slider_${index}`}>
            <img src={ value } alt="background" />
        </SwiperSlide>
    ))
    return (
        <div>
            <Swiper
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
                576: {
                slidesPerView: 2,
                spaceBetween: 24
                },
                768: {
                slidesPerView: 3,
                spaceBetween: 24
                },
                1024: {
                slidesPerView: 4,
                spaceBetween: 24
                },
                1280: {
                slidesPerView: 5,
                spaceBetween: 24
                }
            }}
            className="mySwiper"
            >
            { items }
            </Swiper>
        </div>
    )
}

export default Slider