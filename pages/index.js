import React, { useState, useEffect } from 'react';
import { useAhcorWatcher } from '../helpers/hooks';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Top from '../components/Top';
import Why from '../components/Why';
import PlansFloor from '../components/PlansFloor';
import Prices from '../components/Prices';
import { Modal } from 'react-responsive-modal';
import ModalMenu from '../components/ModalMenu';
import * as css from '../components/ModalMenu/ModalMenu.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Plans from '../components/Plans';
import { withRouter } from 'next/router'
import Description from '../components/Description';
import ProgressBuilding from '../components/ProgressBuilding';
import Map from '../components/Map';
import Developer from '../components/Developer';
import About from '../components/About';
import * as data from '../content/data';
import { Element } from 'react-scroll';




function Wrapper() {
    const router = useRouter();
    const [contactDialogOpened, setContactDialogOpened] = useState(false);
    const [menuDialogOpened, setMenuDialogOpened] = useState(false);
    const toggleMenu = () => {
        setMenuDialogOpened(!menuDialogOpened);
    }

    const locationHash = useAhcorWatcher();
    console.log(locationHash);
    return (
    <main>
        <Header open={menuDialogOpened} toggleMenu={toggleMenu} />
        <Head>
            <title>{data.BUILDING_NAME} — купить квартиру от застройщика в Одессе.</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Lato&family=Merriweather:wght@400;700&display=swap" rel="stylesheet"/>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content={`Недвижимость в ЖК ${data.BUILDING_NAME}. ✅ Цены без посредников ✅ Индивидуальные условия рассрочки 🎁 Акции и скидки`} />
            {/*<script async src="https://www.googletagmanager.com/gtag/js?id=UA-154882949-1" />*/}
            {/*<script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-154882949-1');`}} />*/}
        </Head>
        <Top />
        <div id={'about'}><About /></div>
        <div id={'advantages'}><Why /></div>
        <div id={'prices'}><Prices /></div>
        <div id={'developer'}><Developer /></div>
        <div id={'progress'}><ProgressBuilding /></div>
        <div id={'contacts'}><Map /></div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Modal blockScroll={false} open={menuDialogOpened} classNames={{overlay: css.overlay, modal: css.modal}} onClose={toggleMenu} center>
            <ModalMenu onClose={toggleMenu} />
        </Modal>
        <Footer />
    </main>
    )
}

export default Wrapper;
