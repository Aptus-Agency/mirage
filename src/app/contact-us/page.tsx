'use client';

import Navigation from '../../../components/navigation';
import Footer from '../../../components/footer';
import Image from 'next/image';

const ContactPage = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "info@miragetiles.com",
      href: "mailto:info@miragetiles.com"
    },
    {
      label: "Phone",
      value: "0700 386458 / 0754 434566",
      href: "tel:+256700386458"
    },
    {
      label: "Address",
      value: "Hardware City, Mulwana Rd, Kampala",
      href: "https://maps.app.goo.gl/ne3Dboem7eWJadXV8"
    }
  ];

  return (
    <>
      <Navigation />
      <main>
        <section className="relative h-[50vh] bg-background flex items-center justify-center text-center mt-16">
          <Image
            src="https://res.cloudinary.com/zurri-cloud/image/upload/v1755236122/mirage/fv7qgb3ihskuxhus2mkm.jpg"
            alt="Contact Us"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="relative z-10">
            <h1 className="text-display text-foreground mb-4">Contact Us</h1>
            <p className="text-body md:text-lg text-text-secondary max-w-2xl mx-auto">
              We&apos;d love to hear from you. Get in touch with us for any inquiries or to start your next project.
            </p>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-heading text-foreground mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-8 mb-12">
                  {contactInfo.map((item, index) => (
                    <div key={index}>
                      <div className="text-small text-gold uppercase tracking-widest mb-2">
                        {item.label}
                      </div>
                      <a
                        href={item.href}
                        className="text-body text-foreground hover:text-gold transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>

                <h3 className="text-subheading text-foreground mb-4">Business Hours</h3>
                <p className="text-body text-text-secondary">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-body text-text-secondary">Sat: 9:00 AM - 2:00 PM</p>
              </div>

              {/* Contact Form */}
              <div className="card-luxury p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-small text-text-secondary uppercase tracking-wide mb-3 block">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border border-gold outline-none px-4 py-3 text-foreground transition-colors duration-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="text-small text-text-secondary uppercase tracking-wide mb-3 block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border border-gold outline-none px-4 py-3 text-foreground transition-colors duration-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-small text-text-secondary uppercase tracking-wide mb-3 block">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border border-gold outline-none px-4 py-3 text-foreground transition-colors duration-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="text-small text-text-secondary uppercase tracking-wide mb-3 block">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-transparent border border-gold outline-none px-4 py-3 text-foreground transition-colors duration-300 resize-none rounded-md"
                      placeholder="Send in an order, or request..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[50vh] bg-background">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757322474443!2d32.6144813147541!3d0.3142699997445763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb87a5555555%3A0x15f7bac7f688e5e!2sIndustrial%20Area%2C%20Kampala!5e0!3m2!1sen!2sug!4v1662556942735!5m2!1sen!2sug"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
