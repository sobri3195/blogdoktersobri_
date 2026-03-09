import { Link } from 'react-router-dom';
import AdSlot from '../components/AdSlot';
import ArticleCard from '../components/ArticleCard';
import SEOHead from '../components/SEOHead';
import { articles, categories } from '../data/articles';

export default function HomePage() {
  const latest = [...articles].sort((a, b) => b.publishDate.localeCompare(a.publishDate)).slice(0, 6);
  const popular = [...articles].sort((a, b) => b.popularScore - a.popularScore).slice(0, 3);

  return (
    <>
      <SEOHead title="Homepage" description="Blog kesehatan profesional dengan artikel gejala umum, tips hidup sehat, dan panduan medis ringan." path="/" />
      <section className="mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-teal-800 via-cyan-700 to-blue-700 p-6 text-white shadow-xl md:p-10">
        <p className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">Trusted health education</p>
        <h1 className="text-3xl font-bold md:text-4xl">Informasi kesehatan yang mudah dipahami dan bisa langsung dipraktikkan.</h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base">Kami merangkum topik medis populer menjadi panduan yang jelas, aman, dan relevan untuk keluarga Indonesia.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/blog" className="rounded-lg bg-white px-4 py-2 font-semibold text-teal-700">Jelajahi Artikel</Link>
          <Link to="/about" className="rounded-lg border border-white/60 px-4 py-2 font-semibold text-white">Tentang Kami</Link>
        </div>
      </section>
      <AdSlot label="AdSense - Above The Fold" className="mb-8" />
      <section className="mb-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold">Artikel Terbaru</h2>
          <Link to="/blog" className="text-sm font-semibold text-teal-700">Lihat semua →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{latest.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
      </section>
      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="mb-4 text-2xl font-bold">Artikel Populer Minggu Ini</h2>
        <div className="grid gap-3 md:grid-cols-3">{popular.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Kategori Utama</h2>
        <div className="flex flex-wrap gap-2">{categories.map((c) => <Link key={c} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:border-teal-300 hover:text-teal-700" to={`/kategori/${encodeURIComponent(c.toLowerCase().replace(/\s+/g, '-'))}`}>{c}</Link>)}</div>
      </section>
    </>
  );
}
