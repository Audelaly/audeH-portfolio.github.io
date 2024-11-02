import { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NavLink from "@/app/ui/nav-link";

type DefaultTemplateProps = {
    children: ReactNode;
    title: string;
    description: string;
};

function DefaultTemplate({ children, title, description }: DefaultTemplateProps) {
    return (
        <div className="flex">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* ======= Mobile nav toggle button ======= */}
            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <header id="header" className="bg-gray-800 text-white">
                <div className="flex flex-col items-center">
                    <div className="profile text-center">
                        <Image src="/audeH-portfolio.github.io/img/profil.JPG" alt="" className="w-24 h-24 rounded-full mx-auto" width={96} height={96} loading="lazy"/>
                        <h1 className="text-light text-2xl mt-4">
                            <a href="#home" className="text-white no-underline">Aude Halipré</a>
                        </h1>
                        <div className="social-links mt-3 flex justify-center space-x-4">
                            <a href="https://www.linkedin.com/in/aude-halipre/" className="linkedin text-white hover:text-blue-500">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://github.com/Audelaly" className="github text-white hover:text-gray-500">
                                <i className="bi bi-github"></i>
                            </a>
                        </div>
                    </div>
                    <NavLink />
                </div>
            </header>
            <main className="main-content">
                {children}
            </main>
        </div>
    );
}

export default DefaultTemplate;