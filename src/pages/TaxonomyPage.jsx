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
      <h1 className="mb-4 text-3xl font-bold">{mode === 'category' ? 'Kategori' : 'Tag'}: {slug}</h1>
      <div className="grid gap-4 md:grid-cols-3">{filtered.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
    </section>
  );
}
