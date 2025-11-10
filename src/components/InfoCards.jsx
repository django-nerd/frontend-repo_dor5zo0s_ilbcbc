// InfoCards.jsx
// Reusable card grid showcasing key highlights like programs, faculty, and admissions steps
import React from 'react';
import { BookOpen, Users, FileCheck2 } from 'lucide-react';

const cards = [
  {
    icon: <BookOpen className="text-blue-600" size={22} />,
    title: '200+ Academic Programs',
    desc: 'Undergraduate and graduate offerings across arts, science, business, and engineering.',
  },
  {
    icon: <Users className="text-blue-600" size={22} />,
    title: 'World-class Faculty',
    desc: 'Learn from experienced professors and industry experts dedicated to student success.',
  },
  {
    icon: <FileCheck2 className="text-blue-600" size={22} />,
    title: 'Streamlined Admissions',
    desc: 'A clear, supportive process from application to enrollment, every step of the way.',
  },
];

const InfoCards = () => {
  return (
    <section className="bg-white" aria-labelledby="highlights">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 id="highlights" className="text-2xl font-semibold text-gray-900">
          Why Choose Us
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  {c.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
