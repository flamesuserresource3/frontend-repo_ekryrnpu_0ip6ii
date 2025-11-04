import React from 'react';
import { Youtube, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const youtubeLinks = [
  { title: 'Channel — Nocturne Studies', url: 'https://youtube.com', note: 'Personal channel: essays in sound and silence' },
  { title: 'Playlist — Ink & Feedback', url: 'https://youtube.com', note: 'Ambient writing sessions and black metal meditations' },
];

const socials = [
  { title: 'Instagram', url: 'https://instagram.com', note: 'Daily fragments & textures' },
  { title: 'Facebook Group', url: 'https://facebook.com', note: 'Discussions & shared reviews' },
  { title: 'X / Twitter', url: 'https://twitter.com', note: 'Short notes, links, announcements' },
];

const LinksSection = () => {
  return (
    <section id="links" className="relative w-full bg-black text-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* YouTube */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Youtube className="h-5 w-5 text-slate-100" />
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-white/90">YouTube</h2>
            </div>
            <ul className="space-y-4">
              {youtubeLinks.map((l, i) => (
                <motion.li
                  key={l.title}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <div>
                    <a href={l.url} target="_blank" rel="noreferrer" className="font-serif text-white/90 underline decoration-white/20 underline-offset-4 hover:decoration-white/60">
                      {l.title}
                    </a>
                    <p className="text-xs text-slate-400">{l.note}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <LinkIcon className="h-5 w-5 text-slate-100" />
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-white/90">Social</h2>
            </div>
            <ul className="space-y-4">
              {socials.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <div>
                    <a href={s.url} target="_blank" rel="noreferrer" className="font-serif text-white/90 underline decoration-white/20 underline-offset-4 hover:decoration-white/60">
                      {s.title}
                    </a>
                    <p className="text-xs text-slate-400">{s.note}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} — Written in silver on matte black.
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
