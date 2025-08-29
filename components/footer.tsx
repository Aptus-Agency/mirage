import Link from "next/link";
import Image from "next/image";

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
        "Contact Us",
        "Linked In",
        "Twitter"
      ]
    }
  ];

  return (
    <footer className="bg-surface border-t border-border-subtle">
      <div className="container-luxury py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col">
            <Link href="/" className="bg-white p-2 rounded-full relative overflow-hidden w-20 h-20 mb-8">
              <Image
                src="https://res.cloudinary.com/zurri-cloud/image/upload/v1755855865/mirage/knkjjmaqwzpix9ghn3ma.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-body text-text-secondary leading-relaxed mb-8">
              Elevating interior spaces across Uganda with a passion for quality finishes. We provide the finest tiles and bathroom fixtures to inspire your next project.
            </p>
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
            © {currentYear} Mirage. All rights reserved.
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