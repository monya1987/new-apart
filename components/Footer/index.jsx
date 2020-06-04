import React from 'react';
import css from "./Footer.module.scss"

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div>
                <a className={css.phone} href="tel:+380972731520">+38 (097) 273 15 20</a>
                <span className={css.copyright}>© 2020</span>
            </div>
        </footer>
    );
}