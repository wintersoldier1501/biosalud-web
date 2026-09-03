import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Lock, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { plans } from '../data/plansData';
import Button from '../components/Button';
import './PlanDetail.css';

const PlanDetail = () => {
  const { id } = useParams();
  const plan = plans.find(p => p.id === id);

  // Desplazar hacia arriba al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!plan) {
    return (
      <div className="plan-detail-error container">
        <h2>Plan no encontrado</h2>
        <Link to="/" className="back-link">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="plan-detail-page animate-fade-in">
      <div className="container plan-detail-container">
        
        <Link to="/#planes" className="back-link">
          <ArrowLeft size={20} />
          <span>Volver a Planes</span>
        </Link>

        <div className="plan-detail-grid">
          
          {/* Vista previa del PDF (Lado izquierdo) */}
          <div className="pdf-preview-section">
            <div className="pdf-preview-wrapper">
              <img src={plan.pdfPreview} alt="Vista previa del PDF" className="pdf-image blurred" />
              <div className="lock-overlay">
                <div className="lock-icon-container">
                  <Lock size={48} strokeWidth={2} />
                </div>
                <h3>Contenido Bloqueado</h3>
                <p>Adquiere el plan para desbloquear la descarga inmediata</p>
              </div>
            </div>
          </div>

          {/* Detalles del Plan (Lado derecho) */}
          <div className="plan-info-section">
            <span className="plan-subtitle">{plan.subtitle}</span>
            <h1 className="plan-title">{plan.title}</h1>
            <p className="plan-price">{plan.price}</p>

            <div className="plan-description">
              <h3>¿Qué incluye?</h3>
              <ul className="plan-features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={24} className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="checkout-action">
              <Button href={plan.checkoutUrl} variant="primary" className="buy-btn">
                Comprar Ahora - {plan.price}
              </Button>
              <p className="secure-checkout">🔒 Pago seguro procesado por Stripe</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlanDetail;
