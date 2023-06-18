import React from "react";
import "./App.css";
import Escena from "./components/escena/Escena";
import arrayText from "./textHistoria.js";

function App() {
  return (
    <div>
      {arrayText.map((item) => (
        <Escena text={item.text} />
      ))}
    </div>
  );
}

export default App;
