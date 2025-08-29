'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Collections',
      href: '#',
      dropdown: [
        { label: 'Tiles', href: '/products/tiles' },
        { label: 'Bathroom Fixtures', href: '/products/fixtures' },
        { label: 'Accessories', href: '/products/accessories' },
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact-us' },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.05 } },
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background to-transparent border-border-subtle">
      <div className="container-luxury">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="bg-white p-2 rounded-full relative overflow-hidden w-24 h-24">
            <Image
              src="https://res.cloudinary.com/zurri-cloud/image/upload/v1755855865/mirage/knkjjmaqwzpix9ghn3ma.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <a
                    href={item.href}
                    className="text-lg font-bold transition-colors duration-300 hover:underline cursor-pointer flex items-center"
                  >
                    {item.label}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </a>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-surface shadow-luxury rounded-lg p-2"
                      >
                        {item.dropdown.map((subItem) => (
                          <motion.div key={subItem.label} variants={dropdownItemVariants}>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 text-text-secondary hover:text-foreground hover:bg-hover rounded-md transition-colors duration-200"
                            >
                              {subItem.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-bold transition-colors duration-300 hover:underline"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-subtle">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.label}>
                  <span className="block py-2 text-white font-bold">{item.label}</span>
                  <div className="pl-4">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block py-2 hover:text-white transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;