import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/menu.tsx";
import Presentation from "./components/presentation.tsx";
// import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* es por si hay algun error que salga en consola */}
    <Menu />
    <Presentation />
    {/* <App /> */}
  </React.StrictMode>
);

// rcfe para crear un nuevo componente
