import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: string;
  structuredData?: object[];
}

const SEO = ({
  title = 'Arctic Clean Service - Pulizie Professionali per Aziende',
  description = 'Arctic Clean Service offre servizi di pulizie professionali per aziende, uffici, capannoni industriali e sanificazione ambienti. Preventivo gratuito in 24h. Oltre 15 anni di esperienza.',
  keywords = 'pulizie professionali, pulizie uffici, pulizie industriali, sanificazione ambienti, pulizie post cantiere, pulizie vetri, servizi di pulizia aziende, impresa di pulizie',
  canonical = 'https://www.arcticclean.it/',
  ogImage = 'https://www.arcticclean.it/og-image.jpg',
  type = 'website',
  structuredData
}: SEOProps) => {
  const fullTitle = title.includes('Arctic Clean') ? title : `${title} | Arctic Clean Service`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Arctic Clean Service" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Arctic Clean Service" />
      <meta property="og:locale" content="it_IT" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {structuredData && structuredData.map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
};

export default SEO;
