import { Link } from 'react-router-dom';

export default function ArticleCard({ article }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img src={article.featuredImage} alt={article.title} loading="lazy" className="h-44 w-full object-cover transition duration-300 group-hover:scale-105" />
      <div className="space-y-2 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{article.category}</p>
        <h3 className="text-lg font-semibold leading-snug text-slate-900">
          <Link to={`/blog/${article.slug}`} className="hover:text-teal-700">{article.title}</Link>
        </h3>
        <p className="text-sm text-slate-600">{article.excerpt}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {article.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">#{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
