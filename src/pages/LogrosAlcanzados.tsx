import React from 'react';
// @ts-ignore: Importación de imágenes JPG
import anexo1 from '../assets/images/anexo1.jpg';
// @ts-ignore: Importación de imágenes JPG
import anexo2 from '../assets/images/anexo2.jpg';
// @ts-ignore: Importación de imágenes JPG
import anexo3 from '../assets/images/anexo3.jpg';
// @ts-ignore: Importación de imágenes JPG
import anexo4 from '../assets/images/anexo4.jpg';
// @ts-ignore: Importación de imágenes JPG
import anexo5 from '../assets/images/anexo5.jpg';
// @ts-ignore: Importación de imágenes JPG
import anexo6 from '../assets/images/anexo6.jpg';
// @ts-ignore: Importación de imágenes JPG
import anexo7 from '../assets/images/anexo7.jpg';
// @ts-ignore: Importación de imágenes JPG
import anexo8 from '../assets/images/anexo8.jpg';

const LogrosAlcanzados: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center py-12 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 animate-fadeIn text-gray-900 drop-shadow-lg">
            LOGROS ALCANZADOS
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-fadeIn">
            <p className="text-2xl text-gray-700 italic text-center">
              "Cada experiencia en la carrera, desde la cocina hasta la gestión, contribuye a entender que el marketing no solo vende productos, sino que comunica lo que somos como profesionales gastronómicos."
            </p>
          </div>

          {/* Anexos */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Anexos</h2>
            <div className="space-y-6">
              <img src={anexo1} alt="Anexo 1" className="w-full max-w-md mx-auto rounded-lg shadow-md animate-fadeIn object-contain" />
              <img src={anexo2} alt="Anexo 2" className="w-full max-w-md mx-auto rounded-lg shadow-md animate-fadeIn object-contain" />
              <img src={anexo3} alt="Anexo 3" className="w-full max-w-md mx-auto rounded-lg shadow-md animate-fadeIn object-contain" />
              <img src={anexo4} alt="Anexo 4" className="w-full max-w-md mx-auto rounded-lg shadow-md animate-fadeIn object-contain" />
              <img src={anexo5} alt="Anexo 5" className="w-full max-w-md mx-auto rounded-lg shadow-md animate-fadeIn object-contain" />
              <img src={anexo6} alt="Anexo 6" className="w-full max-w-md mx-auto rounded-lg shadow-md animate-fadeIn object-contain" />
              <img src={anexo7} alt="Anexo 7" className="w-full max-w-md mx-auto rounded-lg shadow-md animate-fadeIn object-contain" />
              <img src={anexo8} alt="Anexo 8" className="w-full max-w-md mx-auto rounded-lg shadow-md animate-fadeIn object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogrosAlcanzados;