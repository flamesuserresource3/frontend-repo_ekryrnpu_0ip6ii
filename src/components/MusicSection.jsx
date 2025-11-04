import React from 'react';
import { Music } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    band: 'Burzum',
    title: 'Hvis lyset tar oss — Snow that hums',
    source: 'From a discussion on aesthetics and isolation',
    blurb:
      'Guitars like mist over fjords; repetition as a monastic vow. The song refuses climax, and in that refusal finds form.',
  },
  {
    band: 'Sigh (サイ)',
    title: 'Hail Horror Hail — Theatrical ashes',
    source: 'Adapted from a midnight thread',
    blurb:
      'Baroque keys in a charred theater. The smirk behind the corpse paint is a philosophy lecture.',
  },
];

const MusicSection = () => {
  return (
    <section id="music" className="relative w-full bg-black text-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 flex items-center gap-3">
          <Music className="h-5 w-5 text-slate-100" />
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-white/90">Music Articles & Reviews</h2>
        </div>

        <div className="space-y-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={r.title}
              className="rounded border border-white/5 bg-gradient-to-b from-white/5 to-black/20 p-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: 'easeOut' }}
            >
              <div className="text-xs uppercase tracking-widest text-slate-400/80">{r.band}</div>
              <h3 className="mt-2 font-serif text-xl text-white/90">{r.title}</h3>
              <p className="text-xs text-slate-400 italic">{r.source}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{r.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Silver line divider */}
      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default MusicSection;
