import React from 'react';

const FormationSection = () => {
    return (
        <section id="resume" className="resume">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Formation</h3>
                        <div className="resume-item">
                            <h4>Bachelor Universitaire de Technologie</h4>
                            <h5>2022 - </h5>
                            <p><em>IUT de Lens - France</em></p>
                            <p>Département informatique</p>
                        </div>
                        <div className="resume-item">
                            <h4>Baccalauréat Général - Mention BIEN</h4>
                            <h5>2019 - 2022</h5>
                            <p><em>Lycée Marguerite de Flandres Gondecourt - France</em></p>
                            <p>Spécialités : Numérique et Sciences Informatiques / Mathématiques</p>
                            <p>Options : Maths expertes / Euro Anglais</p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Experience Professionnelle</h3>
                        <div className="resume-item">
                            <h4>Stage</h4>
                            <h5>Avril 2024 - Juin 2024</h5>
                            <p><em>IEMN CNRS, Villeneuve d'Ascq </em></p>
                            <h4>Alternance</h4>
                            <h5>Septembre 2024 - en cours</h5>
                            <p><em>IEMN CNRS, Villeneuve d'Ascq </em></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormationSection;