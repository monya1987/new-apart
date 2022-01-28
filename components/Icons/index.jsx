import React from 'react';
import Location from './icons/location.svg';
import Phone from './icons/phone.svg';
import Hart from './icons/hart.svg';
import Facebook from './icons/facebook.svg';
import Telegram from './icons/telegram.svg';
import Whatsapp from './icons/whatsapp.svg';
import Viber from './icons/viber.svg';
import Gift from './icons/gift.svg';
import Calc from './icons/calculations.svg';

export default function Icon({name, className, width = '20px', height = '20px', style, ...rest}) {
    let icon = null;
    const inlineStyles = { ...style, width, height };
    switch (name) {
        case 'gift':
            icon = <Gift className={className} style={inlineStyles} {...rest}/>;
            break;
        case 'calc':
            icon = <Calc style={inlineStyles} {...rest}/>;
            break;
        case 'location':
            icon = <Location style={inlineStyles} {...rest}/>;
            break;
        case 'phone':
            icon = <Phone style={inlineStyles} {...rest}/>;
            break;
        case 'hart':
            icon = <Hart style={inlineStyles} {...rest}/>;
            break;
        case 'viber':
            icon = <Viber style={inlineStyles} {...rest}/>;
            break;
        case 'telegram':
            icon = <Telegram style={inlineStyles} {...rest}/>;
            break;
        case 'facebook':
            icon = <Facebook style={inlineStyles} {...rest}/>;
            break;
        case 'whatsapp':
            icon = <Whatsapp style={inlineStyles} {...rest}/>;
            break;

    }

    return icon;
}
