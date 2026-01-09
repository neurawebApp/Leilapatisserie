import { motion } from 'framer-motion';
import { Heart, Award, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passion Autodidacte',
      description: 'Un parcours unique guidé par l\'amour de la pâtisserie et la soif d\'apprendre',
    },
    {
      icon: Award,
      title: 'Qualité Premium',
      description: 'Des ingrédients sélectionnés avec soin pour des créations d\'exception',
    },
    {
      icon: Sparkles,
      title: 'Créations Uniques',
      description: 'Chaque pâtisserie est une œuvre d\'art personnalisée selon vos désirs',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/patissiere.jpg"
                alt="Leila en train de créer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold-500/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 mb-6">
              L'Excellence Artisanale
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Autodidacte passionnée, j'ai transformé ma passion pour la pâtisserie en un
              véritable art de vivre. Chaque création est le fruit d'un apprentissage constant,
              d'une exigence sans compromis et d'un amour profond pour les saveurs authentiques.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              De l'entremet raffiné au number cake créatif, je mets tout mon savoir-faire au
              service de vos moments précieux. Parce que chaque célébration mérite une pâtisserie
              unique, créée avec le cœur et sublimée par des techniques professionnelles.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
