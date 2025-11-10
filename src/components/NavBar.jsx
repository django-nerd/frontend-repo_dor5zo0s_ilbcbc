// NavBar.jsx
// Sticky, responsive navigation bar with brand, anchors, and gold accent
import React from 'react';
import { GraduationCap, Menu } from 'lucide-react';

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#events', label: 'Events' },
    { href: '#news', label: 'News' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100/60 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand section */}
        <a href="#home" className="group flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white shadow-sm ring-1 ring-blue-500/40">
            <GraduationCap size={20} />
            <span className="pointer-events-none absolute -bottom-1 h-1 w-6 rounded-full bg-amber-400/80" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">
            Bluecrest University
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {l.label}
                <span className="absolute inset-x-0 -bottom-1 mx-auto hidden h-0.5 w-6 rounded-full bg-amber-400 md:group-hover:block" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#apply"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Apply Now
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          onClick={() => setOpen((s) => !s)}
        >
          <Menu />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-blue-100 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#apply"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                  onClick={() => setOpen(false)}
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
