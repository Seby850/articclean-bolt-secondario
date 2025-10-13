import { services, locations } from './servicesData';

export interface LocalPageContent {
  serviceId: string;
  locationId: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  introText: string;
  whyChooseText: string;
  areaDescription: string;
  nearbyAreas: string[];
  ctaText: string;
}

const generateContent = (serviceId: string, locationId: string): LocalPageContent => {
  const service = services.find(s => s.id === serviceId);
  const location = locations.find(l => l.id === locationId);

  if (!service || !location) {
    throw new Error(`Service or location not found: ${serviceId}, ${locationId}`);
  }

  const nearby = locations
    .filter(l => l.id !== locationId && l.province === location.province)
    .slice(0, 4)
    .map(l => l.name);

  const contentVariations: Record<string, any> = {
    'pulizie-uffici': {
      h1Suffix: 'Servizi Professionali per Aziende e Studi',
      intro: `Offriamo servizi professionali di ${service.name.toLowerCase()} a ${location.name} e in tutta la provincia di ${location.province}. La nostra impresa garantisce ambienti di lavoro sempre puliti e ordinati con un team di oltre 28 operatori qualificati. Utilizziamo prodotti professionali ad alta efficacia sgrassante e attrezzature certificate per risultati impeccabili. Serviamo quotidianamente aziende, studi professionali e uffici pubblici nella zona ${location.area ? `di ${location.area}` : `di ${location.name}`} con interventi programmati e flessibili.`,
      whyChoose: `Scegliere i nostri servizi di pulizia uffici a ${location.name} significa affidarsi a professionisti con esperienza consolidata nel territorio. Garantiamo puntualità negli interventi, utilizzo di prodotti certificati e personale formato continuamente. Operiamo con contratti flessibili personalizzati sulle esigenze di ogni cliente, dalle piccole imprese alle grandi aziende. Il nostro obiettivo è creare ambienti di lavoro salubri e professionali che trasmettano una buona immagine ai vostri clienti e dipendenti.`,
      area: `I nostri servizi di pulizia uffici sono attivi su tutto il territorio di ${location.name} e comuni limitrofi. Operiamo regolarmente nella zona ${location.area ? `${location.area}` : `di ${location.name}`}, raggiungendo anche le località vicine come ${nearby.slice(0, 3).join(', ')}. La vicinanza al territorio ci permette di garantire interventi rapidi, sopralluoghi gratuiti e un servizio clienti sempre disponibile.`,
      cta: `Contattaci ora per un preventivo gratuito di pulizia uffici a ${location.name}. Offriamo sopralluoghi senza impegno e rispondiamo entro 24 ore. Il nostro team è a disposizione per valutare le tue esigenze e proporti la soluzione più adatta al tuo ufficio o studio professionale.`
    },
    'pulizie-condomini': {
      h1Suffix: 'Manutenzione Professionale Spazi Comuni',
      intro: `La nostra impresa è specializzata nei servizi di ${service.name.toLowerCase()} a ${location.name} e provincia. Ci occupiamo della pulizia e manutenzione di scale, androni, ascensori e tutte le aree comuni condominiali. Con oltre 28 operatori qualificati, garantiamo interventi programmati, puntualità e professionalità. Serviamo condomini di ogni dimensione nella zona ${location.area ? `${location.area}` : `di ${location.name}`} con contratti flessibili e personalizzati sulle esigenze di ogni amministratore e condominio.`,
      whyChoose: `Affidarsi a noi per le pulizie condominiali a ${location.name} significa scegliere qualità e affidabilità. Utilizziamo attrezzature professionali e prodotti specifici per ogni superficie. Il nostro personale è formato per lavorare in sicurezza e nel rispetto delle normative vigenti. Garantiamo interventi regolari con frequenza personalizzabile, dalla pulizia giornaliera a quella settimanale o mensile. La nostra esperienza nel territorio ci permette di conoscere bene le esigenze specifiche dei condomini della zona.`,
      area: `Operiamo attivamente su tutto il comune di ${location.name} e nelle località limitrofe della provincia di Brescia. I nostri servizi raggiungono regolarmente anche ${nearby.slice(0, 3).join(', ')} e tutta l'area ${location.area ? `${location.area}` : `circostante`}. La presenza capillare sul territorio ci consente di intervenire rapidamente in caso di necessità straordinarie e di garantire sempre il massimo della puntualità.`,
      cta: `Richiedi subito un preventivo gratuito per le pulizie del tuo condominio a ${location.name}. Offriamo sopralluoghi senza impegno per valutare le aree da pulire e proporti un piano di interventi personalizzato. Contattaci per migliorare il decoro e l'igiene degli spazi comuni del tuo edificio.`
    },
    'pulizie-industriali': {
      h1Suffix: 'Pulizia Capannoni e Aree Produttive',
      intro: `Siamo specializzati in ${service.name.toLowerCase()} a ${location.name} e in tutta la provincia di Brescia. Ci occupiamo della pulizia di capannoni produttivi, aree industriali, magazzini e spazi logistici con attrezzature specifiche e personale altamente qualificato. Il nostro team di oltre 28 operatori esperti interviene con macchinari industriali professionali per garantire ambienti di lavoro puliti, sicuri e conformi alle normative. Serviamo aziende di ogni settore nella zona ${location.area ? `${location.area}` : `di ${location.name}`} con massima flessibilità negli orari di intervento.`,
      whyChoose: `Scegliere i nostri servizi di pulizia industriale a ${location.name} significa affidarsi a professionisti che conoscono le specifiche esigenze del settore produttivo. Utilizziamo macchinari industriali certificati, prodotti specifici per ogni tipo di superficie e sporco industriale. Lavoriamo in totale sicurezza rispettando tutte le normative HACCP e di sicurezza sul lavoro. I nostri interventi possono essere programmati negli orari più comodi, anche di notte o nei weekend, per non interferire con l'attività produttiva.`,
      area: `I nostri servizi di pulizia industriale coprono tutto il territorio di ${location.name} e l'intera area produttiva della provincia di Brescia. Operiamo regolarmente anche a ${nearby.slice(0, 3).join(', ')} servendo le principali zone industriali del territorio. La nostra organizzazione logistica ci permette di intervenire rapidamente su chiamata e di gestire anche commesse di grandi dimensioni.`,
      cta: `Richiedi un preventivo gratuito per la pulizia del tuo capannone o area industriale a ${location.name}. Effettuiamo sopralluoghi tecnici senza impegno per valutare le tue esigenze produttive e proporti un piano di interventi su misura. Contattaci per un servizio professionale e affidabile.`
    },
    'pulizie-post-cantiere': {
      h1Suffix: 'Pulizia Finale dopo Lavori e Ristrutturazioni',
      intro: `La nostra impresa offre servizi specializzati di ${service.name.toLowerCase()} a ${location.name} e provincia. Ci occupiamo della pulizia finale di immobili dopo lavori di costruzione, ristrutturazione o manutenzione straordinaria. Il nostro team rimuove detriti, polveri, residui di cantiere e prepara gli ambienti per la consegna o l'utilizzo. Con oltre 28 operatori esperti e attrezzature professionali, garantiamo risultati impeccabili nella zona ${location.area ? `${location.area}` : `di ${location.name}`}. Serviamo imprese edili, privati e amministrazioni pubbliche con interventi rapidi e accurati.`,
      whyChoose: `Affidarsi a noi per le pulizie post cantiere a ${location.name} significa ricevere un servizio completo e professionale. Conosciamo bene le problematiche legate alla pulizia dopo i lavori edili: polvere, residui di stucco, macchie di vernice e materiali vari. Utilizziamo aspiratori industriali, prodotti specifici per ogni superficie e tecniche professionali per rimuovere anche lo sporco più ostinato. Interveniamo rapidamente per rispettare le vostre tempistiche di consegna e garantiamo ambienti perfettamente puliti e pronti all'uso.`,
      area: `Operiamo su tutto il territorio comunale di ${location.name} e nei comuni limitrofi della provincia di Brescia. I nostri servizi di pulizia post cantiere raggiungono regolarmente anche ${nearby.slice(0, 3).join(', ')} e l'intera area ${location.area ? `${location.area}` : `circostante`}. Grazie alla conoscenza del territorio, possiamo intervenire rapidamente e coordinare gli interventi con i lavori delle imprese edili.`,
      cta: `Hai bisogno di una pulizia post cantiere a ${location.name}? Contattaci per un preventivo immediato e senza impegno. Valutiamo le superfici da pulire e ti proponiamo un intervento personalizzato con tempi certi e prezzi trasparenti. Richiedi ora un sopralluogo gratuito.`
    },
    'sanificazione-ambienti': {
      h1Suffix: 'Igiene Totale e Sicurezza Garantita',
      intro: `Offriamo servizi professionali di ${service.name.toLowerCase()} a ${location.name} e in tutta la provincia di Brescia. Utilizziamo prodotti certificati e protocolli sanitari rigorosi per garantire ambienti perfettamente igienizzati e sicuri. Il nostro team di oltre 28 operatori specializzati interviene su uffici, negozi, scuole, ambulatori, ristoranti e qualsiasi tipo di ambiente che necessiti di disinfezione profonda. Operiamo nella zona ${location.area ? `${location.area}` : `di ${location.name}`} con certificazione di ogni intervento eseguito e massima attenzione alle normative sanitarie vigenti.`,
      whyChoose: `Scegliere i nostri servizi di sanificazione a ${location.name} significa affidarsi a professionisti certificati. Utilizziamo prodotti virucidi e battericidi autorizzati dal Ministero della Salute, efficaci contro virus, batteri e agenti patogeni. Seguiamo protocolli specifici per ogni tipo di ambiente e rilasciamo sempre la certificazione dell'intervento eseguito. Il nostro personale è formato continuamente sulle più recenti tecniche di sanificazione e sui protocolli anti COVID-19. Garantiamo sicurezza massima per dipendenti, clienti e utenti.`,
      area: `I nostri servizi di sanificazione sono attivi su tutto il territorio di ${location.name} e comuni limitrofi. Interveniamo regolarmente anche a ${nearby.slice(0, 3).join(', ')} e in tutta l'area ${location.area ? `${location.area}` : `della provincia di Brescia`}. La rapidità di intervento è garantita dalla nostra presenza capillare sul territorio e dalla disponibilità anche per emergenze sanitarie.`,
      cta: `Hai bisogno di una sanificazione professionale a ${location.name}? Contattaci subito per un preventivo gratuito. Interveniamo rapidamente con prodotti certificati e rilasciamo attestazione dell'avvenuta sanificazione. Proteggi la salute di dipendenti e clienti con un servizio professionale e sicuro.`
    },
    'pulizia-vetri': {
      h1Suffix: 'Lavaggio Professionale Vetrate e Infissi',
      intro: `La nostra impresa è specializzata in ${service.name.toLowerCase()} a ${location.name} e provincia. Ci occupiamo del lavaggio professionale di vetrate per uffici, negozi, condomini e abitazioni private con attrezzature specifiche e personale qualificato. Il nostro team interviene su vetrate di ogni dimensione, anche in altezza, garantendo risultati perfetti senza aloni o macchie. Operiamo nella zona ${location.area ? `${location.area}` : `di ${location.name}`} con oltre 28 operatori esperti e attrezzature professionali per vetrate di difficile accesso.`,
      whyChoose: `Affidarsi a noi per la pulizia vetri a ${location.name} significa ricevere un servizio accurato e professionale. Utilizziamo prodotti specifici che non lasciano aloni, aste telescopiche per raggiungere ogni altezza e tecniche professionali per vetrate di grandi dimensioni. Il nostro personale è formato per lavorare in sicurezza anche in condizioni difficili. Offriamo contratti periodici con interventi programmati mensili, bimestrali o stagionali per mantenere sempre le tue vetrate perfettamente pulite.`,
      area: `Operiamo attivamente su tutto il comune di ${location.name} e nelle località limitrofe della provincia di Brescia. I nostri servizi di pulizia vetri raggiungono regolarmente anche ${nearby.slice(0, 3).join(', ')} e tutta l'area ${location.area ? `${location.area}` : `circostante`}. La conoscenza del territorio ci permette di organizzare interventi efficienti anche per clienti con più sedi nella stessa zona.`,
      cta: `Vuoi vetrate sempre perfettamente pulite a ${location.name}? Contattaci per un preventivo gratuito. Offriamo sopralluoghi senza impegno per valutare le superfici vetrate e proporti un piano di interventi personalizzato, anche con contratti periodici a prezzi vantaggiosi.`
    },
    'gestione-carrellati': {
      h1Suffix: 'Gestione Professionale Raccolta Differenziata',
      intro: `Offriamo servizi professionali di ${service.name.toLowerCase()} a ${location.name} e in tutta la provincia di Brescia. Ci occupiamo della gestione completa dei bidoni per la raccolta differenziata di condomini, aziende e attività commerciali. Il nostro servizio include il posizionamento dei carrellati nei giorni di raccolta, il ritiro dopo lo svuotamento e la pulizia periodica dei contenitori. Operiamo nella zona ${location.area ? `${location.area}` : `di ${location.name}`} coordinandoci perfettamente con il servizio di raccolta comunale e garantendo il massimo rispetto delle normative ambientali.`,
      whyChoose: `Scegliere i nostri servizi di gestione carrellati a ${location.name} significa liberarsi di un'incombenza quotidiana. Ci occupiamo di tutto: conosciamo perfettamente i calendari di raccolta del comune, posizioniamo i bidoni negli orari corretti e li ritiriamo dopo lo svuotamento. Puliamo e sanifichiamo periodicamente i contenitori per garantire igiene e decoro. Per i condomini, questo servizio migliora il decoro degli spazi comuni e risolve i problemi legati alla gestione della raccolta differenziata. Per le aziende, garantisce il pieno rispetto delle normative ambientali.`,
      area: `I nostri servizi sono attivi su tutto il territorio comunale di ${location.name} e nei comuni limitrofi. Operiamo regolarmente anche a ${nearby.slice(0, 3).join(', ')} gestendo i calendari specifici di ogni comune. La conoscenza approfondita delle zone di raccolta e degli orari ci permette di garantire un servizio impeccabile e puntuale.`,
      cta: `Vuoi liberarti della gestione dei bidoni a ${location.name}? Contattaci per un preventivo gratuito. Ti proporremo un servizio completo e su misura che include posizionamento, ritiro e pulizia periodica dei carrellati. Risparmia tempo e migliora il decoro del tuo condominio o azienda.`
    },
    'giardinaggio': {
      h1Suffix: 'Cura del Verde e Manutenzione Professionale',
      intro: `La nostra impresa offre servizi completi di ${service.name.toLowerCase()} a ${location.name} e in tutta la provincia di Brescia. Ci occupiamo della cura e manutenzione di giardini privati, aree verdi condominiali, parchi aziendali e spazi pubblici. Il nostro team di giardinieri professionisti interviene con attrezzature moderne per taglio erba, potatura, pulizia e sistemazione delle aree verdi. Operiamo nella zona ${location.area ? `${location.area}` : `di ${location.name}`} con oltre 28 operatori qualificati e mezzi specifici per ogni tipo di intervento sul verde.`,
      whyChoose: `Affidarsi a noi per il giardinaggio a ${location.name} significa avere giardini sempre curati e ordinati. I nostri giardinieri sono esperti nella cura delle diverse tipologie di piante e nella manutenzione di prati e aiuole. Utilizziamo attrezzature professionali: trattorini rasaerba, decespugliatori, motoseghe e biotrituratori. Offriamo contratti di manutenzione periodica con interventi programmati mensili o stagionali, perfetti per chi vuole un giardino sempre in ordine senza doversi preoccupare di nulla. Realizziamo anche piccoli interventi di sistemazione verde e piantumazione.`,
      area: `I nostri servizi di giardinaggio coprono tutto il territorio di ${location.name} e i comuni limitrofi della provincia di Brescia. Operiamo regolarmente anche a ${nearby.slice(0, 3).join(', ')} servendo l'intera area ${location.area ? `${location.area}` : `circostante`}. La conoscenza del territorio ci permette di organizzare percorsi efficienti e di intervenire rapidamente in caso di necessità.`,
      cta: `Vuoi un giardino sempre curato e in ordine a ${location.name}? Contattaci per un sopralluogo gratuito e senza impegno. Valutiamo le tue aree verdi e ti proponiamo un piano di manutenzione personalizzato con interventi programmati e prezzi trasparenti. Richiedi ora il tuo preventivo.`
    }
  };

  const content = contentVariations[serviceId];

  return {
    serviceId,
    locationId,
    h1: `${service.name} a ${location.name} – ${content.h1Suffix}`,
    metaTitle: `${service.name} ${location.name} | Professionali e Affidabili`,
    metaDescription: `${service.name} a ${location.name}: servizi professionali con 28+ operatori qualificati. Preventivo gratuito in 24h. Zona ${location.area || location.name}.`,
    introText: content.intro,
    whyChooseText: content.whyChoose,
    areaDescription: content.area,
    nearbyAreas: nearby,
    ctaText: content.cta
  };
};

export const getAllLocalPages = (): LocalPageContent[] => {
  const pages: LocalPageContent[] = [];

  services.forEach(service => {
    locations.forEach(location => {
      pages.push(generateContent(service.id, location.id));
    });
  });

  return pages;
};

export const getLocalPageContent = (serviceSlug: string, locationSlug: string): LocalPageContent | null => {
  const service = services.find(s => s.slug === serviceSlug);
  const location = locations.find(l => l.slug === locationSlug);

  if (!service || !location) {
    return null;
  }

  return generateContent(service.id, location.id);
};
