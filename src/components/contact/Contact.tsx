import React, { useState } from 'react';
import './contact.css'

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Email:', email);
    console.log('Mensaje:', message);
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    // Limpiar campos si lo deseas
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contact-container'>
      <div className="contact-card">
        <h1>Contáctanos</h1>
        <p>
          Estamos comprometidos con ofrecer soluciones médicas de alta calidad
          para hospitales y centros de salud. Si desea obtener más información
          sobre nuestro producto, no dude en comunicarse con nosotros. Nuestro
          equipo de expertos está listo para responder sus preguntas y brindarle
          toda la información que necesite.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Tu email</label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Si necesita más información, envíenos un mensaje y le contestaremos en breve."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className='button-wrapper'>
            <button type="submit" className="submit-btn">
            Enviar
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact
