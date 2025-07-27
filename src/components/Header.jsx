import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const activeSection = location.pathname.substring(1) || 'home';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'skills', path: '/skills' },
    { name: 'projects', path: '/projects' },
    { name: 'contact', path: '/contact' },
    { name: 'resume', path: '/resume' }
  ];
  
  const handleNavClick = () => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
  };

  return (
    <header 
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 shadow-lg' : 'bg-slate-900/80'
      } backdrop-blur-sm border-b border-slate-800`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/"
            onClick={handleNavClick}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            Chandrashekar
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeSection === item.name || 
                    (item.path === '/' && location.pathname === '/') ||
                    (item.path !== '/' && location.pathname.startsWith(item.path))
                      ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{
            transition: 'max-height 300ms ease-in-out, opacity 300ms ease-in-out'
          }}
        >
          <nav className="flex flex-col space-y-2 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`w-full text-left px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  activeSection === item.name || 
                  (item.path === '/' && location.pathname === '/') ||
                  (item.path !== '/' && location.pathname.startsWith(item.path))
                    ? 'bg-gradient-to-r from-purple-900/70 to-pink-900/50 text-white border-l-4 border-purple-500'
                    : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <span className="mr-2">
                  {item.name === 'home' ? '🏠' : 
                   item.name === 'about' ? '👨‍💻' : 
                   item.name === 'skills' ? '🛠️' : 
                   item.name === 'projects' ? '🚀' : 
                   item.name === 'resume' ? '📄' : '📞'}
                </span>
                <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;