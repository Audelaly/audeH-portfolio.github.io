import React from "react";

const ContactSection = () => {
    return (
        <section id="contact" className="contact py-12">
            <div className="container mx-auto px-4">
                <div className="section-title text-center mb-8">
                    <h2 className="text-3xl font-bold">Contact</h2>
                    <p className="mt-2">N'hésitez pas à me contacter pour plus d'informations ;)</p>
                    <p className="mt-2">(Je ne mords pas ! Enfin... Normalement...)</p>
                </div>

                <div className="row flex flex-wrap" data-aos="fade-in">
                    <div className="col-lg-5 flex items-stretch mb-8 lg:mb-0">
                        <div className="info space-y-6">
                            <div className="address flex items-center">
                                <i className="bi bi-geo-alt text-2xl mr-4"></i>
                                <div>
                                    <h4 className="text-xl font-semibold">Localisation:</h4>
                                    <p>Annoeullin, 59112</p>
                                </div>
                            </div>

                            <div className="email flex items-center">
                                <i className="bi bi-envelope text-2xl mr-4"></i>
                                <div>
                                    <h4 className="text-xl font-semibold">Email:</h4>
                                    <p>aude.halipre@gmail.com</p>
                                </div>
                            </div>

                            <div className="phone flex items-center">
                                <i className="bi bi-phone text-2xl mr-4"></i>
                                <div>
                                    <h4 className="text-xl font-semibold">Téléphone:</h4>
                                    <p>07 66 17 46 63</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 flex items-stretch">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form w-full space-y-4">
                            <div className="row flex flex-wrap -mx-2">
                                <div className="form-group col-md-6 px-2 mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium">Nom Prénom</label>
                                    <input type="text" name="name" className="form-control w-full px-3 py-2 border rounded-md" id="name" required />
                                </div>
                                <div className="form-group col-md-6 px-2 mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium">Votre Email</label>
                                    <input type="email" className="form-control w-full px-3 py-2 border rounded-md" name="email" id="email" required />
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="subject" className="block text-sm font-medium">Objet</label>
                                <input type="text" className="form-control w-full px-3 py-2 border rounded-md" name="subject" id="subject" required />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="message" className="block text-sm font-medium">Votre message</label>
                                <textarea className="form-control w-full px-3 py-2 border rounded-md" name="message" rows={10} required></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md">Envoyer votre message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;