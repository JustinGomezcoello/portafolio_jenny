import React from 'react';
// @ts-ignore: Importación de imágenes JPG
import capCasopractico2 from '../assets/images/cap_casopractico2.JPG';
// @ts-ignore: Importación de imágenes JPG
import enfoquefiltrado1 from '../assets/images/enfoquefiltrado1.jpg';
// @ts-ignore: Importación de imágenes JPG
import enfoquefiltrado2 from '../assets/images/enfoquefiltrado2.jpg';

const AprendizajePracticoExperimental2: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center py-12 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/32848453/pexels-photo-32848453.jpeg')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 animate-fadeIn">
            APRENDIZAJE PRÁCTICO EXPERIMENTAL
          </h1>

          {/* Quote */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-fadeIn">
            <p className="text-2xl text-gray-700 italic text-center">
              "A través de las actividades prácticas y experiencias directas, pude aplicar los conceptos teóricos del marketing gastronómico, lo que facilitó una mejor comprensión y fortaleció mis habilidades para enfrentar situaciones reales del entorno comercial."
            </p>
          </div>

          {/* Caso práctico 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Caso práctico 2</h2>
            <div className="p-8 flex flex-col items-center bg-gray-50">
              <img src={capCasopractico2} alt="Caso práctico 2" className="rounded-lg shadow-md mb-6 w-full object-contain animate-fadeIn" />
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                El caso "Sabor a Pura Leche" nos permitió analizar cómo una empresa puede posicionar su producto en un mercado competitivo a través del marketing estratégico. Durante la lección, se abordaron temas como la segmentación del mercado, el enfoque en los atributos del producto (como la naturalidad y el origen), y la importancia del storytelling para conectar con el consumidor.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-justify mt-4">
                Este caso nos ayudó a entender cómo comunicar efectivamente los valores de una marca, en este caso, el uso de leche pura y sin aditivos—, y cómo adaptar la propuesta de valor según el perfil del cliente. También se reflexionó sobre el diseño del empaque, el canal de distribución y la diferenciación frente a otras marcas del mismo rubro.
              </p>
            </div>
          </div>

          {/* Análisis del nivel de satisfacción del cliente */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Análisis del nivel de satisfacción del cliente en un establecimiento gastronómico local</h2>
            <div className="p-8 bg-gray-50">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <iframe
                  src="/analisisdeniveldesatisfaccionalclienteEnBocaDeTodosBonappetit.pdf"
                  className="w-full h-[500px] rounded-lg"
                  title="Análisis de satisfacción Bon Appétit"
                />
                <iframe
                  src="/analisisdelniveldesatisfaccionalclienteEnbocadetodos.pdf"
                  className="w-full h-[500px] rounded-lg"
                  title="Análisis de satisfacción EnBocaDeTodos"
                />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Este análisis me permitió comprender la importancia de escuchar al cliente y utilizar herramientas adecuadas para medir su nivel de satisfacción. A través del caso EnBocaDeTodos – Bon Appétit, aprendí cómo los comentarios, opiniones y percepciones de los consumidores pueden convertirse en datos valiosos para mejorar productos, servicios y la experiencia general del cliente. También reforcé el valor de actuar con base en esos resultados para fidelizar al público y mantener una imagen positiva de la marca.
              </p>
            </div>
          </div>

          {/* Las 5 principales tendencias globales de consumo para 2025 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Las 5 principales tendencias globales de consumo para 2025</h2>
            <div className="p-8 flex flex-col gap-8 items-center bg-gray-50">
              <img src={enfoquefiltrado1} alt="Tendencia global 1" className="rounded-lg shadow-md w-full object-contain animate-fadeIn" />
              <img src={enfoquefiltrado2} alt="Tendencia global 2" className="rounded-lg shadow-md w-full max-w-md object-contain animate-fadeIn" />
            </div>
            <div className="p-8 bg-gray-50 pt-0">
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Durante la casa abierta sobre las tendencias globales de consumo 2025, analizamos cómo el sector gastronómico debe adaptarse a cambios como el consumo consciente, la alimentación saludable, la digitalización, la personalización y la valorización de lo local. Estas tendencias reflejan una nueva forma de comer, donde el cliente busca experiencias más responsables, tecnológicas y alineadas con sus valores.
              </p>
            </div>
          </div>

          {/* Feria de emprendedores */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Feria de emprendedores</h2>
            <div className="p-8 bg-gray-50">
              <iframe
                src="/evidenciasvisuales.pdf"
                className="w-full h-[500px] rounded-lg mb-8"
                title="Evidencias Feria de Emprendedores"
              />
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                La feria de emprendimientos gastronómicos fue una oportunidad para que los estudiantes demostráramos nuestra creatividad, conocimientos y habilidades aplicadas al desarrollo de productos reales. Cada stand representó una propuesta única, con identidad propia, enfocada en satisfacer las tendencias actuales del consumo y responder a las necesidades del mercado. A través de estos emprendimientos, no solo presentamos alimentos, sino también conceptos de marca, estrategias de marketing y visión empresarial.
              </p>
            </div>
          </div>

          {/* Venta productos */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Venta productos</h2>
            <div className="p-8 bg-gray-50">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <iframe
                  src="/ventaproductos2.pdf"
                  className="w-full h-[500px] rounded-lg"
                  title="Venta productos 2"
                />
                <iframe
                  src="/ventadeproductos.pdf"
                  className="w-full h-[500px] rounded-lg"
                  title="Venta productos"
                />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                La venta de productos del stand NANIS durante la feria fue el resultado de una propuesta bien estructurada que combinó sabor, presentación atractiva y una estrategia de marketing enfocada en el consumidor. Gracias al trabajo en equipo y a la planificación previa, se logró una excelente acogida del público, alcanzando la venta total de los productos disponibles. Esta experiencia no solo reflejó el potencial del emprendimiento, sino también la aplicación real de los conocimientos adquiridos en la carrera.
              </p>
            </div>
          </div>

          {/* Estrategia de marketing emocional - Video */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Estrategia de marketing emocional</h2>
            <div className="p-8 bg-gray-50 flex flex-col items-center">
              <div className="w-full flex justify-center mb-8">
                <iframe
                  width="400"
                  height="700"
                  src="https://www.youtube.com/embed/vYQg0CKvzRE"
                  title="Estrategia de marketing emocional"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Durante la feria, el marketing emocional fue una herramienta clave para conectar con los clientes y motivar sus decisiones de compra. A través de una presentación cuidada, un trato cercano y detalles que apelaban a la nostalgia, la alegría y la curiosidad, logramos crear una experiencia que iba más allá del producto. Esta conexión emocional influyó positivamente en las ventas, demostrando que cuando el cliente se siente identificado, valorado o sorprendido, es más probable que elija y recomiende la marca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajePracticoExperimental2;