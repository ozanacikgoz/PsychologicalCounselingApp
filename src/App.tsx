import { useState } from 'react';
import { Menu } from 'lucide-react';
import HomeView from './components/HomeView';
import AppointmentView from './components/AppointmentView';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'appointment'>('home');

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-dim selection:text-text-main">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div 
            className="text-2xl font-bold text-primary font-headline tracking-tight cursor-pointer"
            onClick={() => setCurrentView('home')}
          >
            Psk. Hande Özgödek
          </div>
          
          <div className="hidden md:flex space-x-8 items-center font-headline tracking-tight font-medium">
            <button 
              onClick={() => setCurrentView('home')}
              className={`transition-all duration-500 ease-in-out ${
                currentView === 'home' 
                  ? 'text-primary border-b-2 border-primary pb-1' 
                  : 'text-text-muted hover:text-primary'
              }`}
            >
              Hakkında
            </button>
            <button 
              onClick={() => setCurrentView('appointment')}
              className="bg-primary text-on-primary px-6 py-2 rounded-full font-medium hover:scale-95 duration-300 transition-all"
            >
              Randevu Al
            </button>
          </div>
          
          <div className="md:hidden">
            <Menu className="text-primary w-6 h-6" />
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-32 pb-20">
        {currentView === 'home' ? <HomeView onNavigate={setCurrentView} /> : <AppointmentView />}
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto bg-surface-low flex flex-col items-center py-12 px-6 space-y-4">
        <div className="text-lg font-semibold text-primary font-headline">
          Psk. Hande Özgödek
        </div>
        <div className="flex gap-8 text-text-muted font-body text-sm">
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Gizlilik Politikası</a>
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Kullanım Koşulları</a>
          <a href="#" className="underline hover:text-primary transition-colors">WhatsApp Destek</a>
        </div>
        <p className="font-body text-sm text-text-muted mt-4">
          © 2026 Hande Özgödek. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
}
