export const siteConfig = {
  name: 'blogdoktersobri',
  domain: 'https://www.blogdoktersobri.com',
  defaultDescription:
    'Media edukasi kesehatan modern dan terpercaya: gejala umum, tips hidup sehat, dan panduan medis ringan.'
};

export const toAbsoluteUrl = (path = '/') => `${siteConfig.domain}${path}`;
