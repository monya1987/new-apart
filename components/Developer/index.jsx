import React from 'react';
import css from "./Developer.module.scss"

export default function Developer() {
    return (
        <div className={css.developer}>
            <div className="container">
                <div className="row justify-content-center row-cols-1">
                    <div className="col col-sm-12 col-md-6">
                        <p className={css.title}>Застройщик</p>
                        <ul className={'list'}>
                            <li><span>Проект:</span> Руником Инвест (26 сданных ЖК)</li>
                            <li><span>Заказчик строительства:</span> ТОВ "ШТОРМ ДЖЕЙ.СІ."</li>
                            <li><span>Код ЕГРПОУ:</span> 41469820</li>
                            <li><span>Адрес:</span> г. Одесса, Приморский район, Старобазарный Сквер, дом 3, кв. 1</li>
                            <li><span>Директор:</span> Старосуд О.А.</li>
                        </ul>
                        <hr/>
                        <p>Среди прочих застройщик "Руником Инвест" уже построил в Одессе - "ЖК Радужный", "ЖК RosenTal" и другие большие проекты.</p>
                    </div>
                    <div className="col col-sm-12 col-md-6">
                        <p className={css.title}>Документы</p>
                        <ul className={'list'}>
                            <li>Есть документы на земельный участок</li>
                            <li>Есть документы на строительство № ІУ 113200830461 от 17.03.2020</li>
                            <li>Есть лицензия генподрядчика ТОВ "Руником Инвест"</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}