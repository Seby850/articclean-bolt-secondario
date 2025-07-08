import { Building2, CheckCircle, ArrowRight, Users, Clock, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const PulizieUffici = () => {
  const features = [
    "Pulizia quotidiana postazioni di lavoro",
    "Sanificazione bagni e aree comuni",
    "Pulizia vetri interni ed esterni",
    "Gestione rifiuti e raccolta differenziata",
    "Aspirazione tappeti e moquette",
    "Pulizia e disinfezione superfici",
    "Pulizia sale riunioni e aree break",
    "Manutenzione aree reception e ingresso"
  ];

  const benefits = [
    {
      icon: Users,
      title: "Ambiente di Lavoro Professionale",
      description: "Uffici sempre puliti e ordinati che trasmettono professionalità a clienti e partner"
    },
    {
      icon: Clock,
      title: "Maggiore Produttività",
      description: "Dipendenti più motivati e concentrati in un ambiente pulito e salubre"
    },
    {
      icon: Shield,
      title: "Riduzione Assenze per Malattia",
      description: "Ambienti sanificati riducono la diffusione di virus e batteri"
    },
    {
      icon: Sparkles,
      title: "Immagine Aziendale Impeccabile",
      description: "Prima impressione sempre positiva per visitatori e potenziali clienti"
    }
  ];

  const serviceTypes = [
    {
      title: "Uffici Piccoli",
      description: "1-10 postazioni",
      features: ["Pulizia giornaliera", "Gestione rifiuti", "Sanificazione bagni"],
      price: "Da €300/mese"
    },
    {
      title: "Uffici Medi",
      description: "10-50 postazioni", 
      features: ["Pulizia personalizzata", "Sale riunioni", "Aree comuni", "Supporto eventi"],
      price: "Da €800/mese"
    },
    {
      title: "Uffici Grandi",
      description: "50+ postazioni",
      features: ["Servizio dedicato", "Supervisore in loco", "Pulizie H24", "Manutenzione completa"],
      price: "Preventivo personalizzato"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Building2 className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 font-semibold">Servizio Specializzato</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Pulizie <span className="text-sky-500">Uffici</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Servizi completi di pulizia per uffici e spazi lavorativi. 
                Manteniamo i tuoi ambienti sempre professionali con personale qualificato 
                e prodotti certificati.
              </p>
              <Link
                to="/richiedi-preventivo"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Richiedi Preventivo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/RAZaa1z.jpeg"
                alt="Pulizia uffici professionale"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Cosa Include il Nostro Servizio
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Un servizio completo e professionale che copre ogni aspetto della pulizia dei tuoi uffici.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg hover:bg-sky-50 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Benefici per la Tua Azienda
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Investire nella pulizia professionale degli uffici porta vantaggi concreti e misurabili.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Soluzioni per Ogni Dimensione
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dai piccoli studi professionali alle grandi aziende, abbiamo la soluzione giusta per te.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceTypes.map((type, index) => (
              <div 
                key={index}
                className={`bg-slate-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 ${
                  index === 1 ? 'ring-2 ring-sky-200 bg-sky-50' : ''
                }`}
              >
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Più Richiesto
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 mb-4">{type.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-sky-500" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-sky-600 font-bold text-lg">{type.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Il Nostro Processo di Lavoro
            </h2>
            <p className="text-lg text-slate-600">
              Un approccio sistematico per garantire risultati costanti e di qualità.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Valutazione Iniziale</h3>
                <p className="text-slate-600">Sopralluogo gratuito per valutare spazi, esigenze specifiche e definire il piano di intervento ottimale.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Pianificazione Personalizzata</h3>
                <p className="text-slate-600">Creiamo un programma su misura che rispetta i vostri orari di lavoro e le esigenze operative.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Esecuzione Professionale</h3>
                <p className="text-slate-600">Interventi regolari con personale qualificato, prodotti certificati e attrezzature professionali.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Controllo Qualità</h3>
                <p className="text-slate-600">Verifiche costanti e feedback regolari per garantire sempre la massima soddisfazione.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Trasforma i Tuoi Uffici in Spazi Professionali
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Ricevi un preventivo gratuito e personalizzato per i tuoi uffici. 
            Sopralluogo senza impegno entro 48 ore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/richiedi-preventivo"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Richiedi Preventivo Gratuito</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contatti"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Contattaci Ora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PulizieUffici;