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
                            <img src="/audeH-portfolio.github.io/img/jeu-du-pendu.svg" className="img-fluid w-1/4"
                                 alt="Jeu du pendu"/>
                            <div className="portfolio-description w-1/2 p-4">
                                <h3>Jeu du pendu (Python)</h3>
                                <p>Le projet est simple. L'ordinateur vous montre une série de traits, représentant le
                                    mot que vous allez devoir deviner.
                                    Vous allez entrer une lettre et le programme regarde si le mot à trouver contient
                                    une ou plusieurs fois la lettre, ou non.
                                    Si oui, il remplace le ou les traits contenant la lettre.
                                    Dans le cas contraire, le programme commence ou continue le dessin du pendu.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col portfolio-item">
                    <div className="portfolio-wrap flex">
                            <img src="/audeH-portfolio.github.io/img/verbes-anglais_11zon.jpg" className="img-fluid w-1/2" alt="Verbes irréguliers anglais" />
                            <div className="portfolio-description w-1/4 p-4">
                                <h3>Verbes irréguliers anglais (Python)</h3>
                                <p> Le but de ce programme de révision est de donner un maximum de bonnes réponses en donnant le ou les formes manquantes du verbe affiché.
                                    Pour chaque verbe, il y a 4 formes : la traduction en français, la base verbale, le prétérit et le participe passé.
                                    A la fin du programme, une note sera attribuée.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col portfolio-item">
                        <div className="portfolio-wrap flex">
                            <img src="/audeH-portfolio.github.io/img/flatcraft_11zon.jpeg" className="img-fluid w-1/4" alt="Flatcraft" />
                            <div className="portfolio-description w-1/2 p-4">
                                <h3>Flatcraft (Java)</h3>
                                <p> Vous connaissez le jeu Minecraft ? Et bien, Flatcraft c'est Minecraft en 2D !
                                    On a une map avec notre personnage, des ressources dans la terre, du ciel, des
                                    arbres, des terrils, ect.
                                    Avec le personnage, on peut sauter, miner, se déplacer à droite ou à gauche.
                                    On a aussi un système de gestion de l'inventaire et de la dureté des ressources.
                                    Enfin, nous pouvons "fusionner" des ressources entre elles pour pouvoir créer des
                                    portails vers d'autres mondes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col portfolio-item">
                        <div className="portfolio-wrap flex">
                            <img src="/audeH-portfolio.github.io/img/jo2024_11zon.jpg" className="img-fluid w-1/2"
                                 alt="JO Paris 2024"/>
                            <div className="portfolio-description w-1/2 p-4">
                                <h3>JO Paris 2024 (PHP)</h3>
                                <p> Dans ce projet, on apprend comment utiliser Laravel. On y voit le routage CRUD et
                                    l'authentification.
                                    On peut afficher la liste de quelques sports présents lors des JO de Paris 2024.
                                    Pour le moment, on peut éditer les informationsde sports, en ajouter et en
                                    supprimer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjetsSection;