import React from 'react';
import css from "./Developer.module.scss"
import Image from 'next/image';

export default function Developer() {
    return (
        <div className={css.developer}>
            <p className="h1">Застройщик</p>
            <div className="container">
                <div className="row justify-content-center row-cols-1">
                    <div className="col col-sm-12 col-md-6">
                        <Image
                            alt="Жилой район «САДЫ РИВЬЕРЫ»"
                            src="/images/pasport.jpg"
                            layout="responsive"
                            width={800}
                            height={450}
                        />
                        <br/>

                    </div>
                    <div className="col col-sm-12 col-md-6">
                        <p className={css.title}>Одеком Девелопмент</p>
                        <ul className={'list'}>
                            <li><span>Проект:</span> Жилой район «Сады Ривьеры»</li>
                            <li><span>Заказчик строительства:</span> ООО "КООПЕРАТИВ "РИВЬЕРА СИТИ"</li>
                            <li><span>Адрес:</span> Одесская область, с. Фонтанка, ул. Чехова, 1</li>
                        </ul>
                        <ul className={'list'}>
                            <li>Схема финансирования - Договор купли-продажи имущественных прав</li>
                            <li>Есть документы на земельный участок</li>
                            <li>Есть документы на строительство № ІУ115160711333 от 26.02.2021</li>
                            <li>Есть лицензия генподрядчика ООО "СИТИ МИСЬК БУД"</li>
                            <li>Градостроительные условия №13-06/005/21-Ф от 15.06.2021</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <p style={{textAlign:'center'}}>Среди прочих застройщик "Одеком Девелопмент" уже построил в Одессе - "Таировские Сады", "ЖК Аква марин" и другие большие проекты.</p>
        </div>
    );
}