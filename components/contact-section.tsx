const ContactSection = () => {
    const contactInfo = [
      {
        label: "Email",
        value: "info@naturale.com",
        href: "mailto:info@naturale.com"
      },
      {
        label: "Phone",
        value: "+39 095 123 4567",
        href: "tel:+390951234567"
      },
      {
        label: "Showroom",
        value: "Via Etnea 123, Catania, Sicily",
        href: "#"
      }
    ];
  
    return (
      <section id="contact" className="section-padding bg-background border-t border-border-subtle">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-display text-foreground mb-8">
                Get in touch
              </h2>
              <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                Begin your journey with natural stone. Our artisans are ready to bring 
                your vision to life with materials that honor Sicily's geological heritage.
              </p>
              
              <div className="space-y-8">
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
                      className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 text-foreground transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-small text-text-secondary uppercase tracking-wide mb-3 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 text-foreground transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-small text-text-secondary uppercase tracking-wide mb-3 block">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 text-foreground transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="text-small text-text-secondary uppercase tracking-wide mb-3 block">
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 text-foreground transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
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
    );
  };
  
  export default ContactSection;