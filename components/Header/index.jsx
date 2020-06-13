import React from 'react';
import css from "./Header.module.scss"

export default function Home() {
    return (
    <header className={css.header}>
        <div className="container">
            <div className="row align-items-center row-cols-1">
                <div className="col col-sm-12 col-md-12 col-lg-5">
                    <div className={css.logo}>
                        <a href="/" className="">
                            <strong>ЖК Аврора</strong>
                            <span>Официальный партнер застройщика</span>
                        </a>
                    </div>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-7">
                    <div className={css.phoneWrap}>
                        <a className={css.phone} href="tel:+380972731520">
                            <span className={css.text}>+38 (097) 273 15 20</span>
                        </a>
                        <a className={css.phoneWrap+' btn'} href="tel:+380972731520">
                            <i className="fas fa-phone-alt" /> Бесплатный подбор</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}

письмо свд стартрек о новой архитектуре.
создать тикет
галерею прояснить.
залогать 2 митоса