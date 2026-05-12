/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart, Star } from "lucide-react";
import { useState, ReactNode } from "react";

const Polaroid = ({ src, caption, rotation = 0, className = "" }: { src: string; caption: string; rotation?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    style={{ rotate: `${rotation}deg` }}
    className={`polaroid ${className}`}
  >
    <img src={src} alt={caption} referrerPolicy="no-referrer" />
    <p className="polaroid-caption">{caption}</p>
  </motion.div>
);

const WashiTape = ({ className }: { className?: string }) => (
  <div className={`h-8 bg-tape-green/40 opacity-70 border-b border-white/20 ${className}`} style={{ width: '120px' }} />
);

const MemorySection = ({ children, tapeTop = false }: { children: ReactNode; tapeTop?: boolean }) => (
  <motion.section 
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="scrapbook-page shadow-2xl mb-16"
  >
    {tapeTop && <div className="washi-tape-top" />}
    {children}
  </motion.section>
);

export default function App() {
  const [yesSize, setYesSize] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  const handleNoClick = () => {
    setYesSize(prev => prev + 0.3);
  };

  const handleYesClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center gap-12 bg-[#e8e4db]">
      {/* Cover Page */}
      <MemorySection tapeTop>
        <div className="washi-tape-corner" />
        <div className="pt-8 pl-4">
          <div className="border-2 border-dashed border-album-red/30 p-2 inline-block -rotate-6 mb-8">
            <span className="font-mono text-album-red tracking-widest text-xs font-bold uppercase">THE ALBUM</span>
          </div>
          
          <h1 className="scrapbook-title text-7xl mb-2">Lavanya gupta</h1>
          <p className="font-hand text-2xl text-[#5c7a91] italic mb-12">Curated by aditya thakur</p>
          
          <div className="border-b border-dotted border-gray-400 w-1/3 mb-2" />
          <p className="scrapbook-subtitle mb-20">VOL. 01 / ORIGINAL</p>
          
          <div className="flex justify-center mt-12">
            <Polaroid 
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800" 
              caption="Us" 
              rotation={2}
            />
          </div>
          <Heart className="absolute top-24 right-16 text-album-red/70 fill-album-red/70 w-8 h-8 rotate-12" />
        </div>
      </MemorySection>

      {/* How We Started */}
      <MemorySection>
        <div className="washi-tape-top opacity-30 bg-[#8c9c8c]" />
        <div className="flex items-baseline gap-4 mb-8">
          <h2 className="scrapbook-section-title">How We Started</h2>
          <span className="font-mono text-sm opacity-50 italic">It's been exactly</span>
        </div>
        
        <p className="scrapbook-text text-lg tracking-tight">
          117 days of realizing that saying 'yes' on January 15th was the best start to the year I could have asked for.
        </p>
        
        <div className="flex justify-center my-12">
          <Polaroid 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" 
            caption="The start of us." 
            rotation={-3}
          />
        </div>
        
        <Heart className="absolute bottom-40 right-12 text-album-red/60 fill-album-red/60 w-10 h-10 -rotate-12" />
      </MemorySection>

      {/* Favorite Memories */}
      <MemorySection>
        <div className="washi-tape-corner opacity-20" />
        <h2 className="scrapbook-section-title">Favorite Memories</h2>
        
        <p className="scrapbook-text text-lg mb-12">
          That one time, we decided that being together is my favorite place to be
        </p>
        
        <div className="grid grid-cols-2 gap-8 mt-12">
          <Polaroid 
            src="https://images.unsplash.com/photo-1522673607200-164883ef3982?auto=format&fit=crop&q=80&w=800" 
            caption="Found my favorite person" 
            rotation={-2}
          />
          <Polaroid 
            src="https://images.unsplash.com/photo-1516589174184-c68526514b48?auto=format&fit=crop&q=80&w=800" 
            caption="Happiness looks like this" 
            rotation={3}
          />
        </div>
        
        <Heart className="absolute top-40 right-12 text-album-red/70 fill-album-red/70 w-8 h-8" />
      </MemorySection>

      {/* What I Love */}
      <MemorySection>
        <h2 className="font-caveat text-5xl text-[#2c5282] mb-12">What I Love</h2>
        
        <div className="font-caveat text-2xl leading-loose text-gray-700 max-w-[90%] mx-auto space-y-6">
          <p>
            I love how you have this incredible way of making everything better just by being there. 
            From the way you effortlessly handle the pressures of college to the small, quiet moments 
            where we're just laughing about nothing, you've become my favorite part of every day.
          </p>
          <p>
            I love your ambition, your kindness, and the way you look at the world—but most of all, 
            I love how 'us' feels. You aren't just my partner; you're my best friend and the person I'm 
            most proud to walk beside.
          </p>
        </div>
        
        <div className="mt-16 border-t border-dotted border-gray-300" />
        <Star className="mt-8 text-yellow-400 fill-yellow-400 w-8 h-8" />
      </MemorySection>

      {/* The Next Page */}
      <MemorySection>
         <div className="washi-tape-top" style={{ backgroundColor: '#fff', opacity: 0.8 }} />
        <h2 className="scrapbook-section-title">The Next Page</h2>
        
        <div className="grid grid-cols-2 gap-8 my-12">
          <Polaroid 
            src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&q=80&w=800" 
            caption="Always" 
            rotation={-1}
          />
          <Polaroid 
            src="https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?auto=format&fit=crop&q=80&w=800" 
            caption="Forever" 
            rotation={4}
          />
        </div>
        
        <div className="mt-12 text-center pb-12">
          {!showMessage ? (
            <>
              <h3 className="font-mono text-xl mb-8">Ready for the next chapter ?</h3>
              <div className="flex justify-center items-center gap-4 h-32">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleYesClick}
                  style={{ scale: yesSize }}
                  className="bg-album-red text-white py-2 px-8 rounded shadow-lg font-mono text-lg transition-all duration-200"
                >
                  Yes
                </motion.button>
                <motion.button
                  whileHover={{ x: [0, -20, 20, -20, 20, 0] }}
                  onClick={handleNoClick}
                  className="border-2 border-dotted border-album-red text-album-red py-2 px-8 rounded font-mono text-lg"
                >
                  No
                </motion.button>
              </div>
            </>
          ) : (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center"
            >
              <Heart className="mx-auto text-album-red fill-album-red w-20 h-20 mb-4 heartbeat" />
              <h3 className="font-cursive text-5xl text-album-red">YAYYY! I love you! ❤️</h3>
              <p className="font-mono mt-4 opacity-70">to many more chapters together...</p>
            </motion.div>
          )}
        </div>
        <Heart className="absolute bottom-8 right-8 text-album-red/70 fill-album-red/70 w-10 h-10" />
      </MemorySection>

      <footer className="opacity-40 font-mono text-xs pb-10">
        © 2024 Handmade with love for Lavanya
      </footer>

      <style>{`
        .heartbeat {
          animation: heart-beat 1.5s infinite;
        }
        @keyframes heart-beat {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
