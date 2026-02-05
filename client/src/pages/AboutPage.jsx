import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    viewport: { once: true, amount: 0.2 }
  };

  const sections = [
    {
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
      alt: 'Perfume Crafting',
      title: 'The Art of Selection',
      content: [
        'Our mission is to uncover the most captivating scents from around the world. From the rare oud forests of Assam to the sun-drenched floral fields of Kannauj, we journey across India and beyond to find fragrances that move the soul.',
        'Each perfume in our collection has been carefully evaluated and selected for its uniqueness, quality of ingredients, and the emotion it evokes.'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800',
      alt: 'Traditional Attar Making',
      title: 'Heritage & Craftsmanship',
      content: [
        'We partner with master perfumers who share our dedication to craftsmanship, using only the finest, ethically-sourced ingredients. Many of our traditional attars come from families who have been perfecting their art for generations.',
        'This commitment to authenticity and quality is what sets every bottle in our collection apart.'
      ],
      reverse: true
    },
    {
      image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800',
      alt: 'Perfume Collection',
      title: 'Your Personal Signature',
      content: [
        'We believe that a fragrance is a form of self-expression, a personal signature that tells a story without words. That is why we curate scents that are both modern and timeless—waiting to become a part of your own unique story.'
      ],
      signature: '— XX XXXX, Founder'
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
            Our Journey
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-ink tracking-tight mb-8">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-charcoal leading-relaxed">
            Born from a passion for the timeless art of perfumery, Perfume Gallery is more than just a shop—it
            is a journey into the soul of fragrance. We believe that every scent tells a story, evokes a memory,
            and becomes a part of who you are.
          </p>
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="pb-24 px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${section.reverse ? 'lg:flex-row-reverse' : ''
                }`}
              {...fadeInUp}
            >
              <div className={`relative ${section.reverse ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute -bottom-8 ${section.reverse ? '-left-8' : '-right-8'} w-32 h-32 bg-gold/10 rounded-lg -z-10`}></div>
              </div>

              <div className={`space-y-6 ${section.reverse ? 'lg:order-1' : ''}`}>
                <h2 className="font-heading text-3xl md:text-4xl font-normal text-ink tracking-tight">
                  {section.title}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-base text-charcoal leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.signature && (
                  <p className="font-heading text-xl text-ink italic pt-4">
                    {section.signature}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <motion.section
        className="py-24 px-8 bg-cream border-y border-border"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-ink tracking-tight mb-4">
              Our Values
            </h2>
            <p className="text-lg text-stone">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Authenticity', desc: 'Every fragrance is 100% genuine, sourced directly from trusted master perfumers.' },
              { title: 'Craftsmanship', desc: 'We celebrate the artisans who pour their passion into every bottle they create.' },
              { title: 'Sustainability', desc: 'We prioritize ethically-sourced ingredients and eco-conscious packaging.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-xl font-medium text-ink">{value.title}</h3>
                <p className="text-stone leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;