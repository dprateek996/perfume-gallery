import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const contactCards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Customer Service',
      link: { href: 'mailto:support@perfumegallery.com', text: 'support@perfumegallery.com' },
      note: 'Response within 24 hours'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: 'Phone',
      link: { href: 'tel:+919616102661', text: '+91 96161 02661' },
      note: 'Mon-Sat, 10am - 7pm IST'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Flagship Store',
      address: ['Swaroop Nagar', 'Kanpur, Uttar Pradesh'],
      note: 'Visit by appointment'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      title: 'Press & Media',
      link: { href: 'mailto:media@perfumegallery.com', text: 'media@perfumegallery.com' },
      note: 'For media inquiries'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-8 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-stone mb-5 block">
            Contact
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-ink tracking-tight mb-8">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-charcoal leading-relaxed">
            We would love to hear from you. Whether you have a question about our collection, 
            need a scent recommendation, or wish to inquire about an order, our team is here to help.
          </p>
        </motion.div>
      </div>

      {/* Contact Cards */}
      <div className="pb-24 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactCards.map((card, index) => (
            <motion.div 
              key={index}
              className="bg-cream p-8 rounded-lg border border-border text-center hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 mx-auto mb-6 text-gold">
                {card.icon}
              </div>
              <h3 className="font-heading text-xl font-medium text-ink mb-4">
                {card.title}
              </h3>
              {card.link && (
                <a 
                  href={card.link.href}
                  className="text-ink hover:text-gold transition-colors no-underline block mb-2"
                >
                  {card.link.text}
                </a>
              )}
              {card.address && (
                <p className="text-ink mb-2">
                  {card.address.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < card.address.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              )}
              <p className="text-sm text-stone">{card.note}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Section */}
      <motion.section 
        className="py-20 px-8 bg-cream border-y border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-light text-ink tracking-tight mb-4">
            Follow Our Journey
          </h2>
          <p className="text-stone mb-8">
            Stay connected for new arrivals, fragrance tips, and behind-the-scenes stories.
          </p>
          <div className="flex justify-center gap-4">
            {[
              { name: 'Instagram', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
              { name: 'Facebook', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/> },
            ].map((social, index) => (
              <motion.a 
                key={index}
                href="#"
                className="flex items-center gap-2 px-6 py-3 border border-ink text-ink font-medium text-sm rounded transition-all duration-300 hover:bg-ink hover:text-white no-underline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {social.icon}
                </svg>
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;