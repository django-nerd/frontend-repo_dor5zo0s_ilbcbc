// HeroSection.jsx
// Prominent landing section with CTA and subtle animation
import React from 'react';
import { Rocket, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              <Star size={14} /> Ranked among the top emerging universities
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Empowering the Next Generation of Leaders
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
              Discover world-class programs, inspiring faculty, and a vibrant campus life.
              Join a community where curiosity meets opportunity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                <Rocket size={16} /> Apply Now
              </a>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-50"
              >
                Explore Programs
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
                alt="University campus"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-blue-200/50 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-indigo-200/50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
