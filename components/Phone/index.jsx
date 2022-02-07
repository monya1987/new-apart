import React from 'react';
import css from "./Phone.module.scss";
import Icon from '../Icons';
import * as data from '../../content/data';

export default function Phone({color='#79B75E', subText= true}) {
    return (
        <a className={css.phoneWrap} href={`tel:+${data.PHONE}`}>
            <Icon style={{fill: color}} name={'phone'} width={'50px'}  height={'50px'} />
            <span>
                {subText && 'Звоните прямо сейчас'}
                <span className={css.phone} >
                    <span style={{color: color}} className={css.text}>+{data.PHONE_PRETTY}</span>
                </span>
            </span>
        </a>
    );
}