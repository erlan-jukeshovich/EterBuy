import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative h-[520px] md:h-[620px] lg:h-[680px] mx-auto mt-4 rounded overflow-hidden shadow-2xl">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-poster.jpg" // опционально, можешь пока убрать
      >
        <source src={assets.hero_video} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-16">
        <div className="max-w-xl animate-fade-in-up">
          <p className="text-white/90 text-sm md:text-base tracking-[3px] uppercase mb-3">
            NEW COLLECTION 2026
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-none tracking-tighter">
            ELEVATE
            <br />
            YOUR STYLE
          </h1>
          <p className="mt-5 text-sm text-white/90 max-w-md">
            Premium streetwear and timeless fashion for the modern individual.
          </p>

          <button className="mt-8 bg-white hover:bg-white/90 text-black px-10 py-4 rounded-full font-semibold text-lg transition-all active:scale-95">
            Shop Now
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-white/70">
        <span className="text-xs tracking-widest">SCROLL TO EXPLORE</span>
        <div className="w-px h-10 bg-white/30 mt-2"></div>
      </div>
    </div>
  );
};

export default Hero;
