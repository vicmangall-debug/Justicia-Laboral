
import React from 'react';

const CheckIcon: React.FC = () => (
    <svg className="h-6 w-6 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h2 className="text-base font-semibold text-secondary tracking-wide uppercase">Nuestra Firma</h2>
            <p className="mt-2 text-3xl font-extrabold text-primary tracking-tight sm:text-4xl font-serif">
              ¿Por Qué Elegirnos?
            </p>
            <p className="mt-4 text-xl text-gray-600">
              Somos más que abogados; somos tus aliados estratégicos. Combinamos experiencia legal con un profundo conocimiento del sector paraestatal para ofrecerte la mejor defensa.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckIcon />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-bold text-primary">Experiencia Comprobada</h4>
                  <p className="mt-1 text-gray-600">Años de litigio exitoso y negociaciones favorables nos respaldan.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckIcon />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-bold text-primary">Trato Personalizado y Humano</h4>
                  <p className="mt-1 text-gray-600">Cada caso es único. Te escuchamos y mantenemos una comunicación constante y clara.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckIcon />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-bold text-primary">Enfoque en Resultados</h4>
                  <p className="mt-1 text-gray-600">Nuestro objetivo principal es lograr la justicia y la compensación que mereces.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-10 lg:mt-0 relative">
            <img className="rounded-lg shadow-2xl w-full h-auto object-cover" src="https://picsum.photos/id/119/600/400" alt="Equipo de abogados" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
