export const buildToc = (markdown = '') => {
  return markdown
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => {
      const text = line.replace('## ', '').trim();
      const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
      return { text, id };
    });
};

export const simpleMarkdownToHtml = (markdown = '') =>
  markdown
    .replace(/^## (.*)$/gm, '<h2 id="$1">$1</h2>')
    .replace(/^- (.*)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    .replace(/\n\n/g, '<p></p>');
