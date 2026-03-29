import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './GlassNavbar.scss';

function GlassNavbar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="glass-navbar">
      <div className="glass-navbar-content">
        <Link 
          to="/" 
          className={`glass-nav-link ${isActive('/') ? 'active' : ''}`}
        >
          home
        </Link>
        <Link 
          to="/portfolio" 
          className={`glass-nav-link ${isActive('/portfolio') ? 'active' : ''}`}
        >
          portfolio
        </Link>
        <Link 
          to="/blog" 
          className={`glass-nav-link ${isActive('/blog') ? 'active' : ''}`}
        >
          blog
        </Link>
      </div>
    </nav>
  );
}

export default GlassNavbar;

