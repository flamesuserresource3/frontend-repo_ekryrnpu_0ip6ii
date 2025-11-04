import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: '夜の余白 — Margins of Night',
    subtitle: 'Notes in Mincho cadence',
    excerpt:
      'In the quiet, the page breathes. Between strokes, a room for doubt and a promise of return.',
    tag: 'Japanese Notes',
  },
  {
    title: 'Kiri — Mist Over Ink',
    subtitle: 'Reflections',
    excerpt:
      'What remains after the song ends is the weight of the unsung. Silence as a mode of thinking.',
    tag: 'Reflections',
  },
  {
    title: 'Fragment: 言葉の影',
    subtitle: 'Translations & Traces',
    excerpt: 'Shadows of words do not fade; they learn to be dim and precise.',
    tag: 'Translations',
  },
];

const PostsSection = () => {
  return (
    <section id="writing" className="relative w-full bg-black text-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-slate-100" />
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-white/90">Blog & Essays</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              className="group rounded border border-white/5 bg-gradient-to-b from-white/5 to-black/20 p-5 transition-colors hover:border-white/10"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: 'easeOut' }}
            >
              <div className="text-xs uppercase tracking-widest text-slate-400/80">{p.tag}</div>
              <h3 className="mt-2 font-serif text-xl text-white/90 group-hover:text-white transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-slate-400 italic">{p.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{p.excerpt}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
              <button className="mt-4 text-xs text-slate-300 underline underline-offset-4 decoration-slate-600 hover:decoration-slate-300">
                Read fragment
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Ink texture at bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(60% 100% at 50% 100%, rgba(255,255,255,0.06), rgba(0,0,0,0) 70%)',
        }}
      />
    </section>
  );
};

export default PostsSection;
