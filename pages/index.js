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

const schema = () => {
    return {__html: `{
                "@context":"http://schema.org",
                "@type":["Apartment","Product","PostalAddress"],
                "streetAddress":"Валентины Терешковой, 27-А, 27-Б, 27-Е",
                "image":["https://www.new-apart.od.ua/wp-content/themes/avrora/images/building/1.jpg", "https://www.new-apart.od.ua/wp-content/themes/avrora/images/building/2.jpg", "https://www.new-apart.od.ua/wp-content/themes/avrora/images/building/3.jpg", "https://www.new-apart.od.ua/wp-content/themes/avrora/images/building/4.jpg", "https://www.new-apart.od.ua/wp-content/themes/avrora/images/building/5.jpg"],
                "addressLocality":"Одесса",
                "addressRegion":"Одесская",
                "postalCode":65076,
                "name":"ЖК Аврора",
                "category":"Новостройки",
                "brand":"ШТОРМ ДЖЕЙ.СІ.",
                "url":"https://www.new-apart.od.ua/",
                "description":"Купить квартиру в новостройке Аврора в Одессе. Вся информация о Условиях покупки, Планировках квартир, Разрешениях на строительство, Акциях и тд. в ЖК Аврора",
                "releaseDate":"Конец строительства - Декабрь 2024",
                "offers":{"@type":"AggregateOffer",
                "priceCurrency":"USD",
                "availability":"https://schema.org/InStock",
                "offers":[
            {
                "@type":"Offer",
                "priceCurrency":"USD",
                "price":"27 750",
                "description":"Однокомнатные квартиры 37 в ЖК Аврора",
                "image":["https://www.new-apart.od.ua/wp-content/themes/avrora/images/1/1A.jpg"]
            },{
                "@type":"Offer",
                "priceCurrency":"USD",
                "price":"53 290",
                "description":"Двухкомнатные квартиры в ЖК Аврора",
                "image":["https://www.new-apart.od.ua/wp-content/themes/avrora/images/1/2.jpg"]
            },{
                "@type":"Offer",
                "priceCurrency":"USD",
                "price":"58 800",
                "description":"Трехкомнатные квартиры в ЖК Аврора",
                "image":["https://www.new-apart.od.ua/wp-content/themes/avrora/images/1/3.jpg"]
            }],
                "offerCount":"829 (1 дом)",
                "lowPrice":"700",
                "highPrice":"750"}}`};
};

export default function Home() {
  return (
    <main>
        <Head>
            <title>ЖК Аврора — Официальный партнер застройщика. Квартиры в ЖК Аврора в Одессе. </title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="ЖК Аврора. Купить квартиру в новостройке Одессы, Малиновский район, Черемушки. Квартиры от застройщика без комиссии и переплат!" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154882949-1" />
            <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-154882949-1');`}} />
        </Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={schema()} />
        <Top />
        <Prices />
        <Why />
        <PlansFloor />
        <Plans />
        <Description />
        <ProgressBuilding />
        <Map />
        <Developer />
        <About />
    </main>
  )
}
