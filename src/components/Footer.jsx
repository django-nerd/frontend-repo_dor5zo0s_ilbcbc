// Footer.jsx
// Simple responsive footer with links and copyright
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-600">
            © {year} Bluecrest University. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#news" className="text-gray-600 hover:text-gray-900">News</a>
            <a href="#events" className="text-gray-600 hover:text-gray-900">Events</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
