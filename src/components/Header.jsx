import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-4 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-display font-bold text-white tracking-tighter"
        >
          C<span className="text-purple-500">.</span>HANUMANTHU
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative group text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
            >
              {item.name}
              <motion.span 
                className={`absolute -bottom-1 left-0 h-[1px] bg-purple-500 transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-zinc-400"
        >
          <div className="w-8 h-4 flex flex-col justify-between items-end">
            <span className={`h-[2px] bg-current transition-all ${isMenuOpen ? 'w-8 rotate-45 translate-y-[7px]' : 'w-8'}`} />
            <span className={`h-[2px] bg-current transition-all ${isMenuOpen ? 'w-0 opacity-0' : 'w-5'}`} />
            <span className={`h-[2px] bg-current transition-all ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-[7px]' : 'w-8'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-zinc-950 z-[99] flex flex-col justify-center items-center gap-8 p-6"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-display font-bold text-white hover:text-purple-500 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
