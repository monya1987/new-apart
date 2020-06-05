import React from 'react';
import css from "./Documents.module.scss"

export default function Documents() {
    return (
        <div className={css.documents}>
            <p className="h1">Документы</p>
            <div className="container">
                <div className="row justify-content-center row-cols-1">
                    <ul className={'list'}>
                        <li>Есть документы на земельный участок</li>
                        <li>Есть документы на строительство № ІУ 113200830461 от 17.03.2020</li>
                        <li>Есть лицензия генподрядчика ТОВ "Руником Инвест"</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}