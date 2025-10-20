
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            {/* Add social links here if needed */}
          </div>
          <div className="mt-8 md:mt-0 md:order-1 text-center text-base">
            <p className="font-serif text-lg text-white">Justicia Paraestatal</p>
            <p>contacto@justiciaparaestatal.com | (55) 1234-5678</p>
            <p>Av. de la Reforma 123, Ciudad de México</p>
            <p className="mt-4">&copy; {new Date().getFullYear()} Justicia Paraestatal. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
