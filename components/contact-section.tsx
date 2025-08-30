import { motion } from 'framer-motion';

const ContactSection = () => {
    const contactInfo = [
      {
        label: "Email",
        value: "info@miragetiles.com",
        href: "mailto:info@miragetiles.com"
      },
      {
        label: "Phone",
        value: "+256 700 000 000",
        href: "tel:+256700000000"
      },
      {
        label: "Showroom",
        value: "Bugolobi - Kampala, Uganda",
        href: "#"
      }
    ];
  
    return (
      <motion.section 
        id="contact" 
        className="section-padding bg-background border-t border-border-subtle"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-display text-foreground mb-8">
                Get in touch
              </h2>
              <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                Begin your journey with natural stone. Our artisans are ready to bring 
                your vision to life with materials that honor Sicily&apos;s geological heritage.
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
            </motion.div>
  
            {/* Contact Form */}
            <motion.div 
              className="card-luxury p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
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
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  };
  
  export default ContactSection;