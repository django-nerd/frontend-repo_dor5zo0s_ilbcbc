// ProgramCard.jsx
// Reusable card with blue/gold accents
import React from 'react';
import { BookOpen } from 'lucide-react';

const ProgramCard = ({ title, dept, level = 'Undergraduate' }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm transition hover:shadow-md">
      <div className="absolute right-0 top-0 h-20 w-20 -translate-y-1/2 translate-x-1/3 rotate-45 bg-amber-100/70" />
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <BookOpen size={20} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
            <p className="text-xs font-medium text-amber-700">{level}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">{dept}</p>
        <div className="mt-4">
          <a href="#apply" className="text-sm font-semibold text-blue-700 hover:text-blue-800">Learn more →</a>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
