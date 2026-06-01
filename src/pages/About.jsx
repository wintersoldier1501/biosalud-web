import React from 'react';
import Button from '../components/Button';
import { Award, BookOpen, Heart } from 'lucide-react';
import './Pages.css';

const About = () => {
  return (
    <div className="page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Conoce a la Dra. Alejandra</h1>
          <p>Tu aliada en el camino hacia una vida más plena, saludable y consciente.</p>
        </div>
      </div>

      <div className="container page-container">
        <div className="content-card">
          <div className="split-content">
            <div className="split-image-container">
              <img 
                src="/doc 1.jpg" 
                alt="Dra. Alejandra" 
                className="split-image"
              />
            </div>
            <div className="split-text">
              <h2>Mi Filosofía</h2>
              <p>
                Durante años he visto cómo las dietas restrictivas dañan la relación que tenemos con nuestro cuerpo y nuestra comida. Mi objetivo principal como profesional de la salud es enseñarte a nutrirte desde el amor y el respeto.
              </p>
              <p>
                Creo firmemente en que no existen alimentos prohibidos, sino porciones y equilibrios adecuados. Mi enfoque no se centra en la báscula, sino en cómo te sientes: tus niveles de energía, tu digestión, tu calidad de sueño y tu bienestar emocional.
              </p>
              <p>
                Cada paciente es un universo distinto, por eso no utilizo moldes genéricos. Juntos construiremos hábitos sostenibles que podrás mantener toda la vida.
              </p>
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-box">
              <Award className="feature-box-icon" size={32} />
              <h3>Licenciada en Nutrición</h3>
              <p>Graduada con honores. Especializada en crear planes de alimentación realistas y efectivos adaptados al estilo de vida moderno.</p>
            </div>
            <div className="feature-box">
              <BookOpen className="feature-box-icon" size={32} />
              <h3>Educación Continua</h3>
              <p>Actualización constante en nutrición clínica, salud hormonal y digestiva para ofrecerte los tratamientos más vanguardistas.</p>
            </div>
            <div className="feature-box">
              <Heart className="feature-box-icon" size={32} />
              <h3>Enfoque Empático</h3>
              <p>Consulta libre de prejuicios. Mi consultorio es un espacio seguro donde escucho tus necesidades y metas reales.</p>
            </div>
          </div>

          <div className="about-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '60px' }}>
            <img src="/doc 2.jpg" alt="Estilo de vida saludable" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            <img src="/doc 3.jpg" alt="Nutrición integral" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>

          <div className="page-cta">
            <h3>¿Lista para comenzar tu transformación?</h3>
            <Button to="/agendar" variant="primary">Agendar mi Consulta</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
