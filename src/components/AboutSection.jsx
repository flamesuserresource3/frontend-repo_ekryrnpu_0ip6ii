import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-black text-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <motion.h2
          className="mb-4 font-serif text-2xl md:text-3xl tracking-tight text-white/90"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          About
        </motion.h2>
        <motion.p
          className="max-w-3xl text-sm md:text-base leading-relaxed text-slate-300/90"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          Writing, noise, and silence. Between the chaos of riffs and the stillness of thought, I search for meaning. A mind wandering through black metal, literature, and the quiet corners of Japan—collecting fragments, translating their shadows, and returning to the page with what remains.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
