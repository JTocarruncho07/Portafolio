import React, { useState } from 'react';
import '../styles/Contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "82d9b75c-311e-489f-8ab3-c366b1aad4da");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        alert("¡Mensaje enviado con éxito! Te responderé lo antes posible.");
        event.target.reset();
      } else {
        alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
      }
    } catch (err) {
      console.error("Error al enviar el formulario:", err);
      alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-content">
        <h2>Contacto</h2>
        
        <div className="contact-info">
          <div className="contact-card">
            <i className="fas fa-phone"></i>
            <h3>Teléfono</h3>
            <p>+57 313 495 4563</p>
            <a href="tel:+573134954563" className="contact-button" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-phone"></i> Llamar
            </a>
          </div>

          <div className="contact-card">
            <i className="fab fa-whatsapp"></i>
            <h3>WhatsApp</h3>
            <p>+57 313 495 4563</p>
            <a href="https://wa.me/573134954563" className="contact-button" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> Chatear
            </a>
          </div>

          <div className="contact-card">
            <i className="fas fa-envelope"></i>
            <h3>Correo Electrónico</h3>
            <p>jtocarruncho07@gmail.com</p>
            <a href="mailto:jtocarruncho07@gmail.com" className="contact-button" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i> Enviar correo
            </a>
          </div>

          <div className="contact-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Ubicación</h3>
            <p>Tunja, Boyacá, Colombia</p>
            <a href="https://www.google.com/maps/place/Tunja,+Boyac%C3%A1" className="contact-button" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt"></i> Ver en mapa
            </a>
          </div>
        </div>

        <section className="contact">
          <h3>O envíame un mensaje</h3>
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Escriba su nombre" 
              required
            />

            <label htmlFor="email">Correo:</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Escriba su correo electrónico" 
              required
            />

            <label htmlFor="message">Mensaje:</label>
            <textarea 
              name="message" 
              id="message" 
              placeholder="Escriba su mensaje" 
              required
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              <span className="transition"></span>
              <span className="gradient"></span>
              <span className="label">
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </span>
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
