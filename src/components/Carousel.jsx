// Carousel.jsx
// Minimal, accessible carousel for cards (auto + manual controls)
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const useCarousel = (length, interval = 5000) => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    if (length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), interval);
    return () => clearInterval(id);
  }, [length, interval]);
  const prev = () => setIndex((i) => (i - 1 + length) % length);
  const next = () => setIndex((i) => (i + 1) % length);
  return { index, prev, next };
};

const Carousel = ({ items = [], renderItem, className = '' }) => {
  const { index, prev, next } = useCarousel(items.length);

  return (
    <div className={`relative ${className}`} aria-roledescription="carousel">
      <div className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)`, width: `${items.length * 100}%` }}
        >
          {items.map((item, i) => (
            <div key={i} className="w-full flex-shrink-0 p-6 sm:p-8" style={{ width: `${100 / items.length}%` }}>
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {items.length > 1 && (
        <>
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-blue-100 bg-white p-2 text-gray-700 shadow hover:bg-blue-50"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-blue-100 bg-white p-2 text-gray-700 shadow hover:bg-blue-50"
          >
            <ChevronRight size={18} />
          </button>
          <div className="mt-3 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-4 rounded-full ${i === index ? 'bg-blue-600' : 'bg-blue-200'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
