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
                            <img src="/img/java.png" alt="Java" />
                            <img src="/img/python.png" alt="Python" />
                            <img src="/img/linux.png" alt="Linux" />
                        </div>
                    </div>

                    <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                        <div className="progress">
                            <img src="/img/flask-horizontal.webp" alt="Flask" />
                            <img src="/img/laravel.png" alt="Laravel" />
                            <img src="/img/next-js.svg" alt="Next JS"/>
                        </div>
                    </div>

                    <div className="col-lg-3" data-aos="fade-up">
                        <div className="progress">
                            <img src="/img/html.svg" alt="HTML5" />
                            <img src="/img/css3.svg" alt="CSS3" />
                            <img src="/img/javascript.svg" alt="JavaScript" />
                            <img src="/img/PHP-logo.svg.png" alt="PHP" />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SkillsSection;