import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.arcticclean.it/#business",
    "name": "Impresa di Pulizie",
    "description": "Servizi di pulizie professionali per aziende, privati, condomini, uffici, industrie, giardinaggio e gestione carrellati. 28 dipendenti qualificati",
    "url": "https://www.impresapulizie.it",
    "telephone": "+39-030-9876543",
    "priceRange": "€€",
    "image": "https://www.arcticclean.it/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Carpaccio 10",
      "addressCountry": "IT",
      "addressLocality": "Brescia",
      "postalCode": "25100",
      "addressRegion": "Lombardia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.5416",
      "longitude": "10.2118"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "07:30",
        "closes": "13:00"
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
    "name": "Impresa di Pulizie",
    "url": "https://www.impresapulizie.it",
    "logo": "https://www.arcticclean.it/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39-030-9876543",
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
      "name": "Impresa di Pulizie",
      "url": "https://www.impresapulizie.it"
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
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pulizie Condomini",
            "description": "Servizi di pulizia per aree comuni condominiali"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Giardinaggio e Manutenzione Verde",
            "description": "Cura e manutenzione di parchi, giardini e aiuole"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gestione Carrellati",
            "description": "Gestione bidoni per raccolta differenziata"
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
