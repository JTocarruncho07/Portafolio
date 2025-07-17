import React from 'react';
import '../styles/Projects.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import projects from '../utils/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects">
      <Navbar />
      <div className="projects-content">
        <h2>Mis Proyectos</h2>
        {projects.length > 0 ? (
          <div className="projects-gallery">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                image={project.image}
                links={project.links}
              />
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
      <Footer />
    </div>
  );
};

export default Projects;
