import React from 'react';
import css from "./PlansFloor.module.scss"
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: '/images/1.jpg',
        thumbnail: '/images/1.jpg',
        originalAlt: 'Секция 1',
        description: 'Секция 1'
    },
    {
        original: '/images/2.jpg',
        thumbnail: '/images/2.jpg',
        originalAlt: 'Секция 2',
        description: 'Секция 2'
    },
    {
        original: '/images/3.jpg',
        thumbnail: '/images/3.jpg',
        originalAlt: 'Секция 3',
        description: 'Секция 3'
    },
    {
        original: '/images/4.jpg',
        thumbnail: '/images/4.jpg',
        originalAlt: 'Секция 4',
        description: 'Секция 4'
    },
    {
        original: '/images/5.jpg',
        thumbnail: '/images/5.jpg',
        originalAlt: 'Секция 5A и 5Б',
        description: 'Секция 5A и 5Б'
    },
    {
        original: '/images/6.jpg',
        thumbnail: '/images/6.jpg',
        originalAlt: 'Секция 6',
        description: 'Секция 6'
    },
];

export default function PlansFloor() {
    return (
        <div className={css.plansFloor}>
            <p className="h1">Планировки этажей по секциям в ЖК Аврора</p>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ImageGallery items={images} showPlayButton={false} showIndex={true} />
                    </div>
                </div>
            </div>
        </div>);
}