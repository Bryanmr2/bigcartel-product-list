import React from "react";

export const Producto = (props) => {
  const { imagen, name, description } = props;
  console.log(imagen);
  return (
    <div className="producto">
      <img src={imagen[0].url} />
      <div className="producto-texto">
        <h3> {name} </h3>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};
