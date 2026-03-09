import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white py-10">
      <div className="container-page grid gap-5 text-sm text-slate-600 md:grid-cols-2">
        <div>
          <BrandLogo compact />
          <p className="mt-3 max-w-md">© {new Date().getFullYear()} blogdoktersobri. Konten disusun untuk edukasi dan bukan pengganti diagnosis medis profesional.</p>
        </div>
        <div className="flex flex-wrap items-start gap-3 md:justify-end">
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
