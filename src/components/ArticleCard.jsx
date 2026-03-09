import { Link } from 'react-router-dom';

export default function ArticleCard({ article }) {
  return (
    <article className="overflow-hidden rounded-xl border bg-white">
      <img src={article.featuredImage} alt={article.title} loading="lazy" className="h-44 w-full object-cover" />
      <div className="space-y-2 p-4">
        <p className="text-xs font-semibold uppercase text-primary">{article.category}</p>
        <h3 className="text-lg font-semibold leading-snug"><Link to={`/blog/${article.slug}`}>{article.title}</Link></h3>
        <p className="text-sm text-slate-600">{article.excerpt}</p>
      </div>
    </article>
  );
}
