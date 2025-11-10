// Footer.jsx
// Elegant footer with blue/gold palette
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-gray-900">Bluecrest University</p>
            <p className="mt-2">123 University Ave, Knowledge City</p>
            <p>Admissions: admissions@bluecrest.edu</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-gray-900">Quick Links</p>
            <a href="#programs" className="hover:text-blue-700">Programs</a>
            <a href="#events" className="hover:text-blue-700">Events</a>
            <a href="#news" className="hover:text-blue-700">News</a>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Stay Connected</p>
            <p className="mt-2">Follow our latest updates and campus stories.</p>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-blue-100 pt-6 text-xs text-gray-500">
          <p>© {year} Bluecrest University. All rights reserved.</p>
          <p className="font-medium text-amber-700">Go Further. Go Bluecrest.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
