import React from 'react';
import css from "./Prices.module.scss"
import Image from 'next/image';
import { Modal } from 'react-responsive-modal';
import ModalForm from '../ModalForm'

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
            <div className={css.prices}>
                <p className="h1">Цены от 620 у.е./м2</p>
                <div className="container">
                    <div className="row justify-content-center row-cols-1">
                        <div className="col col-sm-12 col-md-6 col-lg-4">
                            <div className={css.wrapper}>
                                <Image
                                    alt="Жилой район «САДЫ РИВЬЕРЫ»"
                                    src="/images/1room.jpg"
                                    layout="fixed"
                                    objectFit="contain"
                                    width={240}
                                    height={200}
                                />
                            </div>
                            <p className={css.title}>Однокомнатные</p>
                            <div className={css.box}>
                                <div>
                                    <p><strong>Цена</strong>: от 17,980 $</p>
                                    <p>Площадь: от 29,3 м2</p>
                                    <p>Первый взнос от: 10%</p>
                                    <p>Рассрочка: до сдачи дома (2 кв. 2023)</p>
                                    <button type="button" className="btn btn-block btn-outline-primary" onClick={this.onOpenModal}>
                                        Выбрать варианты
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-12 col-md-6 col-lg-4">
                            <div className={css.wrapper}>
                                <Image
                                    alt="Жилой район «САДЫ РИВЬЕРЫ»"
                                    src="/images/2room.jpg"
                                    layout="fixed"
                                    objectFit="contain"
                                    width={240}
                                    height={200}
                                />
                            </div>
                            <p className={css.title}>Двухкомнатные</p>
                            <div className={css.box}>
                                <div>
                                    <p><strong>Цена</strong>: от 26,336 $</p>
                                    <p>Площадь: от 50 м2</p>
                                    <p>Первый взнос от: 10%</p>
                                    <p>Рассрочка: до сдачи дома (2 кв. 2023)</p>
                                    <button type="button" className="btn btn-block btn-outline-primary" onClick={this.onOpenModal}>
                                        Выбрать варианты
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-12 col-md-6 col-lg-4">
                            <div className={css.wrapper}>
                                <Image
                                    alt="Жилой район «САДЫ РИВЬЕРЫ»"
                                    src="/images/3room.jpg"
                                    layout="fixed"
                                    objectFit="contain"
                                    width={240}
                                    height={200}
                                />
                            </div>
                            <p className={css.title}>Трехкомнатные</p>
                            <div className={css.box}>
                                <div>
                                    <p><strong>Цена</strong>: от 36,314 $</p>
                                    <p>Площадь: от 64 м2</p>
                                    <p>Первый взнос от: 10%</p>
                                    <p>Рассрочка: до сдачи дома (2 кв. 2023)</p>
                                    <button type="button" className="btn btn-block btn-outline-primary" onClick={this.onOpenModal}>
                                        Выбрать варианты
                                    </button>
                                </div>
                            </div>
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