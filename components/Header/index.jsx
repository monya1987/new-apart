import React, { useEffect, useState } from 'react';
import Icon from '../Icons';
import css from "./Header.module.scss";
import classNames from 'classnames';
import * as data from '../../content/data';

const MENU = [
    {
        name: 'О микрорайоне',
        link: '#about',
        isActive: true
    },
    {
        name: 'Преимущества',
        link: '#advantages',
        isActive: false
    },
    {
        name: 'Цены',
        link: '#prices',
        isActive: false
    },

    {
        name: 'О Застройщике',
        link: '#developer',
        isActive: false
    },
    {
        name: 'Строительство',
        link: '#progress',
        isActive: false
    },
    {
        name: 'Контакты',
        link: '#contacts',
        isActive: false
    },
]

export default function Header() {
    const [menuOpened, setMenuOpened] = useState(false);
    const toggleBurger = () => {
        setMenuOpened(!menuOpened);
    };
    const [locationHash, setLocationHash] = useState('');
    const [mainMenu, setMainMenu] = useState(MENU);
    const onScroll = () => {
        if (window.location.hash !== locationHash) {
            setLocationHash(window.location.hash)
        }
    }

    useEffect(() => {
        const preparedMenuState = MENU.map((item) => {
            item.isActive = item.link === locationHash;
            return item;
        });
        setMainMenu(preparedMenuState);
    }, [locationHash])
    useEffect(() => {
        onScroll();
        window.addEventListener('scroll', onScroll);
    }, [])
    return (
    <header className={css.header}>
        <div className="container">
            <div className="row align-items-center row-cols-1">
                <div className="col col-sm-12 col-md-12 col-lg-6">
                    <div className={css.logoWrap}>
                        <div className={css.dropMenuWrap}>
                            <div onClick={toggleBurger} className={classNames(css.burgerBtn, {[css.active]: menuOpened})}><span /></div>
                        </div>
                        <div className={css.logo}>
                            <div>
                                <strong>{data.BUILDING_NAME}</strong>
                                <span>Официальный партнер</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col col-sm-12 col-md-6 col-lg-6">
                    <a className={css.phoneWrap} href={`tel:+${data.PHONE}`}>
                        <Icon name={'phone'} width={'50px'}  height={'50px'} />
                        <span>
                            Звоните прямо сейчас
                            <span className={css.phone} >
                                <span className={css.text}>+{data.PHONE_PRETTY}</span>
                            </span>
                        </span>
                    </a>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-12">
                    <div className={css.mainMenu}>
                        {mainMenu.map((item) => {
                            return <a href={item.link} onClick={() => setLocationHash(item.link)} className={item.isActive ? css.active : null} key={item.link}>{item.name}</a>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}