import NavLink from './ui/nav-link';
import FormationSection from './ui/formation-section';
import SkillsSection from "@/app/ui/skills-section";
import ContactSection from "@/app/ui/contact-section";
import ProjetsSection from "@/app/ui/projets-section";
import DefaultTemplate from "@/app/ui/default-template";

export default function Page() {
    return (

        <DefaultTemplate>
        <div className="d-flex">
            <section id="home" className="d-flex flex-column justify-content-center align-items-center">
                <div className="home-container" data-aos="fade-in">
                    <h1>Je s'appelle Aude Halipré</h1>
                    <p><span className="typed" data-typed-items="Apprentie développeuse"></span></p>
                </div>
            </section>
            <div>
                <section id="accueil">
                    {/* Contenu de la page d'accueil */}
                </section>
                <section id="about">
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Qui suis-je ?</h3>
                        <p className="fst-italic">
                            Bonjour à tous ! Je m'appelle Aude Halipré (mais je pense que vous le savez déjà ^^).
                            Je suis actuellement en troisième année de BUT informatique à l'IUT de Lens.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age :</strong>
                                        <span>20 ans</span></li>
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
                    <FormationSection/>
                </section>
                <section id="projets">
                    <ProjetsSection/>
                </section>
                <section id="skills">
                    <SkillsSection/>
                </section>
                <section id="contact">
                    <ContactSection/>
                </section>
            </div>
        </div>
        </DefaultTemplate>
    );
}