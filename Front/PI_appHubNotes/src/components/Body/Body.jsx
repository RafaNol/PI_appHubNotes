import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import InicioButton from "../InicioButton/InicioButton";
const Body = () => {
  const lists = ["Compras", "Etapas do PI", "Temas De Estudos", "Itens Para Viagem", "Planos Para o Ano"];

  return (
    <div className="body">
      <Header />
      <div className="list-container">
        {lists.map((list, index) => (
          <div key={index} className="list">{list}</div>
        ))}
      </div>
      <Button label="Nova Lista" />
      <div className="barra-inferior">
        <Button label="Início" />
      </div>
    </div>
  );
};

export default Body;
