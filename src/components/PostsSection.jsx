import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const PostsSection = () => {
  return (
    <section id="blog" className="relative w-full bg-black text-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-slate-100" />
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-white/90">Blog</h2>
        </div>

        <div className="space-y-10">
          {/* Post: 青春は終わらない */}
          <motion.article
            className="rounded border border-white/5 bg-gradient-to-b from-white/5 to-black/20 p-5"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="font-serif text-xl md:text-2xl text-white/90">青春は終わらない</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300/90">
              The season of becoming lingers like feedback in an empty hall. The chords stretch, and what we call youth is just the room learning how to listen.
            </p>
          </motion.article>

          {/* Embedded note.com post 1 */}
          <motion.article
            className="rounded border border-white/5 bg-gradient-to-b from-white/5 to-black/20 p-5"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.05, duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="font-serif text-xl md:text-2xl text-white/90">日常生活における日本文化とスンダ文化の隠れた共通点</h3>
            <div className="mt-4 flex justify-center">
              <iframe
                className="note-embed rounded border border-white/10"
                src="https://note.com/embed/notes/n60f89b4c8c58"
                title="note.com embed"
                style={{ border: 0, display: 'block', maxWidth: '99%', width: 494, padding: 0, margin: '10px 0' }}
                height={400}
              />
            </div>
          </motion.article>

          {/* Embedded note.com post 2 */}
          <motion.article
            className="rounded border border-white/5 bg-gradient-to-b from-white/5 to-black/20 p-5"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="font-serif text-xl md:text-2xl text-white/90">note — embedded reading</h3>
            <div className="mt-4 flex justify-center">
              <iframe
                className="note-embed rounded border border-white/10"
                src="https://note.com/embed/notes/n70788afc977d"
                title="note.com embed"
                style={{ border: 0, display: 'block', maxWidth: '99%', width: 494, padding: 0, margin: '10px 0' }}
                height={400}
              />
            </div>
          </motion.article>
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
