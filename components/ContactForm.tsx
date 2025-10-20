
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: 'PEMEX',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', company: 'PEMEX', message: '' });
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-serif">
            Contáctanos Hoy Mismo
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            El primer paso para proteger tu futuro es una consulta. Es confidencial y sin compromiso.
          </p>
        </div>
        <div className="bg-white p-8 sm:p-12 rounded-lg shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono (Opcional)</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Empresa</label>
                <select id="company" name="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm rounded-md">
                  <option>PEMEX</option>
                  <option>CFE</option>
                  <option>IMSS</option>
                  <option>Otra</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Describe brevemente tu caso</label>
              <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"></textarea>
            </div>
            <div className="mt-6 text-center">
              <button type="submit" disabled={formStatus === 'submitting'} className="w-full md:w-auto inline-flex justify-center py-3 px-12 border border-transparent shadow-sm text-lg font-bold rounded-md text-primary bg-secondary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:bg-gray-400 transition-colors duration-300">
                {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </div>
          </form>
          {formStatus === 'success' && <p className="mt-4 text-center text-green-600">¡Gracias por tu mensaje! Nos pondremos en contacto contigo a la brevedad.</p>}
          {formStatus === 'error' && <p className="mt-4 text-center text-red-600">Hubo un error al enviar el formulario. Por favor, intenta de nuevo.</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
