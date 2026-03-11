import { Link, useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import SEOHead from '../components/SEOHead';
import AdSlot from '../components/AdSlot';
import { buildToc } from '../utils/content';
import { toAbsoluteUrl } from '../utils/seo';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) return <p>Article not found.</p>;

  const toc = buildToc(article.content);
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);
  const readTime = Math.max(2, Math.round(article.content.split(' ').length / 180));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    datePublished: article.publishDate,
    dateModified: article.updatedDate,
    author: { '@type': 'Person', name: article.author },
    mainEntityOfPage: toAbsoluteUrl(`/blog/${article.slug}`),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: toAbsoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: toAbsoluteUrl('/blog') },
        { '@type': 'ListItem', position: 3, name: article.title, item: toAbsoluteUrl(`/blog/${article.slug}`) }
      ]
    }
  };

  return (
    <>
      <SEOHead title={article.title} description={article.excerpt} path={`/blog/${article.slug}`} type="article" jsonLd={jsonLd} />
      <nav className="mb-3 text-sm text-slate-600"><Link to="/">Home</Link> / <Link to="/blog">Blog</Link> / {article.title}</nav>
      <h1 className="text-3xl font-bold text-slate-900">{article.title}</h1>
      <p className="mt-2 text-sm text-slate-600">{article.author} • {article.publishDate} • {article.category} • {readTime} min read</p>
      <div className="mt-2 flex flex-wrap gap-2">{article.tags.map((item) => <Link key={item} to={`/tag/${encodeURIComponent(item.toLowerCase().replace(/\s+/g, '-'))}`} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">#{item}</Link>)}</div>
      <img src={article.featuredImage} alt={article.title} loading="lazy" className="my-5 h-72 w-full rounded-2xl object-cover" />
      <AdSlot label="AdSense - Above Content" className="mb-4" />
      <section className="mb-4 rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="mb-2 text-xl font-semibold">Table of Contents</h2>
        {toc.map((item, idx) => <p key={item.id || idx} className="text-sm text-slate-600">• {item.text}</p>)}
      </section>
      <article className="prose max-w-none rounded-2xl border border-slate-200 bg-white p-6">
        {article.htmlContent
          ? <div dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
          : article.content.split('\n').map((line, i) => <p key={i}>{line}</p>)}
      </article>
      <AdSlot label="AdSense - Mid Article" className="my-4" />
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="mb-3 text-xl font-semibold">FAQ</h2>
        {article.faq.map((item) => <details key={item.q} className="mb-2 rounded-lg border border-slate-200 p-3"><summary className="font-medium">{item.q}</summary><p className="mt-2 text-sm text-slate-700">{item.a}</p></details>)}
      </section>
      <AdSlot label="AdSense - Below Article" className="my-4" />
      <section>
        <h2 className="mb-3 text-xl font-semibold">Related Articles</h2>
        <div className="grid gap-3 md:grid-cols-2">{related.map((item) => <Link key={item.slug} to={`/blog/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 hover:border-teal-300">{item.title}</Link>)}</div>
      </section>
    </>
  );
}
