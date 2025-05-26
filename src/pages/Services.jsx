import React from 'react';
import '../styles/Services.css';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import { services } from '../utils/services';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Services = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <div className="services">
            <Navbar />
            <div className="services-content">
                <h2>Mis Servicios</h2>
                <div className="services-grid">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            icon={service.icon}
                            description={service.description}
                            alt={service.alt}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Services;