import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
    <div className="card" style={{ width: "18rem", margin: "22px", marginTop: "50px" }}>
        <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <button className="btn btn-outline-dark me-4" style={{ borderWidth: '2px' }}>Ver más</button>
        <button className="btn btn-dark">Añadir</button>
      </div>
    </div>
  );
};

export default CardPizza;

