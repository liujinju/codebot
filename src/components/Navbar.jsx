import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../data/siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    const onOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onEscape);
    document.addEventListener('mousedown', onOutsideClick);

    return () => {
      document.removeEventListener('keydown', onEscape);
      document.removeEventListener('mousedown', onOutsideClick);
    };
  }, []);

  return (
    // Sticky top navigation with desktop and mobile menu states.
    <header className="top-nav" ref={menuRef}>
      <div className="nav-inner">
        <Link className="logo" to="/" aria-label="Embodied Intelligence Home">
          EI<span>•OS</span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>

        <nav id="primary-navigation" className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-auth">
          <Link to="/auth/login" className="ghost-btn">
            登录
          </Link>
          <Link to="/auth/register" className="solid-btn">
            注册
          </Link>
        </div>
      </div>
    </header>
  );
}
