import React, { useState } from 'react';
import '../styles/Projects.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const projects = [];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="projects">
            <Navbar />
            <div className="projects-content">
                <h2>Mis Proyectos</h2>
                {projects.length > 0 ? (
                    <div className="projects-gallery">
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="project-image" onClick={() => handleImageClick(project.image)}>
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <span>Ver más</span>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="projects-message">
                        <i className="fas fa-code-branch"></i>
                        <h3>Trabajando en nuevos proyectos</h3>
                        <p>
                            Actualmente estoy trabajando en nuevos proyectos. 
                            ¡Vuelve pronto para ver mis nuevas creaciones!
                        </p>
                    </div>
                )}

                <section className="development-projects">
                    <h3>Proyectos en Desarrollo</h3>
                    <div className="mockup-viewer">
                        <div className="mockup-card">
                            <div className="mockup-image">
                                <img src="/img/projects/mockup1.jpg" alt="Proyecto en desarrollo" />
                                <div className="mockup-overlay">
                                    <span className="project-status">En desarrollo</span>
                                </div>
                            </div>
                            <div className="mockup-info">
                                <h4>Proyecto en Desarrollo</h4>
                                <p>Descripción del proyecto que está en desarrollo. Próximamente más detalles.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {selectedImage && (
                <div className="image-modal" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Proyecto" />
                        <button className="close-modal" onClick={closeModal}>×</button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Projects;
