import React from 'react';
import { motion } from 'framer-motion';

function Gracias() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 relative overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-600/50 animate-gradient" />

      <div className="relative bg-black/40 min-h-screen backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          {/* Floating quote */}
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-cursive text-center text-white mb-12 drop-shadow-glow"
          >
            "La gastronomía es el arte de usar la comida para crear felicidad."
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="block text-2xl font-light mt-4 italic"
            >
              - Theodore Zeldin
            </motion.span>
          </motion.h1>

          {/* Agradecimiento personalizado */}
          <div className="max-w-2xl mx-auto bg-white/90 rounded-lg shadow-lg p-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Agradecimientos</h2>
            <p className="text-gray-800 text-lg mb-4 text-justify">
              Estimado Ing. Giovanny Haro Sosa,
            </p>
            <p className="text-gray-800 text-lg mb-4 text-justify">
              Quiero expresarle mi más profundo agradecimiento por todo lo que nos ha enseñado a lo largo de este ciclo de Marketing Gastronómico. Su enfoque claro y estructurado, combinado con la aplicabilidad práctica que nos brindó a través de casos reales (como neuromarketing en gastronomía y e‑WOM), ha sido fundamental para consolidar mis aprendizajes.
            </p>
            <p className="text-gray-800 text-lg mb-4 text-justify">
              Valoro especialmente su disposición para responder preguntas, retroalimentar nuestros proyectos y motivarnos a profundizar más allá del aula. Su pasión por la docencia se reflejó en cada clase y nos inspiró a pensar de forma crítica y aplicada.
            </p>
            <p className="text-gray-800 text-lg mb-4 text-justify">
              Gracias por sembrar en mí las herramientas y la confianza para enfrentar retos en el mundo del marketing gastronómico. Ha sido un verdadero privilegio aprender con usted.
            </p>
            <p className="text-gray-800 text-lg text-left mt-8 font-semibold">Atentamente,<br/>Jennyfer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gracias;