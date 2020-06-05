import React from 'react';
import css from "./Developer.module.scss"

export default function Developer() {
    return (
        <div className={css.developer}>
            <p className="h1">О Застройщике</p>
            <div className="container">
                <div className="row justify-content-center row-cols-1">
                    <ul>
                        <li><span>Проект от</span> Руником Инвест (26 сданных ЖК в Одессе)</li>
                        <li><span>Заказчик строительства</span> ТОВ "ШТОРМ ДЖЕЙ.СІ."</li>
                        <li><span>Код ЕГРПОУ</span> 41469820</li>
                        <li><span>Адрес</span> Одеська обл., мисто Одеса, Приморський район, СТАРОБАЗАРНИЙ СКВЕР,
                            будинок 3, квартира 1
                        </li>
                        <li><span>Директор</span> Старосуд О.А.</li>
                    </ul>
                    <hr/>
                        <p>Среди прочих Руником Инвест уже построил в Одессе</p>
                        <ul>
                            <li>ЖК Радужный</li>
                            <li>ЖК RosenTal</li>
                        </ul>
                </div>
            </div>
        </div>
    );
}