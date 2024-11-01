import FormationSection from './ui/formation-section';
import SkillsSection from "@/app/ui/skills-section";
import ContactSection from "@/app/ui/contact-section";
import ProjetsSection from "@/app/ui/projets-section";
import DefaultTemplate from "@/app/ui/default-template";
import { useEffect } from 'react';
import Typed from 'typed.js';
import AboutSection from "@/app/ui/about-section";

export default function Page() {
    return (
        <DefaultTemplate>
            <div>
                <div>
                    <section id="home" className="d-flex flex-col justify-center items-center min-h-screen">
                        <div className="home-container" data-aos="fade-in">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl">Je s'appelle Aude Halipré</h1>
                            <p className="text-lg md:text-xl lg:text-2xl">
                                <span className="typed">Apprentie développeuse</span>
                            </p>
                        </div>
                    </section>
                    <section id="about" className="p-4 md:p-8 lg:p-12">
                        <AboutSection/>
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