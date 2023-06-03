import { useState } from 'react';
import Card from './Card';

const Form = () => {
  const [nombre, setName] = useState('');
  const [correo, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (nombre.trim().length < 3 || nombre.trim().startsWith(' ')) {
      setErrorMessage('Por favor, ingresa un nombre válido');
      return;
    }

    if (correo.length < 6) {
      setErrorMessage('Por favor, ingresa un correo válido');
      return;
    }


    setErrorMessage('');


    setName('');
    setEmail('');
  };

  return (
    <div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={correo}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {nombre && correo && <Card nombre={nombre} correo={correo} />}
    </div>
  );
};

export default Form;