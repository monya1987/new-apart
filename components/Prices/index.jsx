import React from 'react';
import classnames from 'classnames';
import css from "./Prices.module.scss"

export default function Prices() {
    return (
        <div className={css.prices}>
            <p className="h1">Цены на квартиры в Авроре</p>
            <div className="container">
                <div className="row justify-content-center row-cols-1">
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <p className={css.title}>Однокомнатные от <strong>750$</strong> м2</p>
                        <div className={css.box}>
                            <div>
                                <p>Квартиры от <u>$27, 750</u></p>
                                <p>Метраж от 37 до 48 м2</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <p className={css.title}>Двухкомнатные от <strong>730$</strong> м2</p>
                        <div className={css.box}>
                            <div>
                                <p>Квартиры от <u>$53, 290</u></p>
                                <p>Метраж от 73 до 78 м2</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <p className={css.title}>Трехкомнатные от <strong>700$</strong> м2</p>
                        <div className={css.box}>
                            <div>
                                <p>Квартиры от <u>$58, 800</u>&#8236;</p>
                                <p>Метраж от 84 до 96 м2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}