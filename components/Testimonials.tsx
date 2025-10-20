
import React from 'react';

const testimonials = [
  {
    quote: "Después de mi despido injustificado en PEMEX, me sentía perdido. Los abogados de esta firma no solo ganaron mi caso, sino que me devolvieron la tranquilidad. ¡Totalmente recomendados!",
    author: "Carlos V.",
    company: "Técnico en PEMEX"
  },
  {
    quote: "Tenía problemas con el cálculo de mi jubilación en CFE. Gracias a su asesoría, logré que se me reconocieran todos mis años de servicio y obtuve la pensión justa. Excelente servicio.",
    author: "Laura M.",
    company: "Administrativa en CFE"
  },
  {
    quote: "Como personal del IMSS, enfrenté un proceso administrativo muy complicado. Su representación fue impecable y profesional, defendieron mis derechos hasta el final. Estoy muy agradecida.",
    author: "Sofia R.",
    company: "Enfermera en IMSS"
  }
];

const TestimonialCard: React.FC<{ quote: string; author: string; company: string }> = ({ quote, author, company }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
        <div className="flex-grow">
            <p className="text-gray-600 italic">"{quote}"</p>
        </div>
        <div className="mt-6">
            <p className="font-bold text-primary font-serif">{author}</p>
            <p className="text-sm text-secondary">{company}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary tracking-tight sm:text-4xl font-serif">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            La confianza y satisfacción de nuestros representados es nuestro mayor orgullo.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
