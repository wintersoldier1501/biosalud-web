import React from 'react';
import { InlineWidget } from 'react-calendly';
import './Booking.css';

const Booking = () => {
  return (
    <div className="booking-page animate-fade-in">
      <div className="booking-header">
        <div className="container text-center">
          <h1>Reserva tu Consulta</h1>
          <p>Elige el día y la hora que mejor se adapten a ti.</p>
        </div>
      </div>

      <div className="container booking-container">
        <div className="booking-card calendly-wrapper">
          <InlineWidget 
            url="https://calendly.com/acmesales" 
            styles={{ height: '700px', width: '100%', minWidth: '320px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
