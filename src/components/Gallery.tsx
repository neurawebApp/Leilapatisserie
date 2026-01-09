import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Entremet Framboise-Pistache',
    category: 'Entremets Signature',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=2036&auto=format&fit=crop',
    description: 'Un mariage délicat de saveurs raffinées',
  },
  {
    id: 2,
    title: 'Entremet Chocolat Intense',
    category: 'Entremets Signature',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089&auto=format&fit=crop',
    description: 'Trois textures de chocolat pour les amateurs',
  },
  {
    id: 3,
    title: 'Number Cake Élégant',
    category: 'Number Cakes Créatifs',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=2070&auto=format&fit=crop',
    description: 'Personnalisé selon vos envies',
  },
  {
    id: 4,
    title: 'Number Cake Fruité',
    category: 'Number Cakes Créatifs',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e5b80c87?q=80&w=2050&auto=format&fit=crop',
    description: 'Fraîcheur et légèreté au rendez-vous',
  },
  {
    id: 5,
    title: 'Entremet Citron Yuzu',
    category: 'Entremets Signature',
    image: 'https://images.unsplash.com/photo-1519915212116-715efce9f9d2?q=80&w=2071&auto=format&fit=crop',
    description: 'Une explosion de fraîcheur acidulée',
  },
  {
    id: 6,
    title: 'Number Cake Romantique',
    category: 'Number Cakes Créatifs',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=2070&auto=format&fit=crop',
    description: 'Pour célébrer les moments précieux',
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['Tous', 'Entremets Signature', 'Number Cakes Créatifs'];

  const filteredItems =
    selectedCategory === 'Tous'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">
            Nos Créations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre collection de pâtisseries uniques, réalisées avec des ingrédients
            premium et un souci du détail incomparable
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gold-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gold-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={filteredItems[currentIndex].image}
                  alt={filteredItems[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <span className="inline-block bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                    {filteredItems[currentIndex].category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">
                    {filteredItems[currentIndex].title}
                  </h3>
                  <p className="text-cream-100 text-lg">
                    {filteredItems[currentIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {filteredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-gold-500' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
