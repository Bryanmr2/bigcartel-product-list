import React, { useEffect, useState } from "react";
import { getFromApi } from "./components/Peticion";
import { Producto } from "./components/Producto";
import "./App.css";
import FletchIcon from "./assets/images/Fletch.svg";
import Logo from "./assets/images/Logo.svg";

const App = () => {
  const [objetos, setObjetos] = useState([]);

  useEffect(() => {
    getFromApi(setObjetos);
    console.log(objetos);
  }, []);

  return (
    <div className="container">
      <div className="logos">
        <img src={Logo} width="100px" height="50px" />
        <img src={FletchIcon} height="50px" />
      </div>
      <div className="card-container">
        {objetos.map((item, index) => {
          return (
            <Producto
              imagen={item.images}
              name={item.name}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
