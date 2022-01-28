import React from 'react';
import css from "./Footer.module.scss"

export default function Footer() {
    return (
        <footer className={css.footer}>
            <span className={css.copyright}>© «Сады Ривьеры» 2022</span>
        </footer>
    );
}