import React from "react";
import "./App.css";
import Escena from "./components/escena/Escena";
import { Boton, Radiado, Contenedor } from "./styled";
import arrayText from "./textHistoria.js";
import { useState } from "react";

function App() {
  const [posicion, setPosicion] = useState(0);
  const menosPosicion = () => {
    if (posicion > 0) {
      setPosicion(posicion - 1);
    }
  };
  const masPosicion = () => {
    if (posicion < arrayText.length - 1) {
      setPosicion(posicion + 1);
    }
  };

  return (
    <div className="pral">
      <Contenedor>
        <Boton onClick={menosPosicion}>Anterior</Boton>
        <Boton onClick={masPosicion}>Següent</Boton>
      </Contenedor>

      {arrayText.map((item, index) => (
        <Radiado active={index === posicion}>
          <Escena text={item.text} key={item.id} />
        </Radiado>
      ))}
    </div>
  );
}

export default App;
