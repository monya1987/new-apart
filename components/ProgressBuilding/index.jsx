import React from 'react';
import css from "./ProgressBuilding.module.scss"

export default function ProgressBuilding() {
    return (
        <div className={css.progressBuilding}>
            <div className="container">
                <div className="row justify-content-center row-cols-1">
                    <p className={css.title}>Начало строительства - Март 2020</p>
                    <div className="container">
                        <div className="row justify-content-center row-cols-1">
                            <div className="col col-sm-6 col-md-4 col-lg-4">
                                <p className={css.title2}>Июнь 2019 ведуться подготовительные работы.</p>
                                <img className="img-fluid"
                                     src="/images/progress/233890.jpg"
                                     alt="ЖК Аврора Июнь 2019"/>
                            </div>
                            <div className="col col-sm-6 col-md-4 col-lg-4">
                                <p className={css.title2}>Март 2020 начало строительства.</p>
                                <img className="img-fluid"
                                     src="/images/progress/271414.jpg"
                                     alt="ЖК Аврора Март 2020"/>
                            </div>
                        </div>
                    </div>
                    <p className={css.title}>Окончание строительства - Декабрь 2024</p>
                </div>
            </div>
        </div>
    );
}