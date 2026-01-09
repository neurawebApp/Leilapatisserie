import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Facebook, CakeSlice } from 'lucide-react';

const Footer = () => {
  const phoneNumber = '+33601641374';
  const formattedPhone = '+33 6 01 64 13 74';

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <CakeSlice className="w-8 h-8 text-gold-300" strokeWidth={1.5} />
              <span className="text-2xl font-serif font-bold text-gold-300">
                Leila Pâtisserie
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Créations artisanales d'exception pour vos moments précieux. Chaque pâtisserie est
              une œuvre unique, réalisée avec passion et expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-serif font-bold mb-4 text-gold-300">Contact</h3>
            <div className="space-y-3">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-gold-300 transition-colors"
              >
                <Phone size={20} />
                <span>{formattedPhone}</span>
              </a>
              <a
                href="mailto:contact@leilapatisserie.fr"
                className="flex items-center space-x-3 text-gray-400 hover:text-gold-300 transition-colors"
              >
                <Mail size={20} />
                <span>contact@leilapatisserie.fr</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-serif font-bold mb-4 text-gold-300">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <a
            href={`tel:${phoneNumber}`}
            className="inline-block bg-gold-500 hover:bg-gold-400 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mb-6"
          >
            <Phone className="inline-block mr-2" size={20} />
            Appelez-nous : {formattedPhone}
          </a>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Leila Pâtisserie. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
