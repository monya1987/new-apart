import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import css from "./Header.module.scss";
import classNames from 'classnames';
import * as data from '../../content/data';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../Logo';
import Phone from '../Phone';
export const MENU = [
    {
        name: 'О микрорайоне',
        link: 'about',
        isActive: true
    },
    {
        name: 'Преимущества',
        link: 'advantages',
        isActive: false
    },
    {
        name: 'Цены',
        link: 'prices',
        isActive: false
    },

    {
        name: 'О Застройщике',
        link: 'developer',
        isActive: false
    },
    {
        name: 'Строительство',
        link: 'progress',
        isActive: false
    },
    {
        name: 'Отдел продаж',
        link: 'contacts',
        isActive: false
    },
]

export default function Header({toggleMenu, open}) {
    const [menuOpened, setMenuOpened] = useState(open);
    const router = useRouter();
    const toggleBurger = () => {
        // setMenuOpened(!menuOpened);
        toggleMenu();
    };
    const [locationHash, setLocationHash] = useState('');
    const [mainMenu, setMainMenu] = useState(MENU);
    // const onScroll = () => {
    //     if (window.location.hash !== locationHash) {
    //         setLocationHash(window.location.hash)
    //     }
    // }

    // useEffect(() => {
    //     if (window.location.hash !== locationHash) {
    //         router.push(`/#${locationHash}`);
    //     }
    //     const preparedMenuState = MENU.map((item) => {
    //         item.isActive = item.link === locationHash;
    //         return item;
    //     });
    //     setMainMenu(preparedMenuState);
    // }, [locationHash])
    // useEffect(() => {
    //     onScroll();
    //     window.addEventListener('scroll', onScroll);
    // }, [])

    return (
    <header className={css.header}>
        <div className="container">
            <div className="row align-items-center row-cols-1">
                <div className="col col-sm-12 col-md-12 col-lg-6">
                    <div className={css.dropMenuWrap}>
                        <div onClick={toggleBurger} className={classNames(css.burgerBtn, {[css.active]: open})}><span /></div>
                        <Logo />
                    </div>
                </div>
                <div className="col col-sm-12 col-md-6 col-lg-6">
                    <div className={css.phoneWrap}>
                        <Phone />
                    </div>
                </div>
                <div className="col col-sm-12 col-md-12 col-lg-12">
                    <div className={css.mainMenu}>
                        {mainMenu.map((item) => {
                            return <ScrollLink
                                        activeClass={css.active}
                                        to={item.link}
                                        offset={-130}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        key={item.link}>
                                        {item.name}
                                    </ScrollLink>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}