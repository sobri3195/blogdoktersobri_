export const siteConfig = {
  name: 'blogdoktersobri',
  domain: 'https://www.blogdoktersobri.com',
  defaultDescription:
    'A modern and trusted health education platform: common symptoms, healthy living tips, and practical medical guidance.'
};

export const toAbsoluteUrl = (path = '/') => `${siteConfig.domain}${path}`;
