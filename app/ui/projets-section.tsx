import Link from 'next/link';

const ProjetsSection = () => {
    return (
        <section id="portfolio" className="portfolio section-bg py-12">
            <div className="container mx-auto px-4">
                <div className="section-title text-center mb-8">
                    <h2 className="text-3xl font-bold">Projets</h2>
                    <p className="mt-2">Voici quelques exemples de projets personnels et scolaires que j'ai pu réaliser durant ma formation ou pendant mon temps libre :</p>
                </div>

                <div className="row flex justify-center" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters" className="flex space-x-4">
                            <li data-filter="*" className="filter-active cursor-pointer">Tous</li>
                            <li data-filter=".filter-app" className="cursor-pointer">Personnels</li>
                            <li data-filter=".filter-card" className="cursor-pointer">Scolaires</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container mt-8" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app mb-8">
                        <div className="portfolio-wrap">
                            <Link href="/projets-details/pendu" legacyBehavior>
                                <a>
                                    <img src="/audeH-portfolio.github.io/img/jeu-du-pendu.svg" className="img-fluid" alt="Jeu du pendu" />
                                </a>
                            </Link>
                            <div className="portfolio-links flex justify-center space-x-4 mt-4">
                                <a href="/audeH-portfolio.github.io/img/jeu-du-pendu.svg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Jeu du pendu">
                                    <i className="bx bx-plus text-2xl"></i>
                                </a>
                                <Link href="/projets-details/pendu" legacyBehavior>
                                    <a title="Plus de détails">
                                        <i className="bx bx-link text-2xl"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app mb-8">
                        <div className="portfolio-wrap">
                            <img src="/audeH-portfolio.github.io/img/verbes-anglais.svg" className="img-fluid" alt="Verbes irréguliers anglais" />
                            <div className="portfolio-links flex justify-center space-x-4 mt-4">
                                <a href="/audeH-portfolio.github.io/img/verbes-anglais.svg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Verbes irréguliers anglais">
                                    <i className="bx bx-plus text-2xl"></i>
                                </a>
                                <a href="verbes.html" title="Plus de détails">
                                    <i className="bx bx-link text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card mb-8">
                        <div className="portfolio-wrap">
                            <img src="/audeH-portfolio.github.io/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="Flatcraft" />
                            <div className="portfolio-links flex justify-center space-x-4 mt-4">
                                <a href="/audeH-portfolio.github.io/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Flatcraft">
                                    <i className="bx bx-plus text-2xl"></i>
                                </a>
                                <a href="flatcraft.html" title="Plus de détails">
                                    <i className="bx bx-link text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card mb-8">
                        <div className="portfolio-wrap">
                            <img src="/audeH-portfolio.github.io/img/jo2024.svg" className="img-fluid" alt="JO Paris 2024" />
                            <div className="portfolio-links flex justify-center space-x-4 mt-4">
                                <a href="/audeH-portfolio.github.io/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="JO Paris 2024">
                                    <i className="bx bx-plus text-2xl"></i>
                                </a>
                                <a href="jo.html" title="Plus de détails">
                                    <i className="bx bx-link text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjetsSection;