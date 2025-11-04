import React from 'react';
import { Music } from 'lucide-react';
import { motion } from 'framer-motion';

const archiveLinks = [
  { title: '구룡', url: 'https://www.facebook.com/share/p/1TW8qwRr9D/' },
  { title: 'Pasteboard', url: 'https://www.facebook.com/share/p/1CqKfVpa3c/' },
  { title: 'Amorphous', url: 'https://www.facebook.com/share/p/17SoENUzWq/' },
];

const MusicSection = () => {
  return (
    <section id="music" className="relative w-full bg-black text-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 flex items-center gap-3">
          <Music className="h-5 w-5 text-slate-100" />
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-white/90">Review Musik</h2>
        </div>

        <div className="space-y-4">
          {archiveLinks.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded border border-white/5 bg-white/[0.03] px-4 py-3 font-serif text-white/90 underline decoration-white/20 underline-offset-4 transition hover:decoration-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]"
              >
                {item.title}
              </a>
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
