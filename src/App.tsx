import { Factory, Wrench, Shield, Clock, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <img src="/logo_light orange.png" alt="DRG Steel" className="h-12" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-orange-400 transition-colors duration-200 font-medium">Home</a>
              <a href="#servizi" className="hover:text-orange-400 transition-colors duration-200 font-medium">Servizi</a>
              <a href="#chi-siamo" className="hover:text-orange-400 transition-colors duration-200 font-medium">Chi Siamo</a>
              <a href="#contatti" className="hover:text-orange-400 transition-colors duration-200 font-medium">Contatti</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            DRG Steel
          </h1>
          <p className="text-2xl md:text-3xl text-orange-400 mb-8 font-light">
            Saldature e Stampaggio dal 2007
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Eccellenza nella lavorazione dell'acciaio. Offriamo soluzioni professionali
            per saldature e stampaggio industriale con oltre 15 anni di esperienza.
          </p>
          <div className="mt-12">
            <a href="#contatti" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-xl">
              Richiedi un Preventivo
            </a>
          </div>
        </div>
      </section>

      <section id="servizi" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">I Nostri Servizi</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-lg">
                  <Wrench className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-slate-900">Saldature Industriali</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Eseguiamo saldature di precisione su acciaio, acciaio inox e leghe speciali.
                Utilizziamo tecnologie all'avanguardia per garantire giunzioni resistenti e durature.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Saldatura TIG, MIG/MAG
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Saldatura ad arco elettrico
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Certificazioni di qualità
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-lg">
                  <Factory className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-slate-900">Stampaggio Metalli</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Realizziamo componenti stampati con precisione millimetrica. Dal prototipo
                alla produzione in serie, garantiamo qualità e affidabilità.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Stampaggio a freddo e a caldo
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Progettazione stampi personalizzati
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Produzione piccole e grandi serie
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <Shield className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Qualità Garantita</h3>
              <p className="text-gray-600 leading-relaxed">
                Controlli rigorosi su ogni lavorazione per garantire standard qualitativi elevati.
              </p>
            </div>

            <div className="group">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <Clock className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Consegne Puntuali</h3>
              <p className="text-gray-600 leading-relaxed">
                Rispettiamo i tempi concordati con un sistema di produzione efficiente e organizzato.
              </p>
            </div>

            <div className="group">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <Wrench className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Esperienza dal 2007</h3>
              <p className="text-gray-600 leading-relaxed">
                Oltre 15 anni di esperienza nel settore metalmeccanico e lavorazioni speciali.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="chi-siamo" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Chi Siamo</h2>
              <div className="w-24 h-1 bg-orange-500 mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                DRG Steel è un'azienda specializzata in saldature industriali e stampaggio metalli,
                attiva dal 2007. La nostra missione è fornire soluzioni di alta qualità per il settore
                metalmeccanico, combinando tecnologia avanzata e competenza artigianale.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Collaboriamo con aziende di diversi settori, dall'automotive all'edilizia,
                offrendo consulenza tecnica e soluzioni su misura per ogni esigenza produttiva.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial welding"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contatti" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Contattaci</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Informazioni di Contatto</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900 mb-1">Indirizzo</h4>
                    <p className="text-gray-600">Via Industriale, 123<br />20100 Milano, Italia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900 mb-1">Telefono</h4>
                    <p className="text-gray-600">+39 02 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@drgsteel.it</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Richiedi un Preventivo</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome e Cognome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="tua@email.it"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Messaggio</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Descrivi il tuo progetto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Invia Richiesta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/logo_light orange.png" alt="DRG Steel" className="h-10 mb-2" />
              <p className="text-sm">© 2024 DRG Steel. Tutti i diritti riservati.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#home" className="hover:text-orange-400 transition-colors duration-200">Home</a>
              <a href="#servizi" className="hover:text-orange-400 transition-colors duration-200">Servizi</a>
              <a href="#chi-siamo" className="hover:text-orange-400 transition-colors duration-200">Chi Siamo</a>
              <a href="#contatti" className="hover:text-orange-400 transition-colors duration-200">Contatti</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
