import { useMemo, useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import SEOHead from '../components/SEOHead';
import AdSlot from '../components/AdSlot';
import { articles, categories } from '../data/articles';

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('latest');

  const tags = useMemo(() => [...new Set(articles.flatMap((a) => a.tags))].sort(), []);
  const [tag, setTag] = useState('all');

  const filtered = useMemo(() => {
    let result = articles.filter((a) => {
      const haystack = `${a.title} ${a.excerpt} ${a.tags.join(' ')}`.toLowerCase();
      return haystack.includes(query.toLowerCase());
    });
    if (category !== 'all') result = result.filter((a) => a.category === category);
    if (tag !== 'all') result = result.filter((a) => a.tags.includes(tag));
    result.sort((a, b) => (sort === 'latest' ? b.publishDate.localeCompare(a.publishDate) : b.popularScore - a.popularScore));
    return result;
  }, [query, category, tag, sort]);

  const resetFilters = () => {
    setQuery('');
    setCategory('all');
    setTag('all');
    setSort('latest');
  };

  return (
    <>
      <SEOHead title="Blog" description="Daftar artikel kesehatan, filter kategori dan tag, serta pencarian cepat." path="/blog" />
      <h1 className="mb-2 text-3xl font-bold">Semua Artikel</h1>
      <p className="mb-4 text-sm text-slate-600">Temukan topik kesehatan berdasarkan kata kunci, kategori, dan tag.</p>
      <div className="mb-4 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-4">
        <input className="rounded-lg border border-slate-200 p-2" placeholder="Cari artikel, topik, tag..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="rounded-lg border border-slate-200 p-2" value={category} onChange={(e) => setCategory(e.target.value)}><option value="all">Semua kategori</option>{categories.map((c) => <option key={c} value={c}>{c}</option>)}</select>
        <select className="rounded-lg border border-slate-200 p-2" value={tag} onChange={(e) => setTag(e.target.value)}><option value="all">Semua tag</option>{tags.map((t) => <option key={t} value={t}>{t}</option>)}</select>
        <select className="rounded-lg border border-slate-200 p-2" value={sort} onChange={(e) => setSort(e.target.value)}><option value="latest">Terbaru</option><option value="popular">Populer</option></select>
      </div>
      <div className="mb-6 flex items-center justify-between text-sm text-slate-600">
        <p>{filtered.length} artikel ditemukan</p>
        <button type="button" onClick={resetFilters} className="rounded-lg border border-slate-200 px-3 py-1 font-medium hover:bg-slate-50">Reset filter</button>
      </div>
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="font-semibold text-slate-700">Tidak ada artikel yang cocok.</p>
          <p className="mt-2 text-sm text-slate-500">Coba kata kunci lain atau ubah filter.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, idx) => (
            <div key={article.slug}>
              <ArticleCard article={article} />
              {(idx + 1) % 3 === 0 && <AdSlot label="AdSense - In-feed" className="mt-4" />}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
