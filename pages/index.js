import Head from 'next/head'
import Top from '../components/Top';
import Why from '../components/Why';
import PlansFloor from '../components/PlansFloor';
import Prices from '../components/Prices';
import Plans from '../components/Plans';
import Description from '../components/Description';
import ProgressBuilding from '../components/ProgressBuilding';
import Map from '../components/Map';
import Developer from '../components/Developer';
import About from '../components/About';
import * as data from '../content/data';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -60, scrollDuration: 200, keepLastAnchorHash: true});

export default function Home() {
  return (
    <main>
        <Head>
            <title>{data.BUILDING_NAME} — купить квартиру от застройщика в Одессе.</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Lato&family=Merriweather:wght@400;700&display=swap" rel="stylesheet"/>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content={`Недвижимость в ЖК ${data.BUILDING_NAME}. ✅ Цены без посредников ✅ Индивидуальные условия рассрочки 🎁 Акции и скидки`} />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154882949-1" />
            <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-154882949-1');`}} />
        </Head>
        <Top />
        <ScrollableAnchor id={'about'}><div><About /></div></ScrollableAnchor>
        <ScrollableAnchor id={'advantages'}><div><Why /></div></ScrollableAnchor>
        <ScrollableAnchor id={'prices'}><div><Prices /></div></ScrollableAnchor>
        {/*<ScrollableAnchor id={'buildingProgress'}><div><PlansFloor /></div></ScrollableAnchor>*/}
        {/*<ScrollableAnchor id={'infrastructure'}><div><Plans /></div></ScrollableAnchor>*/}
        <ScrollableAnchor id={'developer'}><div><Developer /></div></ScrollableAnchor>
        <ScrollableAnchor id={'progress'}><div><ProgressBuilding /></div></ScrollableAnchor>
        <ScrollableAnchor id={'contacts'}><div><Map /></div></ScrollableAnchor>
    </main>
  )
}
