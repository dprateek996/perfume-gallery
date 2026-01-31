import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import InstagramIcon from '../ui/instagram-icon';
import FacebookIcon from '../ui/facebook-icon';
import TwitterXIcon from '../ui/twitter-x-icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <InstagramIcon size={18} strokeWidth={1.5} color="currentColor" />
    },
    { 
      name: 'Facebook', 
      icon: <FacebookIcon size={18} strokeWidth={1.5} color="currentColor" />
    },
    { 
      name: 'Twitter', 
      icon: <TwitterXIcon size={18} strokeWidth={1.5} color="currentColor" />
    },
  ];

  return (
    <footer className="bg-ink text-white py-16 md:py-20 px-6 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-5">
            <div>
              <h2 className="font-heading text-2xl font-medium text-white mb-3">
                Perfume Gallery
              </h2>
              <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                Curating the world's finest fragrances. Each scent tells a story, each bottle holds a memory waiting to be made.
              </p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.name}
                  href="#" 
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center border border-white/15 rounded-xl text-white/50 transition-all duration-300 hover:border-gold hover:text-gold hover:bg-gold/10"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-5">
            <h4 className="font-heading text-lg font-medium text-white">Shop</h4>
            <nav className="flex flex-col gap-1">
              {['All Fragrances', 'Perfumes', 'Attars', 'Gift Sets'].map((item) => (
                <Link 
                  key={item}
                  to="/shop" 
                  className="text-sm text-white/50 no-underline transition-all duration-200 hover:text-gold hover:translate-x-1 py-1.5 inline-block"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company Column */}
          <div className="space-y-5">
            <h4 className="font-heading text-lg font-medium text-white">Company</h4>
            <nav className="flex flex-col gap-1">
              <Link to="/about" className="text-sm text-white/50 no-underline transition-all duration-200 hover:text-gold hover:translate-x-1 py-1.5 inline-block">Our Story</Link>
              <Link to="/contact" className="text-sm text-white/50 no-underline transition-all duration-200 hover:text-gold hover:translate-x-1 py-1.5 inline-block">Contact Us</Link>
              <a href="#" className="text-sm text-white/50 no-underline transition-all duration-200 hover:text-gold hover:translate-x-1 py-1.5 inline-block">Careers</a>
              <a href="#" className="text-sm text-white/50 no-underline transition-all duration-200 hover:text-gold hover:translate-x-1 py-1.5 inline-block">Press</a>
            </nav>
          </div>

          {/* Support Column */}
          <div className="space-y-5">
            <h4 className="font-heading text-lg font-medium text-white">Support</h4>
            <nav className="flex flex-col gap-1">
              <a href="#" className="text-sm text-white/50 no-underline transition-all duration-200 hover:text-gold hover:translate-x-1 py-1.5 inline-block">FAQ</a>
              <a href="#" className="text-sm text-white/50 no-underline transition-all duration-200 hover:text-gold hover:translate-x-1 py-1.5 inline-block">Shipping</a>
              <a href="#" className="text-sm text-white/50 no-underline transition-all duration-200 hover:text-gold hover:translate-x-1 py-1.5 inline-block">Returns</a>
              <a href="mailto:support@perfumegallery.com" className="text-sm text-white/50 no-underline transition-all duration-200 hover:text-gold py-1.5 inline-block">
                support@perfumegallery.com
              </a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/35">
            © {currentYear} Perfume Gallery. All Rights Reserved.
          </p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="text-xs text-white/35 no-underline transition-colors duration-200 hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/35 no-underline transition-colors duration-200 hover:text-gold">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;