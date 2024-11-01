import React from 'react';

const SkillsSection = () => {
    return (
        <section id="skills" className="skills section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Compétences</h2>
                    <p>Voici les langages, les technologies et les frameworks que j'ai pu apprendre tout au long de mon parcours scolaire :</p>
                </div>

                <div className="row skills-content">

                    <div className="col-lg-3" data-aos="fade-up">
                        <div className="progress">
                            <img src="/audeH-portfolio.github.io/img/java.png" alt="Java" />
                            <img src="/audeH-portfolio.github.io/img/python.png" alt="Python" />
                            <img src="/audeH-portfolio.github.io/img/linux.png" alt="Linux" />
                        </div>
                    </div>

                    <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                        <div className="progress">
                            <img src="/audeH-portfolio.github.io/img/flask-horizontal.webp" alt="Flask" />
                            <img src="/audeH-portfolio.github.io/img/laravel.png" alt="Laravel" />
                            <img src="/audeH-portfolio.github.io/img/next-js.svg" alt="Next JS"/>
                        </div>
                    </div>

                    <div className="col-lg-3" data-aos="fade-up">
                        <div className="progress">
                            <img src="/audeH-portfolio.github.io/img/html.svg" alt="HTML5" />
                            <img src="/audeH-portfolio.github.io/img/css3.svg" alt="CSS3" />
                            <img src="/audeH-portfolio.github.io/img/javascript.svg" alt="JavaScript" />
                            <img src="/audeH-portfolio.github.io/img/PHP-logo.svg.png" alt="PHP" />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SkillsSection;