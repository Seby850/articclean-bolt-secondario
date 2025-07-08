import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { 
      name: 'Servizi', 
      path: '/servizi',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Pulizie Uffici', path: '/servizi/pulizie-uffici' },
        { name: 'Pulizie Industriali', path: '/servizi/pulizie-industriali' },
        { name: 'Pulizie Post-Cantiere', path: '/servizi/pulizie-post-cantiere' },
        { name: 'Pulizie Vetri e Vetrate', path: '/servizi/pulizie-vetri' },
        { name: 'Sanificazione Ambienti', path: '/servizi/sanificazione-ambienti' }
      ]
    },
    { name: 'Come Lavoriamo', path: '/come-lavoriamo' },
    { name: 'Recensioni', path: '/recensioni' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Nuovo URL Imgur */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
              <img 
                src="https://i.imgur.com/ks6yQn1.png" 
                alt="Arctic Clean Service Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-slate-900">Arctic Clean</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button 
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        isActive(item.path) 
                          ? 'text-sky-600 bg-sky-50' 
                          : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown */}
                    <div 
                      className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2 transition-all duration-200 ${
                        isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-3 text-sm text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive(item.path) 
                        ? 'text-sky-600 bg-sky-50' 
                        : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/richiedi-preventivo"
              className="ml-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Richiedi Preventivo
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 py-4">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive(item.path) 
                        ? 'text-sky-600 bg-sky-50' 
                        : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <Link
                to="/richiedi-preventivo"
                className="mx-4 mt-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-sky-600 hover:to-cyan-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Richiedi Preventivo
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;