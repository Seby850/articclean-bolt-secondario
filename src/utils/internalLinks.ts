import { services, locations, Service, Location } from '@/data/servicesData';

interface RelatedService {
  service: Service;
  anchorText: string;
}

interface NearbyLocation {
  location: Location;
  anchorText: string;
}

const nearbyLocationsMap: Record<string, string[]> = {
  'brescia': ['rezzato', 'concesio', 'roncadelle', 'castelmella'],
  'desenzano-del-garda': ['sirmione', 'lonato-del-garda', 'padenghe-sul-garda', 'pozzolengo'],
  'montichiari': ['ghedi', 'calcinato', 'carpenedolo', 'bedizzole'],
  'ghedi': ['montichiari', 'leno', 'bagnolo-mella', 'manerbio'],
  'chiari': ['rovato', 'palazzolo-oglio', 'cazzago-san-martino', 'castrezzato'],
  'rovato': ['coccaglio', 'erbusco', 'cazzago-san-martino', 'chiari'],
  'rezzato': ['mazzano', 'castenedolo', 'botticino', 'brescia'],
  'lonato-del-garda': ['desenzano-del-garda', 'bedizzole', 'calcinato', 'padenghe-sul-garda'],
  'palazzolo-oglio': ['chiari', 'capriolo', 'adro', 'castrezzato'],
  'salo': ['gardone-riviera', 'roe-volciano', 'san-felice-del-benaco', 'puegnago-del-garda'],
  'castenedolo': ['rezzato', 'mazzano', 'montichiari', 'brescia'],
  'sarezzo': ['concesio', 'villa-carcina', 'gardone-val-trompia', 'lumezzane'],
  'orzinuovi': ['roccafranca', 'orzivecchi', 'pompiano', 'verolanuova'],
  'concesio': ['sarezzo', 'villa-carcina', 'collebeato', 'brescia'],
  'travagliato': ['ospitaletto', 'castegnato', 'roncadelle', 'torbole-casaglia']
};

export const getRelatedServices = (currentServiceId: string, locationId: string): RelatedService[] => {
  const otherServices = services.filter(s => s.id !== currentServiceId);

  const selectedServices = otherServices
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const location = locations.find(l => l.id === locationId);
  if (!location) return [];

  const anchorVariations = [
    (s: Service) => `${s.name} a ${location.name}`,
    (s: Service) => `Servizi di ${s.name.toLowerCase()} a ${location.name}`,
    (s: Service) => `${s.name} professionali a ${location.name}`
  ];

  return selectedServices.map((service, index) => ({
    service,
    anchorText: anchorVariations[index % anchorVariations.length](service)
  }));
};

export const getNearbyLocations = (currentLocationId: string, serviceId: string): NearbyLocation[] => {
  const nearbyLocationIds = nearbyLocationsMap[currentLocationId];

  if (!nearbyLocationIds || nearbyLocationIds.length === 0) {
    return [];
  }

  const nearbyLocationsList = nearbyLocationIds
    .map(id => locations.find(l => l.id === id))
    .filter((l): l is Location => l !== undefined)
    .slice(0, 4);

  const service = services.find(s => s.id === serviceId);
  if (!service) return [];

  const anchorVariations = [
    (l: Location) => `${service.name} a ${l.name}`,
    (l: Location) => `Servizio di ${service.name.toLowerCase()} a ${l.name}`,
    (l: Location) => `${service.name} ${l.name}`,
    (l: Location) => `${service.name} professionali a ${l.name}`
  ];

  return nearbyLocationsList.map((location, index) => ({
    location,
    anchorText: anchorVariations[index % anchorVariations.length](location)
  }));
};
