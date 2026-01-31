import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/products/ProductCard';
import ShieldCheck from '../components/ui/shield-check';
import TruckElectricIcon from '../components/ui/truck-electric-icon';
import SparklesIcon from '../components/ui/sparkles-icon';
import TelephoneIcon from '../components/ui/telephone-icon';
import ArrowNarrowRightIcon from '../components/ui/arrow-narrow-right-icon';
import ArrowNarrowDownIcon from '../components/ui/arrow-narrow-down-icon';
import SendIcon from '../components/ui/send-icon';

const heroImage = 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2000&auto=format&fit=crop';

const HomePage = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [attars, setAttars] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = `${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/products`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setPerfumes(data.filter(p => !p.name.toLowerCase().includes('attar')).slice(0, 3));
        setAttars(data.filter(p => p.name.toLowerCase().includes('attar')).slice(0, 3));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.12 } }
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/60"></div>
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-6 md:px-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span 
            className="inline-block text-[0.7rem] font-medium tracking-[0.2em] uppercase text-white/70 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Artisan Fragrances Since 2024
          </motion.span>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-normal text-white leading-none mb-8 tracking-tight">
            The Art of <br />
            <span className="font-medium italic text-gold">Scent</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
            Discover rare fragrances crafted with passion. Each bottle tells a story of 
            tradition, innovation, and the pursuit of olfactory perfection.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/shop"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-ink font-medium text-sm tracking-wide uppercase rounded-lg shadow-soft-lg transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-glow-gold no-underline"
            >
              Explore Collection
              <ArrowNarrowRightIcon size={18} strokeWidth={2} color="currentColor" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ 
            opacity: { delay: 1.2, duration: 0.8 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <span className="text-[0.65rem] tracking-[0.15em] uppercase font-medium">Scroll</span>
          <ArrowNarrowDownIcon size={18} strokeWidth={1.5} color="currentColor" />
        </motion.div>
      </motion.section>

      {/* FEATURES BAR */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-white border-y border-border">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {[
            {
              icon: <ShieldCheck size={28} strokeWidth={1.5} color="currentColor" />,
              title: 'Authenticity Guaranteed',
              desc: 'Every fragrance is 100% genuine and sourced directly from master perfumers'
            },
            {
              icon: <TruckElectricIcon size={28} strokeWidth={1.5} color="currentColor" />,
              title: 'Free Shipping',
              desc: 'Complimentary delivery on orders above ₹2,500 across India'
            },
            {
              icon: <SparklesIcon size={28} strokeWidth={1.5} color="currentColor" />,
              title: 'Luxury Packaging',
              desc: 'Exquisitely wrapped, ready to gift or cherish for yourself'
            },
            {
              icon: <TelephoneIcon size={28} strokeWidth={1.5} color="currentColor" />,
              title: 'Expert Support',
              desc: 'Personalized fragrance consultations from our scent specialists'
            },
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 rounded-xl bg-surface/50 hover:bg-surface hover:shadow-soft transition-all duration-300 space-y-4"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold">{feature.icon}</div>
              <h4 className="font-heading text-xl font-medium text-ink tracking-tight">{feature.title}</h4>
              <p className="text-sm text-charcoal leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SIGNATURE PERFUMES SECTION */}
      <motion.section 
        className="py-20 md:py-28 px-6 md:px-8 bg-gradient-to-b from-cream to-surface"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-gold mb-4 block">
              Our Collection
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-ink tracking-tight mb-5">
              Signature Perfumes
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Modern scents for the discerning individual. A collection where classic notes meet contemporary artistry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {perfumes.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/shop" 
              className="btn-secondary no-underline"
            >
              View All Perfumes
              <ArrowNarrowRightIcon size={16} strokeWidth={2} color="currentColor" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CRAFTSMANSHIP SECTION */}
      <motion.section 
        className="py-20 md:py-28 px-6 md:px-8 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            className="relative order-2 lg:order-1"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-soft-lg">
              <img 
                src="https://www.jainperfumers.com/cdn/shop/articles/5-amazing-benefits-and-uses-of-attar-265172.jpg?v=1727435890" 
                alt="Artisanal Perfume Crafting"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-cream to-surface rounded-2xl -z-10"></div>
          </motion.div>
          
          <motion.div 
            className="space-y-6 order-1 lg:order-2"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            viewport={{ once: true }}
          >
            <span className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-gold">
              Our Philosophy
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-ink tracking-tight">
              The Art of Craft
            </h2>
            <div className="space-y-4">
              <p className="text-base text-charcoal leading-relaxed">
                Each bottle is a testament to our philosophy: purity of ingredients, reverence for tradition, 
                and a passion for innovation. We source the rarest botanicals and blend them with meticulous care.
              </p>
              <p className="text-base text-charcoal leading-relaxed">
                From the rose gardens of Kannauj to the oud forests of Assam, we journey across the subcontinent 
                to bring you scents that capture the essence of India's rich perfumery heritage.
              </p>
            </div>
            <Link 
              to="/about" 
              className="btn-primary no-underline mt-4 inline-flex"
            >
              Discover Our Story
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* TRADITIONAL ATTARS SECTION */}
      <motion.section 
        className="py-20 md:py-28 px-6 md:px-8 bg-gradient-to-b from-surface to-cream"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-gold mb-4 block">
              Heritage Collection
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-ink tracking-tight mb-5">
              Traditional Attars
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Experience the soul of perfumery with our pure, oil-based attars. 
              Concentrated, complex, and deeply personal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {attars.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/shop" 
              className="btn-secondary no-underline"
            >
              Explore Attars
              <ArrowNarrowRightIcon size={16} strokeWidth={2} color="currentColor" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* NEWSLETTER SECTION */}
      <motion.section 
        className="py-20 md:py-28 px-6 md:px-8 bg-ink relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <span className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-gold mb-4 block">
            Stay Connected
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-normal text-white tracking-tight mb-5">
            Join Our World
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            Subscribe for exclusive launches, fragrance tips, and members-only offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              autoComplete="email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-all duration-300 backdrop-blur-sm"
            />
            <motion.button 
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-medium text-sm tracking-wide uppercase rounded-lg shadow-glow-gold transition-all duration-300 hover:bg-gold-light hover:shadow-soft-lg active:scale-[0.98]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
              <SendIcon size={18} strokeWidth={1.5} color="currentColor" />
            </motion.button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;