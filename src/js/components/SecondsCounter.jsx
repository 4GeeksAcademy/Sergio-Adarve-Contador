import React from "react";
import "./SecondsCounter.css"; // Importamos los estilos del contador
import "@fortawesome/fontawesome-free/css/all.min.css";

const SecondsCounter = ({ seconds }) => {
  // Convertimos los segundos en un array de 6 dígitos
  const digits = String(seconds).padStart(6, "0").split("");

  return (
    <div className="counter">
      <div className="digit clock-icon">
        <i className="fas fa-clock"></i>
      </div>
      {digits.map((digit, index) => (
        <div key={index} className="digit">{digit}</div>
      ))}
    </div>
  );
};

export default SecondsCounter;
