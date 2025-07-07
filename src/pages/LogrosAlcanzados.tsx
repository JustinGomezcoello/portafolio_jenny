import React from 'react';

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
        </div>
      </div>
    </div>
  );
};

export default LogrosAlcanzados;