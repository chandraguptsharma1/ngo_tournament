'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscriptionStatus('loading');
    
    try {
      // TODO: Implement newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubscriptionStatus('success');
      setEmail('');
    } catch (error) {
      setSubscriptionStatus('error');
    }
  };

  const navigationLinks = [
    {
      title: 'About',
      links: [
        { name: 'Our Mission', href: '/about' },
        { name: 'Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Tournaments',
      links: [
        { name: 'Upcoming Events', href: '/tournaments' },
        { name: 'Past Events', href: '/tournaments/past' },
        { name: 'Rules & Guidelines', href: '/tournaments/rules' },
        { name: 'Prize Pool', href: '/tournaments/prizes' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Players', href: '/players' },
        { name: 'Teams', href: '/teams' },
        { name: 'Rankings', href: '/rankings' },
        { name: 'News', href: '/news' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/tournament_ngo',
      icon: '/images/social/instagram.svg',
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/tournament_ngo',
      icon: '/images/social/facebook.svg',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/tournament_ngo',
      icon: '/images/social/linkedin.svg',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and NGO Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h3
              
                className="brightness-0 invert" // Makes dark logo white
              >Tournament NGO
                </h3>
            </Link>
            <div className="text-gray-400 mb-6">
              <p className="mb-4">
                Registered Non-Profit Organization<br />
                Reg. No: NGO-2024-001
              </p>
              <p>
                123 Gaming Street<br />
                Esports City, EC 12345<br />
                contact@tournament-ngo.org
              </p>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="brightness-0 invert" // Makes dark icons white
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {navigationLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest tournament updates and community news.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={subscriptionStatus === 'loading'}
                className={`px-6 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors
                  ${subscriptionStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {subscriptionStatus === 'loading' ? (
                  'Subscribing...'
                ) : (
                  <EnvelopeIcon className="w-5 h-5" />
                )}
              </button>
            </form>
            {subscriptionStatus === 'success' && (
              <p className="text-green-400 mt-2">Thank you for subscribing!</p>
            )}
            {subscriptionStatus === 'error' && (
              <p className="text-red-400 mt-2">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Tournament NGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;