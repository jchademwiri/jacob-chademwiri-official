import { Code, Search, ShoppingCart, Globe } from 'lucide-react';

export const webServices = [
  {
    title: 'Next.js & React Development',
    description:
      'Modern, fast, and scalable web applications built with cutting-edge technologies.',
    icon: Code,
    features: [
      'Server-side rendering (SSR)',
      'Static site generation (SSG)',
      'API development and integration',
      'Performance optimization',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'WordPress Solutions',
    description:
      'Custom WordPress websites and applications with modern design and functionality.',
    icon: Globe,
    features: [
      'Custom theme development',
      'Plugin development and customization',
      'WooCommerce integration',
      'Performance optimization',
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'WooCommerce'],
  },
  {
    title: 'E-commerce Development',
    description:
      'Complete e-commerce solutions that drive sales and provide excellent user experience.',
    icon: ShoppingCart,
    features: [
      'Online store development',
      'Payment gateway integration',
      'Inventory management systems',
      'Order processing automation',
    ],
    technologies: ['WooCommerce', 'Shopify', 'Stripe', 'PayPal'],
  },
  {
    title: 'SEO & Performance',
    description:
      'Comprehensive optimization for search engines and superior website performance.',
    icon: Search,
    features: [
      'Technical SEO optimization',
      'Core Web Vitals improvement',
      'Site speed optimization',
      'Mobile responsiveness',
    ],
    technologies: [
      'Google Analytics',
      'Search Console',
      'PageSpeed',
      'Lighthouse',
    ],
  },
];
