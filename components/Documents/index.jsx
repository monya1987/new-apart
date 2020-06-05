import React from 'react';
import css from "./Documents.module.scss"

export default function Documents() {
    return (
        <div className={css.documents}>
            <p className="h1">Документы</p>
            <div className="container">
                <div className="row justify-content-center row-cols-1">
                    <p className="document">Есть документы на земельный участок</p>
                    <p className="document">Есть документы на строительство № ІУ 113200830461 от 17.03.2020</p>
                    <p className="document">Есть лицензия генподрядчика ТОВ "Руником Инвест"</p>
                </div>
            </div>
        </div>
    );
}