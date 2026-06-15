import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-md">
            <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-tighter">
              C<span className="text-purple-500">.</span>HANUMANTHU
            </h2>
            <p className="text-zinc-500 leading-relaxed">
              Crafting high-end digital experiences for enterprise 
              clients and innovative startups. Based in Hyderabad, India.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 md:gap-32">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-6">Navigation</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-zinc-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-zinc-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/projects" className="text-zinc-400 hover:text-white transition-colors">Work</Link></li>
                <li><Link to="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-6">Social</h4>
              <ul className="space-y-4">
                <li><a href="https://linkedin.com/in/chandrashekar-hanumanthu-1329232b3" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/ChandrashekarHanumanthu" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© 2024 Chandrashekar Hanumanthu</p>
          <p>Designed with purpose • Built with Passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
