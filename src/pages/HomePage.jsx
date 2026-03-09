import { Link } from 'react-router-dom';
import AdSlot from '../components/AdSlot';
import ArticleCard from '../components/ArticleCard';
import SEOHead from '../components/SEOHead';
import { articles, categories } from '../data/articles';

export default function HomePage() {
  const latest = [...articles].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
  const popular = [...articles].sort((a, b) => b.popularScore - a.popularScore);

  return (
    <>
      <SEOHead title="Homepage" description="Blog kesehatan profesional dengan artikel gejala umum, tips hidup sehat, dan panduan medis ringan." path="/" />
      <section className="mb-10 rounded-2xl bg-gradient-to-r from-teal-800 to-cyan-600 p-8 text-white">
        <h1 className="text-3xl font-bold">blogdoktersobri</h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base">Media edukasi kesehatan modern, profesional, dan mudah dipahami untuk keluarga Indonesia.</p>
        <Link to="/blog" className="mt-5 inline-block rounded-lg bg-white px-4 py-2 font-semibold text-teal-700">Jelajahi Artikel</Link>
      </section>
      <AdSlot label="AdSense - Above The Fold" className="mb-8" />
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Artikel Terbaru</h2>
        <div className="grid gap-4 md:grid-cols-3">{latest.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
      </section>
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Artikel Populer</h2>
        <div className="grid gap-4 md:grid-cols-3">{popular.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Kategori Utama</h2>
        <div className="flex flex-wrap gap-2">{categories.map((c) => <Link key={c} className="rounded-full bg-white px-4 py-2 text-sm" to={`/kategori/${encodeURIComponent(c.toLowerCase().replace(/\s+/g, '-'))}`}>{c}</Link>)}</div>
      </section>
    </>
  );
}
