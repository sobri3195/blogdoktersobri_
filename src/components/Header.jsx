import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const navItems = [
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="container-page py-3">
        <div className="flex items-center justify-between gap-4">
          <BrandLogo compact={false} />
          <button
            type="button"
            className="inline-flex rounded-lg border border-slate-200 p-2 text-slate-600 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-100'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/blog" className="ml-1 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 px-3 py-2 text-sm font-semibold text-white">Start Reading</Link>
          </div>
        </div>
        {open && (
          <div className="mt-3 space-y-1 rounded-xl border border-slate-100 bg-slate-50 p-2 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm font-semibold ${isActive ? 'bg-teal-50 text-teal-700' : 'text-slate-700'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
