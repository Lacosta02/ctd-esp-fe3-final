import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !nombre ||
      !apellido ||
      !email ||
      nombre.length < 5 ||
      !validateEmail(email)
    ) {
      setError('Por favor verifique su información nuevamente');
      return;
    } else {
      props.onForm(nombre, apellido, email);
      setError('');
      setFormularioEnviado(true);
      console.log('Formulario enviado');
    }
  }

  function handleNombre(e) {
    setNombre(e.target.value);
  }

  function handleApellido(e) {
    setApellido(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  return (
    <div className="contact">
      <>
        {formularioEnviado ? (
          <p>
            Gracias por pensar en nosotros {nombre}, te contactaremos lo antes posible vía email.
          </p>
        ) : (
          <form className="formulario" onSubmit={handleSubmit}>
            <h2 className="text">Sumate a nosotros</h2>
            <div className="parrafo">
              <p>Somos el centro de odontología más completo del país, cuidamos de tu sonrisa utilizando </p>
              <p>tecnología de última generación, las más completas prestaciones y un amplio equipo de </p>
              <p>profesionales al servicio de la salud de tu boca.</p>
            </div>
            <div className="input-container">
              <label className="label" htmlFor="nombre">Nombre:</label>
              <input
                className="input"
                type="text"
                id="nombre"
                placeholder="Lionel"
                value={nombre}
                onChange={handleNombre}
              />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="apellido">Apellido:</label>
              <input
                className="input"
                type="text"
                id="apellido"
                placeholder="Messi"
                value={apellido}
                onChange={handleApellido}
              />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="email">Email:</label>
              <input
                className="input"
                type="text"
                id="email"
                placeholder="caupolican@gmail.com"
                value={email}
                onChange={handleEmail}
              />
            </div>
            {error && <p>{error}</p>}
            <button className="button" type="submit">
              Enviar
            </button>
          </form>
        )}
      </>
    </div>
  );
};

export default Form;