import React from 'react';
import Button from '../components/Button';
import './Home.css';
import { Calendar, User, Heart, Leaf, Star, Apple } from 'lucide-react';

import Plans from '../components/Plans';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title animate-fade-in delay-100">
              Nutrición Especializada para tu Bienestar
            </h1>
            <p className="hero-subtitle animate-fade-in delay-200">
              Descubre un enfoque personalizado para transformar tu salud, energía y estilo de vida con la Dra. Alejandra María.
            </p>
            <div className="hero-actions animate-fade-in delay-300">
              <Button to="/agendar" variant="primary">Agendar Consulta</Button>
              <Button to="/metodologia" variant="outline">Mi Método</Button>
            </div>
          </div>
          <div className="hero-image-wrapper animate-fade-in delay-200">
            <img 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000" 
              alt="Nutrición Saludable" 
              className="hero-image"
            />
            <div className="glass-card floating-card">
              <Leaf className="glass-icon" size={32} strokeWidth={1} />
              <h3>Armonía Natural</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>
            AGENDA TU CONSULTA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Apple size={24} strokeWidth={2.5} style={{verticalAlign: 'middle', margin: '0 15px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            PLANES PERSONALIZADOS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Apple size={24} strokeWidth={2.5} style={{verticalAlign: 'middle', margin: '0 15px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ASESORÍA ONLINE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Apple size={24} strokeWidth={2.5} style={{verticalAlign: 'middle', margin: '0 15px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            AGENDA TU CONSULTA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Apple size={24} strokeWidth={2.5} style={{verticalAlign: 'middle', margin: '0 15px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            PLANES PERSONALIZADOS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Apple size={24} strokeWidth={2.5} style={{verticalAlign: 'middle', margin: '0 15px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ASESORÍA ONLINE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Apple size={24} strokeWidth={2.5} style={{verticalAlign: 'middle', margin: '0 15px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            AGENDA TU CONSULTA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Apple size={24} strokeWidth={2.5} style={{verticalAlign: 'middle', margin: '0 15px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            PLANES PERSONALIZADOS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Apple size={24} strokeWidth={2.5} style={{verticalAlign: 'middle', margin: '0 15px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ASESORÍA ONLINE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Apple size={24} strokeWidth={2.5} style={{verticalAlign: 'middle', margin: '0 15px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* Plans Section */}
      <Plans />

      {/* About Section */}
      <section id="nosotros" className="about-section section">
        <div className="container about-container">
          <div className="about-image-wrapper">
            <img 
              src="/dra.jpeg" 
              alt="Dra. Alejandra Maria" 
              className="about-image"
            />
          </div>
          <div className="about-content">
            <span className="section-tag">Sobre Mí</span>
            <h2>L. N. Alejandra María Rivera</h2>
            <p>
              Con años de experiencia dedicados al bienestar integral, mi enfoque va más allá de simples dietas. Buscamos encontrar el equilibrio perfecto que tu cuerpo necesita para funcionar de manera óptima.
            </p>
            <p>
              Mi filosofía es crear hábitos sostenibles y amables contigo mismo, apoyados en la ciencia y adaptados a tu vida diaria.
            </p>
            <ul className="about-list">
              <li><Heart className="list-icon" /> Enfoque empático y personalizado</li>
              <li><Leaf className="list-icon" /> Nutrición basada en evidencia</li>
              <li><User className="list-icon" /> Acompañamiento continuo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="services-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Servicios</span>
            <h2>Cómo Puedo Ayudarte</h2>
            <p className="section-desc">Consultas diseñadas a tu medida para alcanzar tus objetivos de salud.</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-wrapper">
                 <User size={32} strokeWidth={1.5} />
              </div>
              <h3>Consulta Inicial</h3>
              <p>Evaluación completa de tu estado de salud, hábitos, composición corporal y definición de objetivos reales y sostenibles.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon-wrapper">
                 <Calendar size={32} strokeWidth={1.5} />
              </div>
              <h3>Seguimiento Continuo</h3>
              <p>Ajustes de tu plan nutricional, monitoreo de avances y resolución de dudas para mantenerte en el camino correcto.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon-wrapper">
                 <Heart size={32} strokeWidth={1.5} />
              </div>
              <h3>Nutrición Clínica</h3>
              <p>Atención especializada para condiciones específicas como diabetes, hipertensión, problemas gastrointestinales, entre otros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Testimonios</span>
            <h2>Historias de Éxito</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#A3B18A" color="#A3B18A" />)}
              </div>
              <p className="testimonial-text">"Alejandra cambió por completo mi relación con la comida. Nunca me sentí a dieta, sino aprendiendo a nutrir mi cuerpo."</p>
              <div className="testimonial-author-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>M</div>
                <p className="testimonial-author" style={{ marginTop: 0 }}>María F.</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#A3B18A" color="#A3B18A" />)}
              </div>
              <p className="testimonial-text">"Excelente profesional. Logré mis objetivos de salud en 3 meses y sus planes son deliciosos y fáciles de seguir."</p>
              <div className="testimonial-author-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#5C715E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>C</div>
                <p className="testimonial-author" style={{ marginTop: 0 }}>Carlos G.</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#A3B18A" color="#A3B18A" />)}
              </div>
              <p className="testimonial-text">"Su enfoque empático hace toda la diferencia. Te escucha, te entiende y adapta todo a tu estilo de vida."</p>
              <div className="testimonial-author-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#d4a373', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>A</div>
                <p className="testimonial-author" style={{ marginTop: 0 }}>Ana Paula T.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="instagram-section section">
        <div className="container text-center">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '1.5rem' }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="insta-icon"
              style={{ margin: 0 }}
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="insta-icon"
              style={{ margin: 0 }}
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </div>
          <h2>Únete a la Comunidad</h2>
          <p>Sígueme en Instagram y Facebook para tips diarios, recetas y motivación.</p>
          <div className="insta-gallery">
            <div className="insta-item"><img src="/insta 1.jpg" alt="Instagram 1" /></div>
            <div className="insta-item"><img src="/insta 2.jpg" alt="Instagram 2" /></div>
            <div className="insta-item"><img src="/insta 3.jpg" alt="Instagram 3" /></div>
            <div className="insta-item"><img src="/insta 4.jpg" alt="Instagram 4" /></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <a href="https://www.instagram.com/alemarianutricion" target="_blank" rel="noreferrer" className="btn btn-outline insta-btn">
              Ver en Instagram
            </a>
            <a href="https://www.facebook.com/share/1BXxePn3QJ/" target="_blank" rel="noreferrer" className="btn btn-outline insta-btn">
              Ver en Facebook
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container cta-container text-center">
          <h2>¿Lista para comenzar tu transformación?</h2>
          <p>Agenda tu primera consulta y da el primer paso hacia una vida más saludable.</p>
          <Button to="/agendar" variant="primary" className="cta-btn">Agendar Ahora</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
