import React from "react";

const Pendu = () => {
    return(
        <section id="portfolio-details" className="portfolio-details">
            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-8">
                        <div className="portfolio-details-slider swiper">
                            <div className="swiper-wrapper align-items-center">

                                <div className="swiper-slide">
                                    <img src="assets/img/portfolio/portfolio-details-1.jpg" alt=""/>
                                </div>

                                <div className="swiper-slide">
                                    <img src="assets/img/portfolio/portfolio-details-2.jpg" alt=""/>
                                </div>

                                <div className="swiper-slide">
                                    <img src="assets/img/portfolio/portfolio-details-3.jpg" alt=""/>
                                </div>

                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>Informations sur le projet</h3>
                            <ul>
                                <li><strong>Catégorie :</strong> Projet Personnel</li>
                                <li><strong>Durée du projet :</strong> 1 mois</li>
                                <li><strong>Langage :</strong> Python</li>
                                <li><strong>Logiciel :</strong> Thonny</li>
                            </ul>
                        </div>

                    </div>
                    <div className="portfolio-description">
                        <h2>Description du projet</h2>
                        <p>
                            J'ai réalisé ce projet en Juillet 2021 pour pouvoir m'améliorer en programmation et en Python.
                            Chaque jour, j'ai travaillé sur ce projet pendant 2 heures.
                        </p>
                        <p>Le projet est simple. L'ordinateur vous montre une série de traits, représentant le mot que vous allez devoir deviner.
                            Vous allez entrer une lettre et le programme regarde si le mot à trouver contient une ou plusieurs fois la lettre, ou non.
                            Si oui, il remplace le ou les traits contenant la lettre.
                            Dans le cas contraire, le programme commence ou continue le dessin du pendu.
                        </p>
                        <p>Le programme s'arrête quand vous avez trouvé le mot ou bien, quand vous ne l'avez pas trouvé au bout de 10 tentatives/tours.</p>
                    </div>
                </div>

            </div>
        </section>
        );
};

export default Pendu;