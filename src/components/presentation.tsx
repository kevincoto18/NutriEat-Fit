import React from "react";
import "../styles/presentation.css";

function Presentation() {
  const handleScrollToRecipe = () => {
    const recipeComponent = document.getElementById("Ingredients");
    if (recipeComponent) {
      recipeComponent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="card" id="homepage">
      <div className="card-body" id="contenedor">
        <div className="flex-grow-1" id="ladoa">
          <div id="ladoa-content">
            <div className="title">
              Prepara tus recetas con tus ingredientes favoritos!
            </div>
            <div className="texto-normal">
              ¿No sabes que cocinar hoy? NutriEat Fit te ayuda a preparar
              deliciosas recetas con los ingredientes que dispones, gracias a la
              Inteligencia Artificial podemos brindarte multiples opciones para
              que tus comidas sean lo mas nutritivas.
            </div>
            <div className="buttons">
              <button
                className="btnA"
                role="button"
                onClick={handleScrollToRecipe}
              >
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
            <img src="../../public/breakfasst.svg" alt="50px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
