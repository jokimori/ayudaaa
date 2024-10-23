"use client";




import React, { useEffect, useState } from 'react';

const MovieQuestionComponent = () => {
  // Estado para manejar la imagen actual
  const [imageSrc, setImageSrc] = useState('paisaje.png');

  // Función para alternar entre las imágenes
  const toggleImage = () => {
    setImageSrc((prevImageSrc) =>
      prevImageSrc === 'paisaje.png' ? 'paisajef.png' : 'paisaje.png'
    );
  };

  useEffect(() => {
    // Cargar el script de Flourish después de montar el componente
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Lenguaje visual</h1>
      <h2 className="subtitle">Cine y tipos de consumo</h2>

      <div className="legend">
        <p>Cada tipo de consumo se ve representado por un <strong>color</strong> distinto:</p>
        <div className="row2">
          <span className="lasMasas">Las masas <span>#64A8C8</span></span>
          <div className="button blue2">Botones</div>
        </div>
        <div className="row2">
          <span className="losApasionados">Los fanáticos <span>#CE4D4D</span></span>
          <div className="button green2">Botones</div>
        </div>
        <div className="row2">
          <span className="laAcademia">La Academia <span>#E8AD38</span></span>
          <div className="button yellow2">Botones</div>
        </div>
      </div>

      <div className="graph">
        <p>
          Para mostrar cuánto recaudó una película usaremos dos recursos:
        </p>
        <p>
          Los gráficos de barra tradicionales:
        </p>
        

        {/* Contenedor para los dos gráficos */}
       
          {/* Primer gráfico Flourish */}
         
            <div className="w-full md:w-1/2 mb-8" style={{ mixBlendMode: 'multiply' }}>
           <div className="flourish-embed flourish-chart" data-src="visualisation/19281503">
             <noscript>
               <img src="https://public.flourish.studio/visualisation/19281503/thumbnail" width="100%" alt="chart visualization" />
             </noscript>
           </div>
         </div>
         <div className="w-full md:w-1/2 mb-8" style={{ mixBlendMode: 'multiply' }}>
           <div className="flourish-embed flourish-chart" data-src="visualisation/19444595">
             <noscript>
               <img src="https://public.flourish.studio/visualisation/19444595/thumbnail" width="100%" alt="chart visualization" />
             </noscript>
           </div>
         </div>
         <div className="w-full md:w-1/2 mb-8" style={{ mixBlendMode: 'multiply' }}>
           <div className="flourish-embed flourish-chart" data-src="visualisation/19281600">
             <noscript>
               <img src="https://public.flourish.studio/visualisation/19281600/thumbnail" width="100%" alt="chart visualization" />
             </noscript>
           </div>
         </div>
         <p>
          En baldes de pochoclos. Estamos teniendo en cuenta que por balde suelen haber 150 pochoclos y decidimos que cada pochoclo simboliza 100,000 dólares. Quedaría algo así:
        </p>
      

    </div>


      <div className="buckettext">
        
        <div className="bucketRow">
          <div className="bucket">
            <img src="92baldes.png" alt="Pochoclo 2014" className="bucketImage" />
          </div>
        </div>
      </div>
     
      <div className="buckettext">
        <div className="bucketRow">
          <div className="bucket">
            <img src="32baldes.png" alt="Pochoclo 2014" className="bucketImage" />
          </div>
        </div>
      </div>
     
      <div className="bucketttext">
        <div className="bucketttrow">
          <div className="buckett">
            <img src="15baldes.png" alt="Pochoclo 2014" className="buckettImage" />
          </div>
        </div>
      </div>

      <p className="legend"> Cuando el usuario haga hover en las barras, nuestra idea es que aparezcan posters de las películas hechos por nosotros. Estos son algunos ejemplos:</p> 
      <div className="buckettext">
        <div className="bucketRow">
          <div className="bucket">
            <img src="abengers.png" alt="Pochoclo 2014" className="quetevoy" />
          </div>
          <div className="bucket">
            <img src="containy.png" alt="Pochoclo 2014" className="quetevoy" />
          </div>
          <div className="bucket">
            <img src="rarauw.png" alt="Pochoclo 2014" className="quetevoy" />
          </div>
        </div>
      </div>

      <p className="legend"> También queremos sumar una visualización de todos los géneros de películas y cuántas veces aparecen.</p> 
      <div className="buckettext">
        <div className="bucketRow">
          <div className="bucket">
            <img src="grafico.png" alt="gráfico" className="graficop"/>
          </div>
        
        </div>
      </div>
     

      <p className="subtitle"> Encuesta</p>
       <p className="legend"> Nuestra idea es incluir un test que le demuestre al usuario qué tipo de consumo se parece más al suyo.</p> 
     
      <div className="legend">
        <p className="progressText">
          El usuario puede saber en qué instancia se encuentra de la encuesta gracias a la barra de progreso:
        </p>
        <img src="progresobarra.png" alt="Progreso" className="progressImage" />
      </div>
     

      <p className="legend">
        Cada respuesta de las preguntas del test representará un tipo de consumo. Al finalizar la encuesta, el
        usuario contará con un color especial que se habrá formado de la mezcla de los colores que le corresponden 
        a cada uno de los tipos de consumo. El tipo de consumo que más se asemeje al suyo contará con un porcentaje 
        mayor en la mezcla de los tres colores.
        Además de esto, se nos ocurrió que el color se mostrara también como "Filtro de tu película"
      </p>

      <p className="legend">Ejemplo:</p>

      {/* Sección centrada */}
      <div className="centerSeccion">
        <p className="ejemplo">Tu color:</p>
        <p className="ejemplo">#BD7974</p>
        <img src="colors.png" alt="Colores" className="colores" />
        <p className="textoejemplo">
        Tus gustos se conforman en un 57% como el consumo de los fanáticos, un 25% como el de las masas y un 18% como el de la Academia.
      </p>
      </div>
      <div className="centerSeccion">
        <p className="ejemplo">El filtro de tu película:</p>
        <button onClick={toggleImage} className="botonFiltro">Aplicar filtro</button>
        <img src={imageSrc} alt="Colores" className="coloress" />
      </div>
    </div>

 
  );
};

export default MovieQuestionComponent;