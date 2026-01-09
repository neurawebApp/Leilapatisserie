import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  details: string;
}

const QuoteForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    details: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    'Gâteau d\'anniversaire',
    'Mariage (Wedding Cake)',
    'Entremets de fête',
    'Number Cake',
    'Atelier privé',
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Créer le contenu de l'email
    const emailBody = `
Nouvelle demande de devis

Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Type de prestation: ${formData.serviceType}

Détails du projet:
${formData.details}
    `.trim();

    // Ouvrir le client email par défaut
    const mailtoLink = `mailto:chaouch.leila@hotmail.fr?subject=Demande de devis - ${formData.serviceType}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        details: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-cream-50 to-gold-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">
            Demandez Votre Devis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partagez-nous votre projet et recevez une proposition personnalisée pour votre
            création sur-mesure
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">
                  Demande Envoyée !
                </h3>
                <p className="text-gray-600 text-lg">
                  Je vous recontacterai très prochainement pour échanger sur votre projet.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Type de prestation *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Sélectionnez une option</option>
                    {serviceTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Détails de votre projet *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
                    placeholder="Parlez-nous de votre projet : nombre de personnes, date de l'événement, préférences de saveurs, design souhaité..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Envoyer ma demande</span>
                  <Send size={20} />
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteForm;
