import React from 'react';
import css from "./Map.module.scss"
import { Modal } from 'react-responsive-modal';
import ModalForm from '../ModalForm'
import Image from 'next/image';

export default class Prices extends React.Component {
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
            <div className={css.map}>
                <p className="h1">Отдел продаж:</p>
                <div className="container">
                    <div className="row justify-content-center row-cols-1">
                        <div className="col col-sm-12 col-md-8 col-lg-8">
                            <Image
                                alt="Отдел продаж «САДЫ РИВЬЕРЫ»"
                                src="/images/otdelprodaj.jpg"
                                layout="responsive"
                                width={1000}
                                height={666}
                            />

                        </div>
                        <div className="col col-sm-12 col-md-4 col-lg-4">
                            <p className={css.text}><span>Адрес:</span> Одесская область, c. Фонтанка <br/>ул. Чехова, 1</p>
                            <p className={css.text}><span>Телефон:</span> +38 (097) 273 15 20</p>
                            <p className={css.text}><span>График работы:</span><br/>пн-пт: 09:00 - 19:00<br/>   сб: 10:00 -
                                17:00</p>
                            <button onClick={this.onOpenModal} className="btn btn-lg btn-success">Перезвонить мне</button>
                        </div>
                    </div>
                </div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <ModalForm onClose={this.onCloseModal}/>
                </Modal>
            </div>
        );
    }
}