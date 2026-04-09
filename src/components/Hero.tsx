import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="relative h-[560px] md:h-[720px] lg:h-[780px] mx-4 lg:mx-8 mt-6 rounded-3xl overflow-hidden shadow-2xl">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={assets.hero_video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent" />

      <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[4px] text-sm text-white/75 font-medium">
            SPRING SUMMER 2026
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-[92px] leading-none font-bold text-white tracking-tighter mt-2">
            DEFINE<br />YOUR ERA
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-md">
            Premium fashion that doesn't follow trends — it creates them.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              to="/collection"
              className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all active:scale-95"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;