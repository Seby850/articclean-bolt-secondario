@@ .. @@
 import Servizi from './pages/Servizi';
 import PulizieUffici from './pages/servizi/PulizieUffici';
 import PulizieIndustriali from './pages/servizi/PulizieIndustriali';
 import PuliziePostCantiere from './pages/servizi/PuliziePostCantiere';
 import PulizieVetri from './pages/servizi/PulizieVetri';
+import RichidiPreventivo from './pages/RichidiPreventivo';
 import Header from './components/Header';
 import Footer from './components/Footer';
 
@@ .. @@
           <Route path="/servizi/pulizie-industriali" element={<PulizieIndustriali />} />
           <Route path="/servizi/pulizie-post-cantiere" element={<PuliziePostCantiere />} />
           <Route path="/servizi/pulizie-vetri" element={<PulizieVetri />} />
+          <Route path="/richiedi-preventivo" element={<RichidiPreventivo />} />
         </Routes>
         <Footer />
       </div>