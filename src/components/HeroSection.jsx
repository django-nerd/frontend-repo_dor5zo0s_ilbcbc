// HeroSection.jsx
// Premium hero with blue/white/gold theme and soft gradients
import React from 'react';
import { Rocket, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -right-16 top-1/3 h-60 w-60 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
              <Star size={14} /> Excellence in Teaching & Research
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Where Curiosity Meets Opportunity
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
              A community dedicated to shaping leaders through rigorous academics,
              hands-on learning, and a vibrant campus culture.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700"
              >
                <Rocket size={16} /> Apply Now
              </a>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-md border border-amber-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-amber-50"
              >
                Explore Programs
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
                alt="University campus"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-blue-200/50 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-amber-200/50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
