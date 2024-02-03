import React from "react";
import "../styles/presentation.css";
function Presentation() {
  return (
    <div className="card">
      <div className="card-body" id="contenedor">
        <div className="flex-grow-1" id="ladoa">
          <div id="ladoa-content">
            <div className="title">
              Prepara tus recetas con tus ingredientes favoritos!
            </div>
            <div className="texto-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              id qui delectus libero! Accusamus repudiandae pariatur repellat
              illo praesentium aut nulla veritatis commodi quisquam sequi! Alias
              eius perferendis ducimus eum!
            </div>
            <div className="buttons">
              <button className="btnA" role="button">
                Empecemos!
              </button>

              <button className="btnB" role="button">
                Calcular Peso
              </button>
            </div>
          </div>
        </div>
        <div className="flex-grow-1" id="ladob">
          <div className="carrusel">
            <img src="../../public/prueba.svg" alt="50px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
