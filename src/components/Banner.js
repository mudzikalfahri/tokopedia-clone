import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Banner() {
    return (
        <div className="relative md:w-4/5 mx-auto mt:3 md:mt-10 md:rounded-lg overflow-hidden">
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators
                showThumbs={false}
                interval={4000}>
                <div>
                    <img loading='lazy' src="https://i.ibb.co/ZTLYn3j/80493354-e708-4d8b-93ac-f134544510bb-jpg.webp"/>
                </div>
                <div>
                    <img loading='lazy' src="https://i.ibb.co/wLpxJSf/5867f98d-27c4-4b9f-8fce-ba45aa001ff2-jpg.webp"/>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
