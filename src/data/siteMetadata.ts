export const siteMetadata = {
  siteName: 'Artic Pulizie',
  legalName: 'Artic Pulizie Srl',
  baseUrl: 'https://www.articpulizie.it',
  brandTagline: 'Impresa di Pulizie a Brescia e Provincia',
  phone: '+39 030 52 31 285',
  email: 'info@articpulizie.it',
  streetAddress: 'Via Carpaccio 10',
  postalCode: '25100',
  locality: 'Brescia',
  province: 'BS',
  countryCode: 'IT',
  areaServed: 'Brescia e provincia',
  logoUrl: 'https://www.articpulizie.it/assets/logo.svg',
  socialProfiles: [
    'https://www.facebook.com/articpulizie',
    'https://www.instagram.com/articpulizie'
  ],
  aggregateRating: {
    ratingValue: '4.9',
    reviewCount: '87'
  }
};

export const buildCanonicalUrl = (path: string) => {
  if (!path || path === '/') {
    return siteMetadata.baseUrl;
  }

  return `${siteMetadata.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};
