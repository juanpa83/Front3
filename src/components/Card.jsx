/* eslint-disable react/prop-types */

const Card = ({ nombre, correo }) => {
    return (
      <div className="card">
        <h2>Información recibida:</h2>
        <p>Nombre: {nombre}</p>
        <p>Email: {correo}</p>
      </div>
    );
  };
  
  export default Card;