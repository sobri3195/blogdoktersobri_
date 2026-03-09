import { useMemo, useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import SEOHead from '../components/SEOHead';
import AdSlot from '../components/AdSlot';
import { articles, categories } from '../data/articles';

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('latest');

  const tags = useMemo(() => [...new Set(articles.flatMap((a) => a.tags))], []);
  const [tag, setTag] = useState('all');

  const filtered = useMemo(() => {
    let result = articles.filter((a) => a.title.toLowerCase().includes(query.toLowerCase()));
    if (category !== 'all') result = result.filter((a) => a.category === category);
    if (tag !== 'all') result = result.filter((a) => a.tags.includes(tag));
    result.sort((a, b) => (sort === 'latest' ? b.publishDate.localeCompare(a.publishDate) : b.popularScore - a.popularScore));
    return result;
  }, [query, category, tag, sort]);

  return (
    <>
      <SEOHead title="Blog" description="Daftar artikel kesehatan, filter kategori dan tag, serta pencarian cepat." path="/blog" />
      <h1 className="mb-4 text-3xl font-bold">Semua Artikel</h1>
      <div className="mb-6 grid gap-3 rounded-xl bg-white p-4 md:grid-cols-4">
        <input className="rounded border p-2" placeholder="Cari artikel..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="rounded border p-2" value={category} onChange={(e) => setCategory(e.target.value)}><option value="all">Semua kategori</option>{categories.map((c) => <option key={c} value={c}>{c}</option>)}</select>
        <select className="rounded border p-2" value={tag} onChange={(e) => setTag(e.target.value)}><option value="all">Semua tag</option>{tags.map((t) => <option key={t} value={t}>{t}</option>)}</select>
        <select className="rounded border p-2" value={sort} onChange={(e) => setSort(e.target.value)}><option value="latest">Terbaru</option><option value="popular">Populer</option></select>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {filtered.map((article, idx) => (
          <div key={article.slug}>
            <ArticleCard article={article} />
            {(idx + 1) % 3 === 0 && <AdSlot label="AdSense - In-feed" className="mt-4" />}
          </div>
        ))}
      </div>
    </>
  );
}
