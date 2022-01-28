import 'react-responsive-modal/styles.css';
import '../scss/styles.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function MyApp({ Component, pageProps }) {
    return (
        <div className='index-wrapper'>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}