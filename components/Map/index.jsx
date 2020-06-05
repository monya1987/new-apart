import React from 'react';
import css from "./Map.module.scss"

export default function Map() {
    return (
        <div className={css.map}>
            <p className="h1">ЖК Аврора на карте</p>
            <p className="subHeader">г.Одесса, Малиновский район, ул. Героїв Крут (Валентины Терешковой), 27-А, 27-Б,
                27-Е</p>
            <div className="container">
                <div className="row justify-content-center row-cols-1">
                    <div className="col col-sm-12 col-md-8 col-lg-8">
                        <img className="lazy-img img-fluid" src="/images/map-avro-site.jpg"
                             alt="ЖК Аврора на карте"/>
                    </div>
                    <div className="col col-sm-12 col-md-4 col-lg-4">
                        <p><span>Отдел продаж:</span> ул. ген.Петрова 17/2</p>
                        <p><span>Телефон:</span> +38 (097) 273 15 20</p>
                    </div>
                </div>
            </div>
        </div>
    );
}