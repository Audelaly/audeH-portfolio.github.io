import NavLink from './ui/nav-link';
import FormationSection from './ui/formation-section';

export default function Page() {
    return (
        <div className="flex">
            <NavLink />
            <div>
            <section id="accueil">
                {/* Contenu de la page d'accueil */}
            </section>
            <section id="about">
                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Qui suis-je ?</h3>
                    <p className="fst-italic">
                        Bonjour à tous ! Je m'appelle Aude Halipré (mais je pense que vous le savez déjà ^^).
                        Je suis actuellement en deuxième année de BUT informatique à l'IUT de Lens.
                    </p>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Age :</strong> <span>19 ans</span>
                                </li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Ville :</strong> <span>59112, Annoeullin</span>
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
                    <p>En dehors des cours : j'aime programmer, regarder du sport, pratiquer le badminton, jouer aux
                        jeux vidéos, marcher et jouer à des jeux de société en famille.</p>
                    <p>Je suis une personne sérieuse, à l'écoute, motivée et organisée. Même si je suis autonome, je
                        suis tout à fait capable de travailler au sein d'une équipe.</p>
                </div>
            </section>
            <section id="formation">
                {/* Contenu de la page Formation */}
                <FormationSection />
            </section>
            <section id="projets">
                {/* Contenu de la page Projets */}
            </section>
            <section id="skills">
                {/* Contenu de la page Compétences */}
            </section>
            <section id="contact">
                {/* Contenu de la page Contact */}
            </section>
        </div>
        </div>
    );
}