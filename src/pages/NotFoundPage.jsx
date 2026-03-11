import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-5xl font-bold text-primary">404</h1>
      <p className="mt-3">Page not found.</p>
      <Link to="/" className="mt-6 inline-block rounded bg-primary px-4 py-2 text-white">Back to Home</Link>
    </div>
  );
}
