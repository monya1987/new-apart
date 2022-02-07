import React from 'react';
import css from "./Top.module.scss";
import { Modal } from 'react-responsive-modal';
import ModalForm from '../ModalForm'
import * as data from '../../content/data';

export default class Why extends React.Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div className={css.mainBg}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className={css.indexPageBlock}>
                                <h1 className={css.h1}>Отдел продаж ЖК <span>«{data.BUILDING_NAME}»</span></h1>
                                <p>Черноморская Ривьера</p>
                                <button onClick={this.onOpenModal}
                                        className="btn btn-lg btn-success">Забронировать квартиру
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className={css.oplata}>
                                <iframe src={`https://www.youtube.com/embed/vRrKfev33Ns?controls=0&showinfo=0&modestbranding=0&autohide=1`} frameBorder="0"
                                        allow="autoplay; encrypted-media" allowFullScreen />
                                {/*<p>Условия поэтапной оплаты на старте продаж:</p>*/}
                                {/*<ul>*/}
                                {/*    <li>1й взнос 30% - удорожание остатка на 10%</li>*/}
                                {/*    <li>1й взнос 50% - остаток без удорожания</li>*/}
                                {/*    <li>1й взнос 70% - остаток без удорожания</li>*/}
                                {/*    <li>1й взнос 100% - скидка 10$ на м2</li>*/}
                                {/*</ul>*/}
                                {/*<p>Срок поэтапной оплаты 3 года</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <Modal open={open}  onClose={this.onCloseModal}  center>
                    <ModalForm onClose={this.onCloseModal} />
                </Modal>
            </div>
        );
    }
}