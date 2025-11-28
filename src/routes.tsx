import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Category';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
    visible: false
  },
  {
    name: 'Shop',
    path: '/shop',
    element: <Shop />
  },
  {
    name: 'Product Detail',
    path: '/product/:slug',
    element: <ProductDetail />,
    visible: false
  },
  {
    name: 'Category',
    path: '/category/:slug',
    element: <Category />,
    visible: false
  },
  {
    name: 'Blog',
    path: '/blog',
    element: <Blog />
  },
  {
    name: 'FAQ',
    path: '/faq',
    element: <FAQ />
  },
  {
    name: 'About',
    path: '/about',
    element: <About />
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <Contact />
  }
];

export default routes;
