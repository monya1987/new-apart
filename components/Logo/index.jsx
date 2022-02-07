import React from 'react';
import css from "./Logo.module.scss";
import * as data from '../../content/data';

export default function Logo({color= '#ffffff'}) {
    return (
        <div className={css.logoWrap}>
            <div className={css.logo}>
                <div>
                    <strong style={{color: color}}>{data.BUILDING_NAME}</strong>
                    <span>Официальный партнер</span>
                </div>
            </div>
        </div>
    );
}