import React from 'react';

const SkillsSection = () => {
    return (
        <section id="skills" className="skills section-bg py-12">
            <div className="container mx-auto px-4">
                <div className="section-title text-center mb-8">
                    <h2 className="text-3xl font-bold">Compétences</h2>
                    <p className="mt-2">Voici les langages, les technologies et les frameworks que j'ai pu apprendre tout au long de mon parcours scolaire :</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 skills-content">
                    <div className="flex justify-center" data-aos="fade-up">
                        <div className="progress flex flex-col items-center space-y-4">
                            <img src="/audeH-portfolio.github.io/img/java.png" alt="Java" className="w-16 h-16" />
                            <img src="/audeH-portfolio.github.io/img/python.png" alt="Python" className="w-16 h-16" />
                            <img src="/audeH-portfolio.github.io/img/linux.png" alt="Linux" className="w-16 h-16" />
                        </div>
                    </div>

                    <div className="flex justify-center" data-aos="fade-up" data-aos-delay="100">
                        <div className="progress flex flex-col items-center space-y-4">
                            <img src="/audeH-portfolio.github.io/img/flask-horizontal.webp" alt="Flask" className="w-16 h-16" />
                            <img src="/audeH-portfolio.github.io/img/laravel.png" alt="Laravel" className="w-16 h-16" />
                            <img src="/audeH-portfolio.github.io/img/next-js.svg" alt="Next JS" className="w-16 h-16" />
                        </div>
                    </div>

                    <div className="flex justify-center" data-aos="fade-up">
                        <div className="progress flex flex-col items-center space-y-4">
                            <img src="/audeH-portfolio.github.io/img/html.svg" alt="HTML5" className="w-16 h-16" />
                            <img src="/audeH-portfolio.github.io/img/css3.svg" alt="CSS3" className="w-16 h-16" />
                            <img src="/audeH-portfolio.github.io/img/javascript.svg" alt="JavaScript" className="w-16 h-16" />
                            <img src="/audeH-portfolio.github.io/img/PHP-logo.svg.png" alt="PHP" className="w-16 h-16" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;