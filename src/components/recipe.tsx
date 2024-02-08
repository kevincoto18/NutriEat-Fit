import React, { useState } from "react";
import "../styles/recipe.css";

interface Ingredient {
  ingredient: string;
  quantity: string;
}

const Recipe: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { ingredient: "", quantity: "" },
  ]);

  const handleIngredientChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
    key: keyof Ingredient
  ) => {
    const newIngredients = [...ingredients];
    newIngredients[index][key] = event.target.value;
    setIngredients(newIngredients);
  };
  // funtion to add field ingredients
  const addIngredient = () => {
    if (ingredients.length < 7) {
      // Limita a un máximo de 7 filas
      setIngredients([...ingredients, { ingredient: "", quantity: "" }]);
    }
  };

  const removeIngredient = (index: number) => {
    if (ingredients.length > 1) {
      // Limita a un mínimo de 1 fila
      const newIngredients = [...ingredients];
      newIngredients.splice(index, 1);
      setIngredients(newIngredients);
    }
  };
  //  Function to show ingredients
  const showIngredients = () => {
    const ingredientsList = ingredients.map((ingredient) => {
      return `${ingredient.ingredient} - ${ingredient.quantity}`;
    });
    alert(ingredientsList.join("\n"));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes enviar los ingredientes a tu backend o realizar alguna acción
    console.log(ingredients);
  };

  return (
    <div className="cardRecipe">
      <div className="card-body" id="Ingredients">
        <div className="flex-grow-1" id="lado1">
          <h3 className="fw-bold">Agrega tus ingredientes:</h3>
          <p className="text-muted">
            Ingresa el nombre del ingrediente y la cantidad con su unidad basica
          </p>

          <form onSubmit={handleSubmit}>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-row">
                <input
                  type="text"
                  name="ingredient"
                  value={ingredient.ingredient}
                  onChange={(event) =>
                    handleIngredientChange(index, event, "ingredient")
                  }
                  placeholder="Ingrediente"
                  className="form-control"
                />
                <input
                  type="text"
                  name="quantity"
                  value={ingredient.quantity}
                  onChange={(event) =>
                    handleIngredientChange(index, event, "quantity")
                  }
                  placeholder="Cantidad"
                  className="form-control"
                />

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeIngredient(index)}
                  disabled={ingredients.length === 1} // Deshabilita el botón si solo hay una fila
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                  </svg>
                </button>
              </div>
            ))}
            <div className="button-container">
              <button
                type="submit"
                className="btn btn-primary"
                id="GenerateRecipe"
                onClick={showIngredients}
              >
                Generar Receta
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-stars"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                </svg>
              </button>
              <button
                id="AddIngredient"
                type="button"
                className="btn btn-success"
                onClick={addIngredient}
                disabled={ingredients.length === 7} // Deshabilita el botón si ya hay 7 filas
              >
                Agregar Ingrediente
              </button>
            </div>
          </form>
        </div>

        {/* Terminacion de Lado A */}
        <div className="flex-grow-1" id="lado2">
          <div className="card  bg-dark text-white" id="resultrecipe"></div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
