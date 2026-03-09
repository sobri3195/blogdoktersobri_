import { Link } from 'react-router-dom';

export default function BrandLogo({ compact = false }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2" aria-label="Kembali ke beranda blogdoktersobri">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-200">
        <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden="true">
          <path d="M12 30c0-10.5 8.5-19 19-19 3.8 0 7.5 1.1 10.6 3.2l2.2 1.5-4.5 6.6-2.2-1.4a11 11 0 1 0 0 18.2l2.2-1.4 4.5 6.6-2.2 1.5A19 19 0 1 1 12 30Z" fill="currentColor" />
          <path d="M42 18h8v8h8v8h-8v8h-8v-8h-8v-8h8v-8Z" fill="currentColor" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-lg font-extrabold tracking-tight text-slate-900">blogdoktersobri</span>
          <span className="block text-xs font-medium text-slate-500">Edukasi kesehatan keluarga</span>
        </span>
      )}
    </Link>
  );
}
