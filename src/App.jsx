import React from 'react';
import HeroCover from './components/HeroCover';
import PostsSection from './components/PostsSection';
import MusicSection from './components/MusicSection';
import LinksSection from './components/LinksSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-serif">
      {/* Moody ink-on-paper background texture */}
      <div
        aria-hidden
        className="fixed inset-0 opacity-[0.9]"
        style={{
          backgroundColor: '#000',
          backgroundImage: [
            'radial-gradient(1200px 800px at 50% 10%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,1) 100%)',
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.018), rgba(255,255,255,0.018) 1px, transparent 1px, transparent 2px)'
          ].join(', '),
        }}
      />

      <HeroCover />
      <PostsSection />
      <MusicSection />
      <LinksSection />
    </div>
  );
}

export default App;
