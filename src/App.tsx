import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Servizi from './pages/Servizi';
import PulizieUffici from './pages/servizi/PulizieUffici';
import PulizieIndustriali from './pages/servizi/PulizieIndustriali';
import PuliziePostCantiere from './pages/servizi/PuliziePostCantiere';
import PulizieVetri from './pages/servizi/PulizieVetri';
import SanificazioneAmbienti from './pages/servizi/SanificazioneAmbienti';
import RichidiPreventivo from './pages/RichidiPreventivo';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;