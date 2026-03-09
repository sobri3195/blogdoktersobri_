import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="border-b bg-white">
      <nav className="container-page flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold text-primary">blogdoktersobri</Link>
        <div className="flex gap-4 text-sm font-medium text-slate-700">
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
