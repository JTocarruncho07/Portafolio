import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import { services } from '../utils/services';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <>
      <div className="home">
        <Navbar />
        
        {/* Hero Section */}
        <section className="main">
          <div className='content'>
            <img 
              src="img/Logos/logoInicio.png" 
              alt="Logo" 
              className="logo" 
            />
            <h1>Bienvenido a mi Portafolio</h1>
            <h3>Apasionado por la tecnología y en constante aprendizaje. Construyendo soluciones simples con código.</h3>
            <Link to="/projects" className="trabajo">
              <span className="transition"></span>
              <span className="gradient"></span>
              <span className="label">Conoce mi trabajo</span>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <h2>Servicios</h2>
          <div className="services-container">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                icon={service.icon}
                alt={service.alt}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <h2>Ponte en contacto conmigo</h2>
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
              rows="6" 
              cols="50"
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
    </>
  );
};

export default Home; 