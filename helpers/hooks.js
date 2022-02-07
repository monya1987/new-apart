import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useAhcorWatcher = () => {
    const router = useRouter();
    const [locationHashState, setLocationHash] = useState('');
    useEffect(() => {
        // const currentPath = router.asPath.substring(1);
        // if (currentPath !== locationHashState) {
        //     setLocationHash(router.asPath.substring(1));
        //     console.log(locationHashState);
        // }
    }, [router]);
    return locationHashState;

    // useEffect(() => {
    //     const handleRouteChange = (url, { shallow }) => {
    //         console.log(
    //             `App is changing to ${url} ${
    //                 shallow ? 'with' : 'without'
    //             } shallow routing`
    //         )
    //     }
    //
    //     router.events.on('routeChangeStart', handleRouteChange)
    //
    //     // If the component is unmounted, unsubscribe
    //     // from the event with the `off` method:
    //     return () => {
    //         router.events.off('routeChangeStart', handleRouteChange)
    //     }
    // }, [])
}