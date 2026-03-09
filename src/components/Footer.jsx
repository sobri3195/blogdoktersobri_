import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white py-8">
      <div className="container-page grid gap-3 text-sm text-slate-600 md:grid-cols-2">
        <p>© {new Date().getFullYear()} blogdoktersobri. Edukasi, bukan diagnosis.</p>
        <div className="flex gap-3 md:justify-end">
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
