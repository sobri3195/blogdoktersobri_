import SEOHead from '../components/SEOHead';

export default function SimplePage({ title, description, children, path }) {
  return (
    <>
      <SEOHead title={title} description={description} path={path} />
      <h1 className="mb-4 text-3xl font-bold">{title}</h1>
      <div className="rounded-xl bg-white p-6 text-slate-700">{children}</div>
    </>
  );
}
