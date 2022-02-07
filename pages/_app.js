import 'react-responsive-modal/styles.css';
import '../scss/styles.scss';


export default function MyApp({ Component, pageProps }) {
    return (
        <div className='index-wrapper'>
            <Component {...pageProps} />
        </div>
    )
}