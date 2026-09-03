import React from 'react';
import { Leaf } from 'lucide-react';
import Button from './Button';
import './Plans.css';

import { plans } from '../data/plansData';

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
                <p className="plan-price">{plan.price}</p>
                
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
                    to={`/plan/${plan.id}`} 
                    variant={plan.highlighted ? "primary" : "outline"}
                    className="comprar-btn"
                  >
                    Ver Plan
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
