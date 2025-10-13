import { services, locations, Service, Location } from '@/data/servicesData';

interface RelatedService {
  service: Service;
  anchorText: string;
}

interface NearbyLocation {
  location: Location;
  anchorText: string;
}

const areaGroups: Record<string, string[]> = {
  'centro città': ['brescia'],
  'Lago di Garda': ['desenzano-del-garda', 'lonato-del-garda', 'salo'],
  'bassa bresciana': ['montichiari', 'ghedi', 'orzinuovi', 'travagliato'],
  'Franciacorta': ['chiari', 'rovato', 'palazzolo-oglio'],
  'prima cintura': ['rezzato', 'castenedolo'],
  'Val Trompia': ['sarezzo', 'concesio']
};

const getLocationArea = (locationId: string): string[] => {
  for (const locationIds of Object.values(areaGroups)) {
    if (locationIds.includes(locationId)) {
      return locationIds;
    }
  }
  return [];
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
  const currentLocation = locations.find(l => l.id === currentLocationId);
  if (!currentLocation) return [];

  const areaLocations = getLocationArea(currentLocationId);

  const sameAreaLocations = locations.filter(
    l => l.id !== currentLocationId && areaLocations.includes(l.id)
  );

  const otherLocations = locations.filter(
    l => l.id !== currentLocationId && !areaLocations.includes(l.id)
  );

  const nearbyLocationsList = [
    ...sameAreaLocations.slice(0, 2),
    ...otherLocations.slice(0, 2)
  ].slice(0, 4);

  const service = services.find(s => s.id === serviceId);
  if (!service) return [];

  const anchorVariations = [
    (l: Location) => `${service.name} a ${l.name}`,
    (l: Location) => `${service.name} per aziende a ${l.name}`,
    (l: Location) => `Servizio di ${service.name.toLowerCase()} a ${l.name}`,
    (l: Location) => `${service.name} professionale a ${l.name}`
  ];

  return nearbyLocationsList.map((location, index) => ({
    location,
    anchorText: anchorVariations[index % anchorVariations.length](location)
  }));
};
