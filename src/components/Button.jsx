import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, onClick, className = '', type = 'button' }) => {
  const baseClass = `btn btn-${variant} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
};

export default Button;
