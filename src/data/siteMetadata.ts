export const siteMetadata = {
  siteName: 'Arctic Pulizie',
  legalName: 'Arctic Pulizie Srl',
  baseUrl: 'https://www.articpulizie.it',
  brandTagline: 'Impresa di Pulizie a Brescia e Provincia',
  phone: '+39 030 987 6543',
  email: 'info@arcticpulizie.it',
  streetAddress: 'Via Carpaccio 10',
  postalCode: '25100',
  locality: 'Brescia',
  province: 'BS',
  countryCode: 'IT',
  areaServed: 'Brescia e provincia',
  logoUrl: 'https://www.articpulizie.it/assets/logo.svg',
  socialProfiles: [
    'https://www.facebook.com/arcticpulizie',
    'https://www.instagram.com/arcticpulizie'
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
