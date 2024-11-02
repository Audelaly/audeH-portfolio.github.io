import Link from 'next/link';

const ProjetsSection = () => {
    return (
        <section id="portfolio" className="portfolio section-bg py-12">
            <div className="container mx-auto px-4">
                <div className="section-title text-center mb-8">
                    <h2 className="text-3xl font-bold">Projets</h2>
                    <p className="mt-2">Voici quelques exemples de projets personnels et scolaires que j'ai pu réaliser durant ma formation ou pendant mon temps libre :</p>
                </div>

                <div className="row grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                    <div className="col portfolio-item">
                        <div className="portfolio-wrap flex">
                            <img src="/audeH-portfolio.github.io/img/jeu-du-pendu.svg" className="img-fluid w-1/2" alt="Jeu du pendu" />
                            <div className="portfolio-description w-1/2 p-4">
                                <h3>Jeu du pendu</h3>
                                <p>Un jeu de pendu interactif développé en JavaScript.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col portfolio-item">
                        <div className="portfolio-wrap flex">
                            <img src="/audeH-portfolio.github.io/img/verbes-anglais.svg" className="img-fluid w-1/2" alt="Verbes irréguliers anglais" />
                            <div className="portfolio-description w-1/2 p-4">
                                <h3>Verbes irréguliers anglais</h3>
                                <p>Une application pour apprendre les verbes irréguliers en anglais.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col portfolio-item">
                        <div className="portfolio-wrap flex">
                            <img src="/audeH-portfolio.github.io/img/flatcraft.png" className="img-fluid w-1/2" alt="Flatcraft" />
                            <div className="portfolio-description w-1/2 p-4">
                                <h3>Flatcraft</h3>
                                <p>Un jeu de construction en 2D inspiré de Minecraft.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col portfolio-item">
                        <div className="portfolio-wrap flex">
                            <img src="/audeH-portfolio.github.io/img/jo2024.svg" className="img-fluid w-1/2" alt="JO Paris 2024" />
                            <div className="portfolio-description w-1/2 p-4">
                                <h3>JO Paris 2024</h3>
                                <p>Un site web informatif sur les Jeux Olympiques de Paris 2024.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjetsSection;