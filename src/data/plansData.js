export const plans = [
  {
    id: 'basico',
    title: 'BÁSICO',
    subtitle: 'PLAN INDIVIDUAL',
    price: '$800 MXN',
    bgImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    pdfPreview: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800',
    features: [
      'Menú de apoyo y material',
      'Menú saludable y opciones de alimentos por 1 mes (sin personalización)',
      'Marcas recomendadas y sustitutos',
      'Todo sobre suplementos alimenticios'
    ],
    checkoutUrl: '#' // Aquí irá el link de Stripe
  },
  {
    id: 'premium',
    title: 'PREMIUM',
    subtitle: 'PLAN INDIVIDUAL',
    price: '$1,200 MXN',
    bgImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    pdfPreview: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    features: [
      'Menú personalizado de 1 mes',
      'Lista de súper y sustitutos conforme a presupuesto',
      'Cantidades personalizadas',
      'Material de nutrición y suplemento en primera fila'
    ],
    highlighted: true,
    checkoutUrl: '#'
  },
  {
    id: 'personal',
    title: 'PERSONAL',
    subtitle: 'PLAN INDIVIDUAL',
    price: '$1,500 MXN',
    bgImage: 'https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&q=80&w=800',
    pdfPreview: 'https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&q=80&w=800',
    features: [
      'Consulta por videollamada conmigo',
      'Ebook personalizado para ti',
      '4 menús para un mes',
      'Consulta mensual'
    ],
    checkoutUrl: '#'
  }
];
