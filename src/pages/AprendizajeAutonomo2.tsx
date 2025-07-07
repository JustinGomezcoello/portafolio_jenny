import React from 'react';

const AprendizajeAutonomo2: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center py-12 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/32821500/pexels-photo-32821500.jpeg')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 animate-fadeIn text-white">
            APRENDIZAJE AUTÓNOMO
          </h1>

          {/* Informe de ventas por stand */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Informe de ventas por stand</h2>
            <div className="p-8 bg-gray-50">
              <iframe
                src="/informedeventas.pdf"
                className="w-full h-[500px] rounded-lg mb-8"
                title="Informe de ventas por stand"
              />
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                El informe de ventas demuestra un resultado exitoso, ya que se logró vender el 100% de los productos disponibles. Esto refleja no solo una buena planificación y estrategia de venta, sino también que la propuesta del stand NANIS fue atractiva, bien recibida y conectó de forma efectiva con el público durante la feria.
              </p>
            </div>
          </div>

          {/* Formulación de los objetivos Smart */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Formulación de los objetivos Smart</h2>
            <div className="p-8 bg-gray-50">
              <iframe
                src="/formulaciondelosobjetivosSmart.pdf"
                className="w-full h-[500px] rounded-lg mb-8"
                title="Formulación de los objetivos Smart"
              />
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                La formulación de los objetivos SMART para el stand NANIS fue fundamental para guiar nuestras acciones durante la feria. Establecer metas específicas, medibles, alcanzables, relevantes y con un tiempo definido nos permitió organizar el trabajo con mayor enfoque, evaluar resultados concretos y tomar decisiones estratégicas antes, durante y después del evento. Gracias a esto, logramos cumplir nuestras metas y obtener un resultado exitoso en ventas y posicionamiento de marca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajeAutonomo2;