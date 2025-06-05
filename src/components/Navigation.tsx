'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tournaments', href: '/tournaments' },
    { name: 'Teams', href: '/teams' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const languages = ['EN', 'ES', 'FR'];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                className="h-10 w-auto"
                src="/logo.png"
                alt="NGO Tournament Logo"
              />
              <span className="ml-3 text-xl font-bold text-primary">NGO Tournament</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative ml-4">
              <button
                className="flex items-center text-gray-700 hover:text-primary"
                onClick={() => setCurrentLang(currentLang === 'EN' ? 'ES' : 'EN')}
              >
                <GlobeAltIcon className="h-5 w-5 mr-1" />
                <span>{currentLang}</span>
              </button>
            </div>

            {/* CTA Buttons */}
            <Link
              href="/register"
              className="ml-4 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/register"
              className="block px-3 py-2 text-base font-medium bg-accent text-white rounded-lg mt-4"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 