import React from 'react';
import css from "./Description.module.scss"
import classnames from 'classnames';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: '/images/building/1.jpg',
        thumbnail: '/images/building/1.jpg',
    },
    {
        original: '/images/building/2.jpg',
        thumbnail: '/images/building/2.jpg',
    },
    {
        original: '/images/building/3.jpg',
        thumbnail: '/images/building/3.jpg',
    },
    {
        original: '/images/building/4.jpg',
        thumbnail: '/images/building/4.jpg',
    },
    {
        original: '/images/building/5.jpg',
        thumbnail: '/images/building/5.jpg',
    },
];


export default class Description extends React.Component {
    render() {
        return (
            <div className={css.description}>
                <p className="h1">Характеристики и Визуализация ЖК Аврора</p>
                <div className="container">
                    <div className="row justify-content-center row-cols-1">
                        <div className="col">
                            <ImageGallery items={images} showPlayButton={false} showIndex={true} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center row-cols-1">
                        <div className="col col-sm-12 col-md-6 col-lg-6">
                            <br/><br/>
                            <ul className='list'>
                                <li><span>Количество домов:</span> 1</li>
                                <li><span>Количество секций:</span> 6</li>
                                <li><span>Количество квартир:</span> 829</li>
                                <li><span>Этажность домов:</span> 24</li>
                                <li><span>Паркинг:</span> подземный</li>
                            </ul>
                        </div>
                        <div className="col col-sm-12 col-md-6 col-lg-6">
                            <br/><br/>
                            <ul className='list'>
                                <li><span>Технология строительства:</span> монолитно-каркасная</li>
                                <li><span>Отопление:</span> автономное (в доме)</li>
                                <li><span>Высота потолков:</span> 2,8 м (от пола до потолка)</li>
                                <li><span>Закрытая территория:</span> от авто и посторонних</li>
                                <li><span>Состояние квартиры:</span> без отделки</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}