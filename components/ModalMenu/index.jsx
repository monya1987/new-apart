import React, {useState} from 'react';
import { MENU } from '../Header';
import css from "./ModalMenu.module.scss";
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../Logo';
import Phone from '../Phone';
export default function ModalMenu(props) {
    return (
        <>
            <div className="modal-content" style={{border: 0}}>
                <div className="modal-header">
                    <h5 className="modal-title">&nbsp;</h5>
                </div>
                <div className="modal-body">
                    <div className={css.logoWrap}>
                        <Logo color="#79B75E" />
                    </div>
                    <div className={css.menuWrap}>
                        {MENU.map((item) => {
                            return <ScrollLink
                                className={css.menuItem}
                                to={item.link}
                                offset={-90}
                                spy={true}
                                smooth={true}
                                duration={500}
                                key={item.link}>
                                <span onClick={props.onClose}>{item.name}</span>
                            </ScrollLink>
                        })}
                        <div className={css.phoneWrap}>
                            <Phone color="#000" subText={false} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}