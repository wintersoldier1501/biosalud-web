import React from 'react';
import Button from '../components/Button';
import { Target, Activity, Apple, CheckCircle2 } from 'lucide-react';
import './Pages.css';

const Methodology = () => {
  return (
    <div className="page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Mi Método de Trabajo</h1>
          <p>Un enfoque científico, personalizado y humano para alcanzar tus metas de salud.</p>
        </div>
      </div>

      <div className="container page-container">
        <div className="content-card">
          <div className="split-content" style={{ direction: 'rtl' }}>
            <div className="split-image-container">
              <img 
                src="/doc 4.jpg" 
                alt="Consulta de Nutrición" 
                className="split-image"
              />
            </div>
            <div className="split-text" style={{ direction: 'ltr' }}>
              <h2>No más dietas de moda</h2>
              <p>
                Mi método se basa en la nutrición basada en evidencia. No te daré "la dieta de la luna" ni te haré pasar hambre. Mi objetivo es enseñarte a comer rico, sano y suficiente.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <CheckCircle2 color="var(--color-primary)" size={20} />
                  <span>Sin alimentos prohibidos o restrictivos.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <CheckCircle2 color="var(--color-primary)" size={20} />
                  <span>Planes adaptados a tu presupuesto y gustos.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <CheckCircle2 color="var(--color-primary)" size={20} />
                  <span>Basado en tus exámenes de laboratorio clínicos.</span>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px', marginBottom: '30px' }}>
            <h2>El Paso a Paso</h2>
            <p>Así es como trabajaremos juntos desde tu primera consulta:</p>
          </div>

          <div className="feature-grid">
            <div className="feature-box">
              <Target className="feature-box-icon" size={32} />
              <h3>1. Evaluación Inicial</h3>
              <p>Comenzamos con una entrevista profunda sobre tu historial médico, estilo de vida, gustos, alergias y metas. Hacemos un análisis de composición corporal preciso.</p>
            </div>
            <div className="feature-box">
              <Apple className="feature-box-icon" size={32} />
              <h3>2. Plan Personalizado</h3>
              <p>Diseño un menú exclusivo para ti. Incluye lista del supermercado, recomendaciones de marcas exactas e ideas de preparación fáciles y rápidas.</p>
            </div>
            <div className="feature-box">
              <Activity className="feature-box-icon" size={32} />
              <h3>3. Seguimiento</h3>
              <p>Monitoreamos tu progreso cada mes. Ajustamos macros, cambiamos recetas y te proporciono apoyo constante por WhatsApp para resolver dudas.</p>
            </div>
          </div>

          <div className="page-cta">
            <h3>Agenda tu consulta hoy y transforma tu estilo de vida</h3>
            <Button to="/agendar" variant="primary">Agendar Consulta</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
