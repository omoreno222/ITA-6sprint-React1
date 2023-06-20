import React from "react";
import "./App.css";
import Escena from "./components/escena/Escena";
import { useState } from "react";
import { Boton, Radiado, Contenedor, Inicio, BotonInicio } from "./styled";
import arrayText from "./textHistoria.js";
/* el array llega bien las cuatro lineas siguientes funcionan...*/
console.log(arrayText[0].imatge);
console.log(arrayText[1].imatge);
console.log(arrayText[2].imatge);
console.log(arrayText[3].text);
const imagen11 = "../img/img1.jpg";

function App() {
  const [posicion, setPosicion] = useState(0);
  const [wellcome, setWellcome] = useState(true);
  const [imatge, setImatge] = useState(arrayText[0].imatge);
  console.log(imatge);
  const menosPosicion = () => {
    if (posicion > 0) {
      setPosicion(posicion - 1);
      setImatge(arrayText[posicion - 1].imatge);
    }
  };
  const masPosicion = () => {
    if (posicion < arrayText.length - 1) {
      setPosicion(posicion + 1);
      setImatge(arrayText[posicion + 1].imatge);
    }
  };

  if (wellcome === true) {
    return (
      <Inicio>
        <h1>Descripció del projecte</h1>
        <p>
          Benvingut al tutorial de consells de la nostra empresa. Dins d'aquest
          tutorial podràs navegar pels consells que considerem són importants
          per tu. A mesura que navegues podràs veure en quin lloc dels consells
          et trobes, ja que canviaran de color.
        </p>
        <BotonInicio onClick={() => setWellcome(false)}>Començar</BotonInicio>
      </Inicio>
    );
  }

  return (
    <div style={{ background: `url(${imatge})` }}>
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
