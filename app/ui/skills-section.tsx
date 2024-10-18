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
                            <img src="public/img/java.png" alt="Java" />
                            <img src="public/img/python.png" alt="Python" />
                            <img src="public/img/linux.png" alt="Linux" />
                        </div>
                    </div>

                    <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                        <div className="progress">
                            <img src="public/img/flask-horizontal.webp" alt="Flask" />
                            <img src="public/img/laravel.png" alt="Laravel" />
                            <img src="public/img/GitLab_logo.svg.png" alt="GitLab" />
                            <img src="public/img/git logo.png" alt="Git" />
                        </div>
                    </div>

                    <div className="col-lg-3" data-aos="fade-up">
                        <div className="progress">
                            <img src="public/img/html5.png" alt="HTML5" />
                            <img src="public/img/css3.png" alt="CSS3" />
                            <img src="public/img/javascript.png" alt="JavaScript" />
                            <img src="public/img/PHP-logo.svg.png" alt="PHP" />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SkillsSection;