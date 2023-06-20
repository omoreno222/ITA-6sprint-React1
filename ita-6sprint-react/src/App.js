import React from "react";
import Escena from "./components/Escena/Escena";
import { useState } from "react";
import {
  Boton,
  Radiado,
  Contenedor,
  Inicio,
  BotonInicio,
} from "./components/Escena/Escena_styled";
import { MainContainer } from "./components/MainContainer/MainContainer_styled.js";
import arrayText from "./textHistoria.js";
const imagen11 = "../img/img1.jpg";

function App() {
  const [posicion, setPosicion] = useState(0);
  const [wellcome, setWellcome] = useState(true);
  const [imatge, setImatge] = useState(arrayText[0].imatge);

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
    <MainContainer style={{ background: `url(${imatge})` }}>
      <Contenedor>
        <Boton onClick={menosPosicion}>Anterior</Boton>
        <Boton onClick={masPosicion}>Següent</Boton>
      </Contenedor>
      {arrayText.map((item, index) => (
        <Radiado active={index === posicion}>
          <Escena text={item.text} key={item.id} />
        </Radiado>
      ))}
    </MainContainer>
  );
}

export default App;
