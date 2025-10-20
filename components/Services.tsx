
import React from 'react';

const GavelIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-4.879-4.879L12 12m2.121-2.121L19 5m-4.879 4.879L12 12m0 0L5 19m7-7L5 5" />
        <path d="M3 21h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
);

const DocumentTextIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const ChatAlt2Icon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V10a2 2 0 012-2h8z" />
    </svg>
);

const services = [
  {
    icon: ChatAlt2Icon,
    title: 'Asesoría Especializada',
    description: 'Resolvemos tus dudas sobre contratos, salarios, prestaciones y jubilaciones. Te brindamos una guía clara y precisa para que conozcas tus derechos y opciones.'
  },
  {
    icon: DocumentTextIcon,
    title: 'Consultoría Estratégica',
    description: 'Analizamos a fondo tu caso, evaluamos la viabilidad y diseñamos la mejor estrategia legal para proteger tus intereses a corto, mediano y largo plazo.'
  },
  {
    icon: GavelIcon,
    title: 'Representación Legal',
    description: 'Te representamos con firmeza y profesionalismo ante juntas de conciliación, tribunales y en negociaciones directas para asegurar el mejor resultado posible.'
  }
];

const ServiceCard: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-primary mx-auto mb-6">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="text-xl font-bold font-serif text-primary text-center mb-4">{title}</h3>
    <p className="text-gray-600 text-center leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-secondary tracking-wide uppercase">Nuestros Servicios</h2>
          <p className="mt-2 text-3xl font-extrabold text-primary tracking-tight sm:text-4xl font-serif">
            Soluciones Legales a tu Medida
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Desde una simple consulta hasta la representación total en un juicio, estamos para servirte.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
