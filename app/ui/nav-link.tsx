import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
export default function NavLinks() {
    return (
        <nav id="navbar" className="nav-menu navbar">
            <ul>
                <li><a href="#accueil" className="nav-link scrollto active"><i className="bi bi-house"></i> <span>Accueil</span></a></li>
                <li><a href="#about" className="nav-link scrollto"><i className="bi bi-person"></i> <span>A propos de moi</span></a></li>
                <li><a href="#formation" className="nav-link scrollto"><i className="bi bi-briefcase"></i> <span>Formation et Expériences</span></a></li>
                <li><a href="#projet" className="nav-link scrollto"><i className="bi bi-book"></i> <span>Projets</span></a></li>
                <li><a href="#skills" className="nav-link scrollto"><i className="bi bi-lightbulb"></i> <span>Compétences</span></a></li>
                <li><a href="#contact" className="nav-link scrollto"><i className="bi bi-envelope"></i> <span>Contact</span></a></li>
                <li><a href="./assets/img/CV_Aude_Halipré.pdf"><i className="bi bi-file-earmark"></i><span>Mon CV</span></a></li>
            </ul>
        </nav>
    );
}