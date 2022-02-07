import React from 'react';
import css from "./About.module.scss"
import Image from 'next/image';

export default function About() {
    return (
        <div className={css.about}>
            <p className="h1">Жилой район «САДЫ РИВЬЕРЫ»</p>
            <div className="container">
                <div className="row justify-content-center row-cols-1">
                    <div className="col col-sm-12 col-md-12 col-lg-6">
                        <p>Все дома жилого района «Сады Ривьеры» на поселке Котовского будут расположены так, чтобы внутри домов была создана здоровая жизненная среда с максимальным количеством солнечного света и зонами отдыха для взрослых и детей. Все дворы будут закрыты от машин, на первых этажах домов будут расположены коммерческие помещения с учетом всех потребностей жителей.</p>
                        <p>Это новый жилой район на поселке Котовского, который будет являться частью города у моря «Черноморская Ривьера».</p>
                        <p>Район спроектирован по принципу города коротких расстояний, что предполагает собой наличие всех объектов инфраструктуры внутри района.</p>
                        <p>Стены из красного кирпича, малоэтажность, вид на море и продуманная инфраструктура</p>
                        <p>Почувствуйте новый уровень комфортной жизни в жилом районе «Сады Ривьеры».</p>
                        {/*<a href="#progress" type="button" className="btn btn-outline-primary">Отчеты о строительстве</a>*/}
                        <br/><br/>
                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-6 flex-sm-column-reverse">
                        <Image
                            alt="Жилой район «САДЫ РИВЬЕРЫ»"
                            src="/images/1.jpg"
                            layout="responsive"
                            width={700}
                            height={450}
                        />
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}