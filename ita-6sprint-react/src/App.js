import React from "react";
import "./App.css";
import Escena from "./components/escena/Escena";
import { Radiado } from "./styled";
import arrayText from "./textHistoria.js";

function App() {
  return (
    <div className>
      {arrayText.map((item) => (
        <Radiado>
          <Escena text={item.text} />
        </Radiado>
      ))}
    </div>
  );
}

export default App;
