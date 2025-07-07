import React from 'react';
import { motion } from 'framer-motion';

const FinCiclo: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-600/50 animate-gradient" />

      <div className="relative bg-black/40 min-h-screen backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl font-extrabold text-center text-white mb-12 drop-shadow-glow"
          >
            Fin de Ciclo
          </motion.h1>

          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-white/90 backdrop-blur-md rounded-lg shadow-2xl p-10 mb-8"
            >
              <p className="text-3xl text-center italic font-semibold" style={{ color: '#e573c7' }}>
                "Un verdadero maestro en gastronomía y marketing no solo enseña recetas o estrategias, sino que inspira a transformar cada plato y cada marca en una experiencia inolvidable. Gracias por ser el maestro de nuestro conocimiento y el estratega de nuestra pasión."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinCiclo;