import React from 'react';
import classnames from 'classnames';
import css from "./Why.module.scss";

export default function Why() {
    return (
        <div className={css.why}>
            <p className='h1'>Преимущества</p>
            <div className="container">
                <div className="row justify-content-center row-cols-1">
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={classnames(css.box, css.third)}>
                            <p className={css.descr}>
                                <strong>МЕСТОРАСПОЛОЖЕНИЕ</strong>
                                ЖК находится в 5 минутах от ТРЦ «Ривьера». В 10 минутах от пляжей, и набережной.
                            </p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={classnames(css.box, css.second)}>
                            <p className={css.descr}>
                                <strong>БЕЗОПАСНОСТЬ</strong>
                                Весь район будет оснащен системой видеонаблюдения, как по территории кварталов и улиц, так и внутри жилых домов. Также на территории района будет работать круглосуточная служба охраны.
                            </p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={classnames(css.box, css.first)}>
                            <p className={css.descr}>
                                <strong>СОБСТВЕННЫЙ ПАРК</strong>
                                На территории будет создан собственный парк, будут высажены деревья и сделаны зоны отдыха, где будет комфортно взрослым и детям.
                            </p>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={classnames(css.box, css.four)}>
                            <p className={css.descr}>
                                <strong>ТЕХНОЛОГИИ</strong>
                                Низкоэтажные дома из красного кирпича.
                                В каждом доме будет оборудована современная газовая котельная.
                                Все дома оборудованы бесшумными скоростными лифтами.
                            </p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={classnames(css.box, css.five)}>
                            <p className={css.descr}>
                                <strong>ДЕТСКИЙ САД</strong>
                                Предусмотрено строительство собственного детского сада, который будет построен за деньги девелопера и передан на баланс Фонтанской ОТГ.
                            </p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={classnames(css.box, css.six)}>
                            <p className={css.descr}>
                                <strong>ПАРКИНГИ</strong>
                                наземных многоуровневых паркингов с достаточным для комфортной жизни количеством парковочных мест. Также предусмотрены гостевые парковочные места для посетителей
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}