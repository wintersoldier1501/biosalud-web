import React from 'react';
import { Leaf } from 'lucide-react';
import Button from './Button';
import './Plans.css';

const plans = [
  {
    id: 'basico',
    title: 'BÁSICO',
    subtitle: 'PLAN INDIVIDUAL',
    bgImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    features: [
      'Menú de apoyo y material',
      'Menú saludable y opciones de alimentos por 1 mes (sin personalización)',
      'Marcas recomendadas y sustitutos',
      'Todo sobre suplementos alimenticios'
    ]
  },
  {
    id: 'premium',
    title: 'PREMIUM',
    subtitle: 'PLAN INDIVIDUAL',
    bgImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    features: [
      'Menú personalizado de 1 mes',
      'Lista de súper y sustitutos conforme a presupuesto',
      'Cantidades personalizadas',
      'Material de nutrición y suplemento en primera fila'
    ],
    highlighted: true
  },
  {
    id: 'personal',
    title: 'PERSONAL',
    subtitle: 'PLAN INDIVIDUAL',
    bgImage: 'https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&q=80&w=800',
    features: [
      'Consulta por videollamada conmigo',
      'Ebook personalizado para ti',
      '4 menús para un mes',
      'Consulta mensual'
    ]
  }
];

const Plans = () => {
  return (
    <section id="planes" className="plans-section section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Empieza Hoy</span>
          <h2>Nuestros Planes</h2>
          <p className="section-desc">Selecciona el plan que mejor se adapte a tus metas y estilo de vida.</p>
        </div>
        
        <div className="plans-grid">
          {plans.map((plan) => (
            <div className={`plan-card ${plan.highlighted ? 'highlighted' : ''}`} key={plan.id}>
              {plan.highlighted && <div className="plan-badge">MÁS POPULAR</div>}
              <div 
                className="plan-image-header"
                style={{ backgroundImage: `url(${plan.bgImage})` }}
              >
                <div className="plan-image-overlay"></div>
                <h3 className="plan-title">{plan.title}</h3>
              </div>
              
              <div className="plan-content">
                <span className="plan-subtitle">{plan.subtitle}</span>
                
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <Leaf className="feature-icon" size={18} strokeWidth={2} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="plan-action">
                  <Button 
                    to="/agendar" 
                    variant={plan.highlighted ? "primary" : "outline"}
                    className="comprar-btn"
                  >
                    Elegir Plan
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
