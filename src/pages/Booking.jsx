import React, { useState } from 'react';
import Button from '../components/Button';
import './Booking.css';
import { Calendar as CalendarIcon, Clock, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

import emailjs from '@emailjs/browser';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', reason: '' });
  const [isSending, setIsSending] = useState(false);

  // Generate simple next 7 days for UI purposes
  const dates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  });

  const timeSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '03:00 PM', '04:30 PM'];

  const handleNext = async () => {
    if (step === 1 && selectedDate !== null && selectedTime) {
      setStep(2);
      return;
    }
    
    if (step === 2 && formData.name && formData.email) {
      setIsSending(true);
      try {
        const templateParams = {
          to_name: 'Dra. Alejandra',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'No especificado',
          reason: formData.reason || 'Consulta general',
          date: dates[selectedDate].toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }),
          time: selectedTime,
        };
        
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
        );
        
        setStep(3);
      } catch (error) {
        console.error('Error enviando el correo:', error);
        alert('Hubo un problema de conexión. Por favor, intenta de nuevo o comunícate directamente por teléfono.');
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <div className="booking-page animate-fade-in">
      <div className="booking-header">
        <div className="container text-center">
          <h1>Reserva tu Consulta</h1>
          <p>Selecciona el horario que mejor se adapte a ti.</p>
        </div>
      </div>

      <div className="container booking-container">
        <div className="booking-card">
          
          {/* Progress Indicator */}
          <div className="booking-steps">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Fecha y Hora</div>
            <div className={`step-divider ${step >= 2 ? 'active' : ''}`}></div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Tus Datos</div>
            <div className={`step-divider ${step >= 3 ? 'active' : ''}`}></div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Confirmación</div>
          </div>

          {/* Step 1: Date & Time */}
          {step === 1 && (
            <div className="step-content animate-fade-in">
              <div className="date-selector">
                <h3><CalendarIcon size={20} className="icon-inline" /> Selecciona un Día</h3>
                <div className="dates-grid">
                  {dates.map((d, i) => (
                    <div 
                      key={i} 
                      className={`date-card ${selectedDate === i ? 'selected' : ''}`}
                      onClick={() => setSelectedDate(i)}
                    >
                      <span className="date-day">{d.toLocaleDateString('es-ES', { weekday: 'short' })}</span>
                      <span className="date-num">{d.getDate()}</span>
                      <span className="date-month">{d.toLocaleDateString('es-ES', { month: 'short' })}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedDate !== null && (
                <div className="time-selector animate-fade-in">
                  <h3><Clock size={20} className="icon-inline" /> Horarios Disponibles</h3>
                  <div className="times-grid">
                    {timeSlots.map((time, i) => (
                      <div 
                        key={i} 
                        className={`time-card ${selectedTime === time ? 'selected' : ''}`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="step-actions">
                <Button 
                  onClick={handleNext} 
                  disabled={selectedDate === null || !selectedTime}
                  className="next-btn"
                >
                  Continuar <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: User Details */}
          {step === 2 && (
            <div className="step-content animate-fade-in">
              <h3>Ingresa tus datos</h3>
              <form className="booking-form" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div className="form-group">
                  <label>Nombre Completo</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ej. Ana Pérez"
                  />
                </div>
                <div className="form-group-row">
                  <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="ana@ejemplo.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Teléfono (Opcional)</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="55 1234 5678"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Motivo de la consulta (Opcional)</label>
                  <textarea 
                    rows="3" 
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    placeholder="Me gustaría mejorar mis hábitos..."
                  ></textarea>
                </div>
                <div className="step-actions-between">
                  <Button variant="outline" onClick={() => setStep(1)} disabled={isSending}>
                    <ChevronLeft size={18} /> Volver
                  </Button>
                  <Button type="submit" disabled={isSending}>
                    {isSending ? 'Enviando...' : 'Confirmar Reserva'}
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <div className="step-content success-content animate-fade-in text-center">
              <div className="success-icon-wrapper">
                <CheckCircle2 size={64} className="success-icon" />
              </div>
              <h2>¡Solicitud Recibida!</h2>
              <p>Hola {formData.name}, hemos registrado tu solicitud para el día <strong>{dates[selectedDate].toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}</strong> a las <strong>{selectedTime}</strong>.</p>
              <p className="success-subtext">Nos pondremos en contacto contigo pronto para confirmar la cita.</p>
              <div className="mt-4">
                <Button to="/">Volver al Inicio</Button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Booking;
