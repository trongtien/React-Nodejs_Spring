import React, { useState } from 'react'
import Images from './../../contants/image'
import './style.scss'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CardImg
    // CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: Images.slider1,
        caption: 'Slide 1'
    },
    {
        src: Images.slider1,
        caption: 'Slide 2'
    },
    {
        src: Images.slider1,
        caption: 'Slide 3'
    }
];

const SliderComponent = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <CardImg className="img-slider" src={item.src} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}
export default SliderComponent;