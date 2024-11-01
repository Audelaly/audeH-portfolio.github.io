import React from "react";

const AboutSection = () => {
    return (
        <section id="about" className="p-4 md:p-8 lg:p-12">
            <div className="col-lg-4" data-aos="fade-right">
                <img src="/audeH-portfolio.github.io/img/profil.jpg" className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl">Qui suis-je ?</h3>
                <p className="fst-italic text-base md:text-lg lg:text-xl">
                    Bonjour à tous ! Je m'appelle Aude Halipré (mais je pense que vous le savez déjà ^^).
                    Je suis actuellement en troisième année de BUT informatique à l'IUT de Lens.
                </p>
                <div className="row">
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <strong>Age :</strong>
                                <span>20 ans</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Ville :</strong>
                                <span>59112, Annoeullin</span>
                            </li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Téléphone :</strong> <span>07 66 17 46 63</span>
                            </li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Email :</strong>
                                <span>aude.halipre@gmail.com</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <strong>Langues:</strong> <span> Français, Anglais, Espagnol</span>
                            </li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Permis:</strong>
                                <span>Permis B</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Mobilité:</strong>
                                <span>Hauts-de-France</span></li>
                        </ul>
                    </div>
                </div>
                <p className="text-base md:text-lg lg:text-xl">En dehors des cours : j'aime programmer, regarder du
                    sport, pratiquer le badminton, jouer
                    aux jeux vidéos, marcher et jouer à des jeux de société en famille.</p>
                <p className="text-base md:text-lg lg:text-xl">Je suis une personne sérieuse, à l'écoute, motivée et
                    organisée. Même si je suis
                    autonome, je suis tout à fait capable de travailler au sein d'une équipe.</p>
            </div>
        </section>
    );
}

export default AboutSection;