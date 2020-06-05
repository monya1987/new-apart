import React from 'react';
import classnames from 'classnames';
import css from "./Why.module.scss";

export default function Why() {
    return (
        <div className={css.why}>
            <p className='h1'>Почему ЖК Аврора ?</p>
            <div className="container">
                <div className="row justify-content-center row-cols-1">
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={classnames(css.box, css.third)}>
                            <p className={css.descr}>
                                <strong>ИНФРАСТРУКТУРА</strong>
                                Отличная транспортная развязка позволит за 15 мин. добраться до ЖД вокзала и
                                на знаменитый "Привоз". На общественном транспорте к морю 20 мин, в центр
                                города 30 мин. В международный одесский аэропорт 15 мин ...
                            </p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={classnames(css.box, css.second)}>
                            <p className={css.descr}>
                                <strong>БЕЗОПАСНОСТЬ</strong>
                                ЖК "АВРОРА" располагается в благоустроенном, безопасном районе
                                Одессы. Освещенные улицы, камеры наблюдения, дежурят наряды полиции.
                                Здесь соседи знают друг друга и ничто не помешает спокойной, счастливой
                                семейной жизни.
                            </p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={classnames(css.box, css.first)}>
                            <p className={css.descr}>
                                <strong>МЕДИЦИНА</strong>
                                Взрослая районная поликлиника №16 находится по соседству с ЖК АВРОРА.
                                Детская поликлиника №6, городская клиническая больница №10, детская и
                                взрослая стоматология, женская консультация и роддом №7 все в шаговой
                                доступности.
                            </p>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={classnames(css.box, css.four)}>
                            <p className={css.descr}>
                                <strong>РАСПОЛОЖЕНИЕ</strong>
                                ЖК "Аврора" расположен в одном из лучших районов города
                                Одессы. Новый, долгожданный проект в самом сердце Черемушек на пересечении улиц
                                Гайдара и Терешковой. Уютный, утопающий в зелени район с
                                развитой инфраструктурой.
                                В шаговой доступности рынок "Черемушки", детские сады, школы, супермаркеты и
                                любимое место для отдыха парк им. Горького.
                            </p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={classnames(css.box, css.five)}>
                            <p className={css.descr}>
                                <strong>ОБРАЗОВАНИЕ</strong>
                                Сразу шесть дет. садов окружают
                                ЖК "АВРОРА" №49, №193, №197, №170, №174, №140.
                                В пару минутах ходьбы от дома школы №20, №53, №25, в 10 мин. №64 и гимназия
                                №5 с углубленным изучением английского языка.
                                Малиновский район отличается большим выбором центров раннего
                                развития, языковых курсов, спортивных секций для дополнительных занятий
                                детей.
                            </p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className={classnames(css.box, css.six)}>
                            <p className={css.descr}>
                                <strong>СПОРТ</strong>
                                Спорткомплекс "ШТОРМ" (Формула) с бассейном, банным комплексом и
                                несколькими спортзалами в ближайшем соседстве с ЖК “АВРОРА”.
                                В пяти минутах ходьбы от ЖК ледовый каток “Льдинка”, ДЮСШ №11 по
                                футболу, клубы федерации карате, тхэквондо, настольного тенниса.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}