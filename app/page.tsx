import FormationSection from './ui/formation-section';
import SkillsSection from "@/app/ui/skills-section";
import ContactSection from "@/app/ui/contact-section";
import ProjetsSection from "@/app/ui/projets-section";
import DefaultTemplate from "@/app/ui/default-template";

export default function Page() {
    return (
        <DefaultTemplate>
            <div>
                <div>
                    <section id="home" className="d-flex flex-col justify-center items-center min-h-screen">
                        <div className="home-container" data-aos="fade-in">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl">Je s'appelle Aude Halipré</h1>
                            <p className="text-lg md:text-xl lg:text-2xl"><span className="typed" data-typed-items="Apprentie développeuse"></span></p>
                        </div>
                    </section>
                    <section id="accueil" className="p-4 md:p-8 lg:p-12">
                        {/* Contenu de la page d'accueil */}
                    </section>
                    <section id="about" className="p-4 md:p-8 lg:p-12">
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
                            <p className="text-base md:text-lg lg:text-xl">En dehors des cours : j'aime programmer, regarder du sport, pratiquer le badminton, jouer
                                aux jeux vidéos, marcher et jouer à des jeux de société en famille.</p>
                            <p className="text-base md:text-lg lg:text-xl">Je suis une personne sérieuse, à l'écoute, motivée et organisée. Même si je suis
                                autonome, je suis tout à fait capable de travailler au sein d'une équipe.</p>
                        </div>
                    </section>
                    <section id="formation" className="p-4 md:p-8 lg:p-12">
                        <FormationSection/>
                    </section>
                    <section id="projets" className="p-4 md:p-8 lg:p-12">
                        <ProjetsSection/>
                    </section>
                    <section id="skills" className="p-4 md:p-8 lg:p-12">
                        <SkillsSection/>
                    </section>
                    <section id="contact" className="p-4 md:p-8 lg:p-12">
                        <ContactSection/>
                    </section>
                </div>
            </div>
        </DefaultTemplate>
    );
}