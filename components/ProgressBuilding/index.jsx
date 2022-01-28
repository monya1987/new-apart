import React from 'react';
import css from "./ProgressBuilding.module.scss"

export default function ProgressBuilding() {
    return (
        <div className={css.progressBuilding}>
            <p className="h1">Видеоотчеты</p>
            <div className="container">
                <div className="row justify-content-center row-cols-1">
                    <div className="container">
                        <div className="row justify-content-center row-cols-1">
                            <div className="col col-sm-12 col-md-6 col-lg-6">
                                <div className={css.box}>
                                    <iframe src={`https://www.youtube.com/embed/x253tS0lsbg?controls=0&showinfo=0&modestbranding=0&autohide=1`} frameBorder="0"
                                            allow="autoplay; encrypted-media" allowFullScreen />
                                </div>
                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6">
                                <div className={css.box}>
                                    <iframe src={`https://www.youtube.com/embed/QEPgYPTjTGI?controls=0&showinfo=0&modestbranding=0&autohide=1`} frameBorder="0"
                                            allow="autoplay; encrypted-media" allowFullScreen />
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="row justify-content-center row-cols-1">
                            <div className="col col-sm-12 col-md-6 col-lg-6">
                                <div className={css.box}>
                                    <iframe src={`https://www.youtube.com/embed/BodgXvVYM7A?controls=0&showinfo=0&modestbranding=0&autohide=1`} frameBorder="0"
                                            allow="autoplay; encrypted-media" allowFullScreen />
                                </div>
                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6">
                                <div className={css.box}>
                                    <iframe src={`https://www.youtube.com/embed/mfQ8F1iIWZU?controls=0&showinfo=0&modestbranding=0&autohide=1`} frameBorder="0"
                                            allow="autoplay; encrypted-media" allowFullScreen />
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="row justify-content-center row-cols-1">
                            <div className="col col-sm-12 col-md-6 col-lg-6">
                                <div className={css.box}>
                                    <iframe src={`https://www.youtube.com/embed/XC8ZEZWG_jQ?controls=0&showinfo=0&modestbranding=0&autohide=1`} frameBorder="0"
                                            allow="autoplay; encrypted-media" allowFullScreen />
                                </div>
                            </div>
                            <div className="col col-sm-12 col-md-6 col-lg-6">
                                <div className={css.box}>
                                    <iframe src={`https://www.youtube.com/embed/RB2dRHqcF7c?controls=0&showinfo=0&modestbranding=0&autohide=1`} frameBorder="0"
                                            allow="autoplay; encrypted-media" allowFullScreen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}