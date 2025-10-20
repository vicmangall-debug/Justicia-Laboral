
import React from 'react';

const TargetCard: React.FC<{ logo: string; title: string; description: string }> = ({ logo, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-primary rounded-lg shadow-lg">
    <div className="text-4xl font-bold font-serif text-secondary mb-4">{logo}</div>
    <h3 className="text-2xl font-semibold font-serif text-white mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

const TargetAudience: React.FC = () => {
  return (
    <section id="especialistas" className="py-20 bg-primary/95" style={{backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=3')", backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-accent tracking-wide uppercase">Conocimiento Profundo</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl font-serif">
            Especialistas en el Sector Paraestatal
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
            Entendemos las normativas, contratos colectivos y la cultura laboral única de cada una de estas grandes instituciones mexicanas.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <TargetCard 
            logo="PEMEX" 
            title="Petróleos Mexicanos" 
            description="Defendemos a trabajadores de planta, transitorios y jubilados en casos de despidos injustificados, reclamaciones de pensiones y riesgos de trabajo."
          />
          <TargetCard 
            logo="CFE" 
            title="Comisión Federal de Electricidad" 
            description="Asesoramos en la correcta interpretación del Contrato Colectivo de Trabajo (CCT), reajustes, jubilaciones y defensa ante actas administrativas."
          />
          <TargetCard 
            logo="IMSS" 
            title="Instituto Mexicano del Seguro Social" 
            description="Representamos a personal médico, de enfermería y administrativo en conflictos sobre condiciones laborales, escalafón, y negativas de pensión por invalidez o cesantía."
          />
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
