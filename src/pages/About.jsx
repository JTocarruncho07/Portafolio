import React from 'react';
import '../styles/About.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutCard from '../components/AboutCard';
import { programmingLanguages } from '../utils/about';

const About = () => {
    return (    
        <div className='about'>
            <Navbar />
            <div className='about-content'>
                <h2>Sobre Mí</h2>
                <p className='about-text'>
                    Soy un desarrollador en formación con muchas ganas de aprender y crecer. Aunque tengo poca experiencia, me esfuerzo por escribir código limpio y entender a fondo cada proyecto. Busco oportunidades que me reten y me ayuden a seguir avanzando en el mundo del desarrollo.    
                </p>
                <h3>Mis Tecnologías</h3>
                <div className='technologies-grid'>
                    {programmingLanguages.map((tech, index) => (
                        <AboutCard
                            key={index}
                            language={tech.language}
                            description={tech.description}
                            icon={tech.icon}
                        />
                    ))}
                </div>
            </div>
            <Footer /> 
        </div>
    )
}

export default About;
