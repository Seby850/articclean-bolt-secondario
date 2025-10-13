export interface Service {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  features: string[];
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  province: string;
  area?: string;
}

export const services: Service[] = [
  {
    id: 'pulizie-uffici',
    name: 'Pulizie Uffici',
    slug: 'pulizie-uffici',
    icon: 'Building2',
    shortDescription: 'Servizi professionali di pulizia per uffici, studi e spazi aziendali',
    features: [
      'Pulizia quotidiana postazioni di lavoro',
      'Sanificazione bagni e aree comuni',
      'Pulizia vetri interni ed esterni',
      'Gestione rifiuti e raccolta differenziata',
      'Aspirazione tappeti e moquette',
      'Pulizia sale riunioni e aree break'
    ]
  },
  {
    id: 'pulizie-condomini',
    name: 'Pulizie Condomini',
    slug: 'pulizie-condomini',
    icon: 'Home',
    shortDescription: 'Manutenzione e pulizia professionale di spazi condominiali',
    features: [
      'Pulizia scale e pianerottoli',
      'Lavaggio androni e ingressi',
      'Pulizia ascensori',
      'Manutenzione cortili e aree comuni',
      'Gestione raccolta differenziata',
      'Pulizia cantine e garage'
    ]
  },
  {
    id: 'pulizie-industriali',
    name: 'Pulizie Industriali',
    slug: 'pulizie-industriali',
    icon: 'Factory',
    shortDescription: 'Servizi specializzati per capannoni industriali e aree produttive',
    features: [
      'Pulizia capannoni e aree produttive',
      'Lavaggio pavimenti industriali',
      'Pulizia macchinari e impianti',
      'Rimozione polveri e residui industriali',
      'Sanificazione spogliatoi e servizi',
      'Gestione rifiuti industriali'
    ]
  },
  {
    id: 'pulizie-post-cantiere',
    name: 'Pulizie Post Cantiere',
    slug: 'pulizie-post-cantiere',
    icon: 'HardHat',
    shortDescription: 'Pulizia finale dopo lavori di costruzione e ristrutturazione',
    features: [
      'Rimozione detriti e materiali residui',
      'Pulizia profonda pavimenti e superfici',
      'Lavaggio vetri e infissi',
      'Aspirazione polveri da cantiere',
      'Pulizia finale pre-consegna',
      'Sanificazione completa ambienti'
    ]
  },
  {
    id: 'sanificazione-ambienti',
    name: 'Sanificazione Ambienti',
    slug: 'sanificazione-ambienti',
    icon: 'Shield',
    shortDescription: 'Sanificazione professionale con prodotti certificati e sicuri',
    features: [
      'Sanificazione con prodotti certificati',
      'Disinfezione profonda superfici',
      'Trattamenti antibatterici',
      'Sanificazione aria condizionata',
      'Certificazione intervento eseguito',
      'Protocolli anti COVID-19'
    ]
  },
  {
    id: 'pulizia-vetri',
    name: 'Pulizia Vetri',
    slug: 'pulizia-vetri',
    icon: 'Square',
    shortDescription: 'Lavaggio professionale vetrate per edifici e uffici',
    features: [
      'Pulizia vetri interni ed esterni',
      'Lavaggio vetrate grandi superfici',
      'Pulizia in altezza con attrezzature specifiche',
      'Rimozione macchie e aloni',
      'Pulizia cornici e infissi',
      'Interventi programmati periodici'
    ]
  },
  {
    id: 'gestione-carrellati',
    name: 'Gestione Carrellati',
    slug: 'gestione-carrellati',
    icon: 'Trash2',
    shortDescription: 'Gestione professionale bidoni per raccolta differenziata',
    features: [
      'Gestione bidoni raccolta differenziata',
      'Posizionamento e ritiro carrellati',
      'Pulizia e sanificazione contenitori',
      'Coordinamento con servizio comunale',
      'Rispetto calendario raccolta',
      'Segnalazione problematiche'
    ]
  },
  {
    id: 'giardinaggio',
    name: 'Giardinaggio',
    slug: 'giardinaggio',
    icon: 'TreeDeciduous',
    shortDescription: 'Cura e manutenzione professionale del verde',
    features: [
      'Taglio erba e sfalcio prati',
      'Potatura alberi e siepi',
      'Manutenzione aiuole e bordure',
      'Pulizia giardini e aree verdi',
      'Piantumazione e sistemazione verde',
      'Irrigazione e concimazione'
    ]
  }
];

export const locations: Location[] = [
  {
    id: 'brescia',
    name: 'Brescia',
    slug: 'brescia',
    province: 'Brescia',
    area: 'centro città'
  },
  {
    id: 'desenzano-del-garda',
    name: 'Desenzano del Garda',
    slug: 'desenzano-del-garda',
    province: 'Brescia',
    area: 'Lago di Garda'
  },
  {
    id: 'montichiari',
    name: 'Montichiari',
    slug: 'montichiari',
    province: 'Brescia',
    area: 'bassa bresciana'
  },
  {
    id: 'ghedi',
    name: 'Ghedi',
    slug: 'ghedi',
    province: 'Brescia',
    area: 'bassa bresciana'
  },
  {
    id: 'chiari',
    name: 'Chiari',
    slug: 'chiari',
    province: 'Brescia',
    area: 'Franciacorta'
  },
  {
    id: 'rezzato',
    name: 'Rezzato',
    slug: 'rezzato',
    province: 'Brescia',
    area: 'prima cintura'
  },
  {
    id: 'rovato',
    name: 'Rovato',
    slug: 'rovato',
    province: 'Brescia',
    area: 'Franciacorta'
  },
  {
    id: 'palazzolo-oglio',
    name: 'Palazzolo sull\'Oglio',
    slug: 'palazzolo-oglio',
    province: 'Brescia',
    area: 'bassa bresciana orientale'
  },
  {
    id: 'lonato-del-garda',
    name: 'Lonato del Garda',
    slug: 'lonato-del-garda',
    province: 'Brescia',
    area: 'Lago di Garda'
  },
  {
    id: 'salo',
    name: 'Salò',
    slug: 'salo',
    province: 'Brescia',
    area: 'Lago di Garda occidentale'
  },
  {
    id: 'castenedolo',
    name: 'Castenedolo',
    slug: 'castenedolo',
    province: 'Brescia',
    area: 'zona sud Brescia'
  },
  {
    id: 'sarezzo',
    name: 'Sarezzo',
    slug: 'sarezzo',
    province: 'Brescia',
    area: 'Val Trompia'
  },
  {
    id: 'orzinuovi',
    name: 'Orzinuovi',
    slug: 'orzinuovi',
    province: 'Brescia',
    area: 'bassa bresciana centrale'
  },
  {
    id: 'concesio',
    name: 'Concesio',
    slug: 'concesio',
    province: 'Brescia',
    area: 'Val Trompia sud'
  },
  {
    id: 'travagliato',
    name: 'Travagliato',
    slug: 'travagliato',
    province: 'Brescia',
    area: 'bassa bresciana ovest'
  },
  {
    id: 'roncadelle',
    name: 'Roncadelle',
    slug: 'roncadelle',
    province: 'Brescia',
    area: 'prima cintura'
  },
  {
    id: 'castelmella',
    name: 'Castelmella',
    slug: 'castelmella',
    province: 'Brescia',
    area: 'prima cintura'
  },
  {
    id: 'sirmione',
    name: 'Sirmione',
    slug: 'sirmione',
    province: 'Brescia',
    area: 'Lago di Garda'
  },
  {
    id: 'padenghe-sul-garda',
    name: 'Padenghe sul Garda',
    slug: 'padenghe-sul-garda',
    province: 'Brescia',
    area: 'Lago di Garda'
  },
  {
    id: 'pozzolengo',
    name: 'Pozzolengo',
    slug: 'pozzolengo',
    province: 'Brescia',
    area: 'Lago di Garda sud'
  },
  {
    id: 'calcinato',
    name: 'Calcinato',
    slug: 'calcinato',
    province: 'Brescia',
    area: 'bassa bresciana'
  },
  {
    id: 'carpenedolo',
    name: 'Carpenedolo',
    slug: 'carpenedolo',
    province: 'Brescia',
    area: 'bassa bresciana'
  },
  {
    id: 'bedizzole',
    name: 'Bedizzole',
    slug: 'bedizzole',
    province: 'Brescia',
    area: 'bassa bresciana'
  },
  {
    id: 'leno',
    name: 'Leno',
    slug: 'leno',
    province: 'Brescia',
    area: 'bassa bresciana'
  },
  {
    id: 'bagnolo-mella',
    name: 'Bagnolo Mella',
    slug: 'bagnolo-mella',
    province: 'Brescia',
    area: 'bassa bresciana'
  },
  {
    id: 'manerbio',
    name: 'Manerbio',
    slug: 'manerbio',
    province: 'Brescia',
    area: 'bassa bresciana'
  },
  {
    id: 'cazzago-san-martino',
    name: 'Cazzago San Martino',
    slug: 'cazzago-san-martino',
    province: 'Brescia',
    area: 'Franciacorta'
  },
  {
    id: 'castrezzato',
    name: 'Castrezzato',
    slug: 'castrezzato',
    province: 'Brescia',
    area: 'Franciacorta'
  },
  {
    id: 'coccaglio',
    name: 'Coccaglio',
    slug: 'coccaglio',
    province: 'Brescia',
    area: 'Franciacorta'
  },
  {
    id: 'erbusco',
    name: 'Erbusco',
    slug: 'erbusco',
    province: 'Brescia',
    area: 'Franciacorta'
  },
  {
    id: 'capriolo',
    name: 'Capriolo',
    slug: 'capriolo',
    province: 'Brescia',
    area: 'Franciacorta'
  },
  {
    id: 'adro',
    name: 'Adro',
    slug: 'adro',
    province: 'Brescia',
    area: 'Franciacorta'
  },
  {
    id: 'mazzano',
    name: 'Mazzano',
    slug: 'mazzano',
    province: 'Brescia',
    area: 'prima cintura'
  },
  {
    id: 'botticino',
    name: 'Botticino',
    slug: 'botticino',
    province: 'Brescia',
    area: 'prima cintura'
  },
  {
    id: 'gardone-riviera',
    name: 'Gardone Riviera',
    slug: 'gardone-riviera',
    province: 'Brescia',
    area: 'Lago di Garda occidentale'
  },
  {
    id: 'roe-volciano',
    name: 'Roè Volciano',
    slug: 'roe-volciano',
    province: 'Brescia',
    area: 'Lago di Garda occidentale'
  },
  {
    id: 'san-felice-del-benaco',
    name: 'San Felice del Benaco',
    slug: 'san-felice-del-benaco',
    province: 'Brescia',
    area: 'Lago di Garda occidentale'
  },
  {
    id: 'puegnago-del-garda',
    name: 'Puegnago del Garda',
    slug: 'puegnago-del-garda',
    province: 'Brescia',
    area: 'Lago di Garda occidentale'
  },
  {
    id: 'villa-carcina',
    name: 'Villa Carcina',
    slug: 'villa-carcina',
    province: 'Brescia',
    area: 'Val Trompia'
  },
  {
    id: 'gardone-val-trompia',
    name: 'Gardone Val Trompia',
    slug: 'gardone-val-trompia',
    province: 'Brescia',
    area: 'Val Trompia'
  },
  {
    id: 'lumezzane',
    name: 'Lumezzane',
    slug: 'lumezzane',
    province: 'Brescia',
    area: 'Val Trompia'
  },
  {
    id: 'collebeato',
    name: 'Collebeato',
    slug: 'collebeato',
    province: 'Brescia',
    area: 'Val Trompia sud'
  },
  {
    id: 'roccafranca',
    name: 'Roccafranca',
    slug: 'roccafranca',
    province: 'Brescia',
    area: 'bassa bresciana centrale'
  },
  {
    id: 'orzivecchi',
    name: 'Orzivecchi',
    slug: 'orzivecchi',
    province: 'Brescia',
    area: 'bassa bresciana centrale'
  },
  {
    id: 'pompiano',
    name: 'Pompiano',
    slug: 'pompiano',
    province: 'Brescia',
    area: 'bassa bresciana centrale'
  },
  {
    id: 'verolanuova',
    name: 'Verolanuova',
    slug: 'verolanuova',
    province: 'Brescia',
    area: 'bassa bresciana centrale'
  },
  {
    id: 'ospitaletto',
    name: 'Ospitaletto',
    slug: 'ospitaletto',
    province: 'Brescia',
    area: 'bassa bresciana ovest'
  },
  {
    id: 'castegnato',
    name: 'Castegnato',
    slug: 'castegnato',
    province: 'Brescia',
    area: 'bassa bresciana ovest'
  },
  {
    id: 'torbole-casaglia',
    name: 'Torbole Casaglia',
    slug: 'torbole-casaglia',
    province: 'Brescia',
    area: 'bassa bresciana ovest'
  }
];
