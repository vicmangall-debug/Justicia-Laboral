
import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-white hover:text-accent transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">{children}</a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#servicios', text: 'Servicios' },
    { href: '#especialistas', text: 'Especialistas' },
    { href: '#nosotros', text: 'Nosotros' },
    { href: '#testimonios', text: 'Testimonios' },
    { href: '#contacto', text: 'Contacto' },
  ];

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-serif text-2xl font-bold">
              Justicia Paraestatal
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => <NavLink key={link.href} href={link.href}>{link.text}</NavLink>)}
            </div>
          </div>
          <div className="hidden md:block">
             <a href="#contacto" className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary bg-secondary hover:bg-accent transition-transform duration-300 hover:scale-105">
                Consulta Gratuita
             </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navLinks.map(link => <a key={link.href} href={link.href} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{link.text}</a>)}
             <a href="#contacto" className="mt-2 block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-primary bg-secondary hover:bg-accent">
                Consulta Gratuita
             </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
