import { useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';

export default function TaxonomyPage({ mode = 'category' }) {
  const { slug } = useParams();
  const value = slug.replace(/-/g, ' ').toLowerCase();
  const filtered = articles.filter((a) =>
    mode === 'category'
      ? a.category.toLowerCase() === value
      : a.tags.some((t) => t.toLowerCase().replace(/\s+/g, '-') === slug)
  );

  return (
    <section>
      <h1 className="mb-4 text-3xl font-bold">{mode === 'category' ? 'Category' : 'Tag'}: {slug}</h1>
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed bg-white p-6 text-center text-sm text-slate-500">No articles yet for this topic.</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
      )}
    </section>
  );
}
