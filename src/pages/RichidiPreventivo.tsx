import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, FileText, Building2, Mail, Phone, User } from 'lucide-react';

const RichidiPreventivo = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    azienda: '',
    tipoServizio: '',
    superficie: '',
    frequenza: '',
    indirizzo: '',
    messaggio: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('https://hook.eu2.make.com/cvjvbxtgyxsjdpp6lmogf7vum297mh8n', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'Arctic Clean Website'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        window.scrollTo(0, 0);
        setFormData({
          nome: '',
          cognome: '',
          email: '',
          telefono: '',
          azienda: '',
          tipoServizio: '',
          superficie: '',
          frequenza: '',
          indirizzo: '',
          messaggio: ''
        });
      } else {
        throw new Error('Errore durante l\'invio del modulo');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Si è verificato un errore durante l\'invio. Riprova più tardi.');
      console.error('Errore invio form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const tipiServizio = [
    'Pulizie Uffici',
    'Pulizie Condomini',
    'Pulizie Industriali',
    'Pulizie Post-Cantiere',
    'Pulizie Vetri e Vetrate',
    'Sanificazione Ambienti',
    'Giardinaggio e Manutenzione Verde',
    'Gestione Carrellati',
    'Servizi Multipli',
    'Altro (specificare nel messaggio)'
  ];

  const opzioniFrequenza = [
    'Intervento Singolo',
    'Giornaliera',
    'Settimanale',
    'Bisettimanale',
    'Mensile',
    'Contratto Periodico Programmato',
    'Da valutare'
  ];

  if (submitStatus === 'success') {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              Richiesta Inviata con Successo!
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Grazie per aver richiesto un preventivo. Il nostro team ti contatterà entro 24 ore 
              per fornirti una proposta personalizzata.
            </p>
            <div className="bg-sky-50 rounded-lg p-4 mb-6">
              <p className="text-sky-800 font-semibold">
                📞 Telefono: +39 030 987 6543
              </p>
              <p className="text-sky-700">
                📧 Email: info@impresapulizie.it
              </p>
              <p className="text-sky-700">
                📍 Via Carpaccio 10, Brescia
              </p>
            </div>
            <a
              href="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300"
            >
              <span>Torna alla Home</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <FileText className="w-8 h-8 text-sky-500" />
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Richiedi <span className="text-sky-500">Preventivo</span>
            </h1>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compila il modulo per ricevere un preventivo gratuito e personalizzato. 
            Ti contatteremo entro 24 ore per discutere le tue esigenze.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-sky-500 to-cyan-500 p-6">
            <h2 className="text-2xl font-bold text-white">Dati della Richiesta</h2>
            <p className="text-sky-100">Tutti i campi contrassegnati con * sono obbligatori</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Dati Personali */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <User className="w-5 h-5 mr-2 text-sky-500" />
                Dati Personali
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Cognome *
                  </label>
                  <input
                    type="text"
                    name="cognome"
                    value={formData.cognome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="Il tuo cognome"
                  />
                </div>
              </div>
            </div>

            {/* Contatti */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-sky-500" />
                Informazioni di Contatto
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="la-tua-email@esempio.it"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="+39 123 456 7890"
                  />
                </div>
              </div>
            </div>

            {/* Azienda */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-sky-500" />
                Dati Aziendali
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nome Azienda *
                  </label>
                  <input
                    type="text"
                    name="azienda"
                    value={formData.azienda}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="Nome della tua azienda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Indirizzo
                  </label>
                  <input
                    type="text"
                    name="indirizzo"
                    value={formData.indirizzo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="Via, Città, Provincia"
                  />
                </div>
              </div>
            </div>

            {/* Servizi */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-sky-500" />
                Dettagli del Servizio
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tipo di Servizio *
                  </label>
                  <select
                    name="tipoServizio"
                    value={formData.tipoServizio}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Seleziona un servizio</option>
                    {tipiServizio.map((servizio) => (
                      <option key={servizio} value={servizio}>
                        {servizio}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Superficie (mq)
                  </label>
                  <input
                    type="text"
                    name="superficie"
                    value={formData.superficie}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    placeholder="es. 200 mq"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Frequenza Desiderata
                </label>
                <select
                  name="frequenza"
                  value={formData.frequenza}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Seleziona frequenza</option>
                  {opzioniFrequenza.map((freq) => (
                    <option key={freq} value={freq}>
                      {freq}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Messaggio */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Messaggio Aggiuntivo
              </label>
              <textarea
                name="messaggio"
                value={formData.messaggio}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                placeholder="Descrivi eventuali esigenze specifiche, orari preferiti, note particolari..."
              />
            </div>

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-red-700">{errorMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="border-t border-slate-200 pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Invio in corso...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Invia Richiesta</span>
                  </>
                )}
              </button>
              <p className="text-center text-slate-500 text-sm mt-4">
                Ti contatteremo entro 24 ore per fornirti un preventivo dettagliato
              </p>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-sky-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Cosa Succede Dopo?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                1
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Analisi Richiesta</h4>
              <p className="text-slate-600 text-sm">Valutiamo le tue esigenze e prepariamo una proposta</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                2
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Sopralluogo</h4>
              <p className="text-slate-600 text-sm">Se necessario, fissiamo un appuntamento gratuito</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                3
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Preventivo</h4>
              <p className="text-slate-600 text-sm">Ricevi una proposta dettagliata e personalizzata</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RichidiPreventivo;