
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-primary text-white" id="inicio">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2')" }}></div>
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight">
          <span className="block text-accent">Defendemos Tus Derechos Laborales</span>
          <span className="block mt-2">en PEMEX, CFE e IMSS</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          Abogados especialistas en el complejo marco legal de las empresas paraestatales de México. Tu estabilidad y futuro son nuestra prioridad.
        </p>
        <div className="mt-10">
          <a
            href="#contacto"
            className="inline-block bg-secondary text-primary font-bold py-4 px-10 rounded-lg shadow-xl text-lg hover:bg-accent transition-transform duration-300 hover:scale-110 transform"
          >
            Agenda tu Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
