import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';

const Homepage = lazy(() => import('./pages/Homepage'));
const Servizi = lazy(() => import('./pages/Servizi'));
const PulizieUffici = lazy(() => import('./pages/servizi/PulizieUffici'));
const PulizieIndustriali = lazy(() => import('./pages/servizi/PulizieIndustriali'));
const PuliziePostCantiere = lazy(() => import('./pages/servizi/PuliziePostCantiere'));
const PulizieVetri = lazy(() => import('./pages/servizi/PulizieVetri'));
const SanificazioneAmbienti = lazy(() => import('./pages/servizi/SanificazioneAmbienti'));
const RichidiPreventivo = lazy(() => import('./pages/RichidiPreventivo'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/servizi/pulizie-uffici" element={<PulizieUffici />} />
          <Route path="/servizi/pulizie-industriali" element={<PulizieIndustriali />} />
          <Route path="/servizi/pulizie-post-cantiere" element={<PuliziePostCantiere />} />
          <Route path="/servizi/pulizie-vetri" element={<PulizieVetri />} />
          <Route path="/servizi/sanificazione-ambienti" element={<SanificazioneAmbienti />} />
          <Route path="/richiedi-preventivo" element={<RichidiPreventivo />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;