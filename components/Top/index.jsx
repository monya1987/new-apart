import React from 'react';
import classnames from 'classnames';
import css from "./Top.module.scss";
import { Modal } from 'react-responsive-modal';
import ModalForm from '../ModalForm'

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
                                <h1 className={css.h1}>Отдел продаж ЖК Аврора</h1>
                                <p>Новострой бизнес класса В Сердце Черемушек.</p>
                                <button onClick={this.onOpenModal}
                                        className="btn btn-lg btn-success">Забронировать квартиру
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className={css.oplata}>
                                <p>Условия поэтапной оплаты на старте продаж:</p>
                                <ul>
                                    <li>1й взнос 30% - удорожание остатка на 10%</li>
                                    <li>1й взнос 50% - остаток без удорожания</li>
                                    <li>1й взнос 70% - остаток без удорожания</li>
                                    <li>1й взнос 100% - скидка 10$ на м2</li>
                                </ul>
                                <p>Срок поэтапной оплаты 3 года</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal open={open}  center>
                    <ModalForm onClose={this.onCloseModal} />
                </Modal>
            </div>
        );
    }
}