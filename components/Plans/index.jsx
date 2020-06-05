import React from 'react';
import classnames from 'classnames';
import css from "./Plans.module.scss"
import ImageGallery from 'react-image-gallery';

const images1 = [
    {
        original:  '/images/1/1C.jpg',
        thumbnail: '/images/1/1C.jpg',
        originalAlt: 'Секция 1. Планировка 1-А',
        description: 'Секция 1. Планировка 1-А',
    },
    {
        original:  '/images/1/1D.jpg',
        thumbnail: '/images/1/1D.jpg',
        originalAlt: 'Секция 1. Планировка 1-Б',
        description: 'Секция 1. Планировка 1-Б',
    },
    {
        original:  '/images/1/1A.jpg',
        thumbnail: '/images/1/1A.jpg',
        originalAlt: 'Секция 1. Планировка 1-В',
        description: 'Секция 1. Планировка 1-В',
    },
    {
        original:  '/images/1/1B.jpg',
        thumbnail: '/images/1/1B.jpg',
        originalAlt: 'Секция 1. Планировка 1-Г',
        description: 'Секция 1. Планировка 1-Г',
    },
    {
        original:  '/images/2/1C.jpg',
        thumbnail: '/images/2/1C.jpg',
        originalAlt: 'Секция 2. Планировка 1-А',
        description: 'Секция 2. Планировка 1-А',
    },
    {
        original:  '/images/2/1D.jpg',
        thumbnail: '/images/2/1D.jpg',
        originalAlt: 'Секция 2. Планировка 1-Б',
        description: 'Секция 2. Планировка 1-Б',
    },
    {
        original:  '/images/3/1A.jpg',
        thumbnail: '/images/3/1A.jpg',
        originalAlt: 'Секция 2. Планировка 1-В',
        description: 'Секция 2. Планировка 1-В',
    },
    {
        original:  '/images/1/1B.jpg',
        thumbnail: '/images/1/1B.jpg',
        originalAlt: 'Секция 2. Планировка 1-Г',
        description: 'Секция 2. Планировка 1-Г',
    },
    {
        original:  '/images/3/1B.jpg',
        thumbnail: '/images/3/1B.jpg',
        originalAlt: 'Секция 3. Планировка 1-А',
        description: 'Секция 3. Планировка 1-А',
    },
    {
        original:  '/images/3/1C.jpg',
        thumbnail: '/images/3/1C.jpg',
        originalAlt: 'Секция 3. Планировка 1-Б',
        description: 'Секция 3. Планировка 1-Б',
    },
    {
        original:  '/images/4/1A.jpg',
        thumbnail: '/images/4/1A.jpg',
        originalAlt: 'Секция 3. Планировка 1-В',
        description: 'Секция 3. Планировка 1-В',
    },
    {
        original:  '/images/4/1B.jpg',
        thumbnail: '/images/4/1B.jpg',
        originalAlt: 'Секция 4. Планировка 1-А',
        description: 'Секция 4. Планировка 1-А',
    },
    {
        original:  '/images/5/1A.jpg',
        thumbnail: '/images/5/1A.jpg',
        originalAlt: 'Секция 4. Планировка 1-Б',
        description: 'Секция 4. Планировка 1-Б',
    },
    {
        original:  '/images/5/1B.jpg',
        thumbnail: '/images/5/1B.jpg',
        originalAlt: 'Секция 5. Планировка 1-А',
        description: 'Секция 5. Планировка 1-А',
    },
    {
        original:  '/images/6/1A.jpg',
        thumbnail: '/images/6/1A.jpg',
        originalAlt: 'Секция 5. Планировка 1-Б',
        description: 'Секция 5. Планировка 1-Б',
    },
    {
        original:  '/images/1/1A.jpg',
        thumbnail: '/images/1/1A.jpg',
        originalAlt: 'Секция 6. Планировка 1-А',
        description: 'Секция 6. Планировка 1-А',
    },
    {
        original:  '/images/6/1B.jpg',
        thumbnail: '/images/6/1B.jpg',
        originalAlt: 'Секция 6. Планировка 1-Б',
        description: 'Секция 6. Планировка 1-Б',
    },
    {
        original:  '/images/6/1C.jpg',
        thumbnail: '/images/6/1C.jpg',
        originalAlt: 'Секция 6. Планировка 1-В',
        description: 'Секция 6. Планировка 1-В',
    },
];

const images2 = [
    {
        original: '/images/1/2.jpg',
        thumbnail: '/images/1/2.jpg',
        originalAlt: 'Секция 1. Планировка 2-А',
        description: 'Секция 1. Планировка 2-А'
    },
    {
        original: '/images/2/2A.jpg',
        thumbnail: '/images/2/2A.jpg',
        originalAlt: 'Секция 2. Планировка 2-А',
        description: 'Секция 2. Планировка 2-А'
    },
    {
        original: '/images/2/2B.jpg',
        thumbnail: '/images/2/2B.jpg',
        originalAlt: 'Секция 2. Планировка 2-Б',
        description: 'Секция 2. Планировка 2-Б'
    },
    {
        original: '/images/3/2A.jpg',
        thumbnail: '/images/3/2A.jpg',
        originalAlt: 'Секция 3. Планировка 2-А',
        description: 'Секция 3. Планировка 2-А'
    },
    {
        original: '/images/3/2B.jpg',
        thumbnail: '/images/3/2B.jpg',
        originalAlt: 'Секция 3. Планировка 2-Б',
        description: 'Секция 3. Планировка 2-Б'
    },
    {
        original: '/images/4/2A.jpg',
        thumbnail: '/images/4/2A.jpg',
        originalAlt: 'Секция 4. Планировка 2-А',
        description: 'Секция 4. Планировка 2-А'
    },
    {
        original: '/images/4/2B.jpg',
        thumbnail: '/images/4/2B.jpg',
        originalAlt: 'Секция 4. Планировка 2-Б',
        description: 'Секция 4. Планировка 2-Б'
    },
    {
        original: '/images/5/2A.jpg',
        thumbnail: '/images/5/2A.jpg',
        originalAlt: 'Секция 5. Планировка 2-А',
        description: 'Секция 5. Планировка 2-А'
    },
    {
        original: '/images/5/2B.jpg',
        thumbnail: '/images/5/2B.jpg',
        originalAlt: 'Секция 5. Планировка 2-Б',
        description: 'Секция 5. Планировка 2-Б'
    },
    {
        original: '/images/6/2.jpg',
        thumbnail: '/images/6/2.jpg',
        originalAlt: 'Секция 6. Планировка 2-А',
        description: 'Секция 6. Планировка 2-А'
    },
];

const images3 = [
    {
        original: '/images/1/3.jpg',
        thumbnail: '/images/1/3.jpg',
        originalAlt: 'Секция 1. Планировка 3-А',
        description: 'Секция 1. Планировка 3-А'
    },
    {
        original: '/images/3/3.jpg',
        thumbnail: '/images/3/3.jpg',
        originalAlt: 'Секция 3. Планировка 3-А',
        description: 'Секция 3. Планировка 3-А'
    },
    {
        original: '/images/6/3A.jpg',
        thumbnail: '/images/6/3A.jpg',
        originalAlt: 'Секция 6. Планировка 3-А',
        description: 'Секция 6. Планировка 3-А'
    },
    {
        original: '/images/6/3B.jpg',
        thumbnail: '/images/6/3B.jpg',
        originalAlt: 'Секция 6. Планировка 3-Б',
        description: 'Секция 6. Планировка 3-Б'
    },
];

export default function Plans() {
    return (
        <div className={css.plans}>
            <p className="h1">Планировки квартир в Авроре</p>
            <div className="container">
                <div className="row justify-content-center row-cols-1">
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <p className={css.title}>Однокомнатные</p>
                        <ImageGallery items={images1} showPlayButton={false} showIndex={true} />
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <p className={css.title}>Двухкомнатные</p>
                        <ImageGallery items={images2} showPlayButton={false} showIndex={true} />
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <p className={css.title}>Трехкомнатные</p>
                        <ImageGallery items={images3} showPlayButton={false} showIndex={true} />
                    </div>
                </div>
            </div>
        </div>
    );
}