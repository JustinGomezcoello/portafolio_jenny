import React from 'react';
// @ts-ignore: Importación de imágenes JPG
import cuestionarioSegmentacion from '../assets/images/cuestionario_segmentacion.JPG';
// @ts-ignore: Importación de imágenes JPG
import capCuestionarioFinDeCiclo from '../assets/images/cap_cuestionariofindeciclo.JPG';
// @ts-ignore: Importación de imágenes JPG
import capCuestionarioPractico from '../assets/images/cap_cuestionariopractico.JPG';
// @ts-ignore: Importación de imágenes JPG
import capLeccionOral from '../assets/images/cap_leccionoral.JPG';
// @ts-ignore: Importación de imágenes JPG
import capAhorcadoLeccion from '../assets/images/cap_ahorcadoleccion.JPG';

const AprendizajeContactoDocente2: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center py-12 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/32867412/pexels-photo-32867412.jpeg')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 animate-fadeIn">
            APRENDIZAJE EN CONTACTO CON EL DOCENTE
          </h1>

          {/* Quote */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-fadeIn">
            <p className="text-2xl text-gray-700 italic text-center">
              "Sabemos que la diferencia está en los detalles, por eso cuidamos desde la selección del ingrediente hasta la sonrisa con la que servimos."
            </p>
          </div>

          {/* Materia del Segundo Parcial */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Materia Del Segundo Parcial</h2>
            <div className="p-8">
              <iframe
                src="/materia2parcial.pdf"
                className="w-full h-[700px] rounded-lg"
                title="Materia del Segundo Parcial"
              />
            </div>
            <div className="p-8 bg-gray-50">
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Durante el segundo parcial de la materia de Marketing Gastronómico, exploramos cómo los principios del marketing se aplican específicamente al mundo de la alimentación y la gastronomía. Aprendimos que no se trata solo de vender un producto, sino de crear experiencias memorables, construir marcas con identidad, y conectar emocionalmente con los consumidores a través del sabor, la historia y los valores detrás de cada preparación.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-justify mt-4">
                Analizamos temas clave como la segmentación de mercado, el diseño de la propuesta de valor, la importancia del branding, el storytelling culinario, y las estrategias de promoción adaptadas al sector gastronómico. Esta materia nos permitió comprender que en la gastronomía actual, la calidad del producto es fundamental, pero el éxito depende también de cómo lo comunicamos, lo posicionamos y lo diferenciamos.
              </p>
            </div>
          </div>

          {/* Cuestionario de segmentación */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Cuestionario de segmentación</h2>
            <div className="p-8 flex flex-col items-center bg-gray-50">
              <img src={cuestionarioSegmentacion} alt="Cuestionario de segmentación" className="rounded-lg shadow-md mb-6 w-full object-contain animate-fadeIn" />
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Comprendí que conocer al cliente es el primer paso para lograr una estrategia efectiva. Aprendí que no se puede vender el mismo producto de la misma forma a todos, ya que cada grupo tiene necesidades, gustos y comportamientos diferentes.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-justify mt-4">
                Entendí la importancia de dividir el mercado en segmentos específicos —por edad, estilo de vida, ubicación o valores— para poder crear propuestas más precisas y atractivas. También descubrí que al identificar correctamente al público objetivo, no solo se mejora la comunicación de la marca, sino también la eficiencia en la inversión publicitaria y el desarrollo de productos.
              </p>
            </div>
          </div>

          {/* Cuestionario fin de ciclo – teoría */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Cuestionario fin de ciclo – teoría</h2>
            <div className="p-8 flex flex-col items-center bg-gray-50">
              <img src={capCuestionarioFinDeCiclo} alt="Cuestionario fin de ciclo – teoría" className="rounded-lg shadow-md mb-6 w-full object-contain animate-fadeIn" />
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Una parte significativa de haber rendido el cuestionario fue poder poner en práctica los conocimientos adquiridos durante el ciclo. Al responder, me di cuenta de qué temas comprendí mejor y cuáles necesito seguir reforzando, lo cual me sirvió como una autoevaluación general del aprendizaje en marketing gastronómico.
              </p>
            </div>
          </div>

          {/* Cuestionario práctico */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Cuestionario práctico</h2>
            <div className="p-8 flex flex-col items-center bg-gray-50">
              <img src={capCuestionarioPractico} alt="Cuestionario práctico" className="rounded-lg shadow-md mb-6 w-full object-contain animate-fadeIn" />
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                El cuestionario práctico fue útil para aplicar los conocimientos de manera más directa y contextualizada. Me permitió analizar situaciones reales del marketing gastronómico y tomar decisiones basadas en lo aprendido, lo que refuerza la importancia de no solo entender los conceptos, sino saber cómo usarlos correctamente en distintos escenarios.
              </p>
            </div>
          </div>

          {/* Actividades de evaluación - Lecciones orales */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Actividades de evaluación</h2>
            <div className="p-8 bg-gray-50">
              <h3 className="text-2xl font-semibold mb-4 text-center">Lecciones orales</h3>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <img src={capLeccionOral} alt="Lección oral" className="rounded-lg shadow-md w-full object-contain animate-fadeIn" />
                <img src={capAhorcadoLeccion} alt="Ahorcado lección" className="rounded-lg shadow-md w-full object-contain animate-fadeIn" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Una de las lecciones más dinámicas fue cuando participamos en un juego de ahorcado en línea, el cual incluía preguntas y conceptos clave de marketing gastronómico. Esta actividad permitió reforzar nuestros conocimientos de forma lúdica, fomentando la participación y el trabajo en equipo. A través del juego, repasamos términos importantes, aclaramos dudas y afianzamos lo aprendido en clase de una manera diferente, divertida y efectiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajeContactoDocente2;