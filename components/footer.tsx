const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const footerLinks = [
      {
        title: "Collections",
        links: [
          "Sicilian Stone",
          "Volcanic Series", 
          "Artisan Collection",
          "Custom Projects"
        ]
      },
      {
        title: "Services",
        links: [
          "Design Consultation",
          "Installation",
          "Maintenance",
          "Restoration"
        ]
      },
      {
        title: "Company",
        links: [
          "About Us",
          "Craftsmanship",
          "Sustainability",
          "Careers"
        ]
      }
    ];
  
    return (
      <footer className="bg-surface border-t border-border-subtle">
        <div className="container-luxury py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="text-2xl font-display font-medium mb-6">
                NATURALE
              </div>
              <p className="text-body text-text-secondary leading-relaxed mb-8">
                Celebrating Sicily's geological heritage through artisanal craftsmanship 
                and contemporary design excellence.
              </p>
              <div className="flex space-x-4">
                {/* Social Links */}
                <a href="#" className="text-text-secondary hover:text-gold transition-colors duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                  </svg>
                </a>
                <a href="#" className="text-text-secondary hover:text-gold transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
  
            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-subheading mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-body text-text-secondary hover:text-foreground transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          {/* Bottom Bar */}
          <div className="border-t border-border-subtle mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-small text-text-muted">
              © {currentYear} Naturale. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-small text-text-muted hover:text-foreground transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-small text-text-muted hover:text-foreground transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;