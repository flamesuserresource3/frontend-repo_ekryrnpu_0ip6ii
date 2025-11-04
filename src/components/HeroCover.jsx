import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroCover = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(1200px 600px at 50% 100%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.85) 100%), radial-gradient(800px 400px at 10% 0%, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.95) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-start justify-end px-6 pb-16">
        <motion.h1
          className="text-3xl md:text-5xl font-serif tracking-tight text-white/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          Fragments of thought, music, and the silence between.
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-sm md:text-base text-slate-300/90 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
        >
          A black metal-inspired literary den with Japanese subtlety — notes in Mincho spirit,
          translations, and reflections that drift like ink in water.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroCover;
