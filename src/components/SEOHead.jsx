import { useEffect } from 'react';
import { siteConfig, toAbsoluteUrl } from '../utils/seo';

const setMeta = (name, content, property = false) => {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    if (property) el.setAttribute('property', name);
    else el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

export default function SEOHead({ title, description, path = '/', type = 'website', jsonLd }) {
  useEffect(() => {
    document.title = `${title} | ${siteConfig.name}`;
    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', type, true);
    setMeta('og:url', toAbsoluteUrl(path), true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = toAbsoluteUrl(path);

    const id = 'jsonld-seo';
    const old = document.getElementById(id);
    if (old) old.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, type, jsonLd]);

  return null;
}
