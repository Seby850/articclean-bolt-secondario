import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.arcticclean.it/#business",
    "name": "Arctic Clean Service",
    "description": "Servizi di pulizie professionali per aziende, uffici, industrie e sanificazione ambienti",
    "url": "https://www.arcticclean.it",
    "telephone": "+39-XXX-XXXXXXX",
    "priceRange": "€€",
    "image": "https://www.arcticclean.it/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IT",
      "addressLocality": "Milano",
      "addressRegion": "Lombardia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.4642",
      "longitude": "9.1900"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/arcticclean",
      "https://www.instagram.com/arcticclean"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "150"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arctic Clean Service",
    "url": "https://www.arcticclean.it",
    "logo": "https://www.arcticclean.it/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39-XXX-XXXXXXX",
      "contactType": "customer service",
      "availableLanguage": ["Italian"],
      "areaServed": "IT"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pulizie Professionali",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arctic Clean Service",
      "url": "https://www.arcticclean.it"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Italia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi di Pulizia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pulizie Uffici",
            "description": "Servizi completi per uffici e spazi lavorativi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pulizie Industriali",
            "description": "Interventi specializzati per capannoni e industrie"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sanificazione Ambienti",
            "description": "Trattamenti certificati per la sicurezza e igiene"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
