import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { localize, navItems } from '../data/siteData';
import { useLocale } from '../contexts/LocaleContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const { locale, isZh, toggleLocale } = useLocale();

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
          type="button"
          className="menu-toggle"
          aria-label={isZh ? '切换导航菜单' : 'Toggle navigation menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>

        <nav id="primary-navigation" className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {localize(item.label, locale)}
            </NavLink>
          ))}
        </nav>

        <div className="nav-auth">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLocale}
            aria-label={isZh ? '切换到英文' : 'Switch to Chinese'}
            title={isZh ? 'Switch to English' : '切换到中文'}
          >
            {isZh ? 'EN' : '中文'}
          </button>
          <Link to="/auth/login" className="ghost-btn">
            {isZh ? '登录' : 'Login'}
          </Link>
          <Link to="/auth/register" className="solid-btn">
            {isZh ? '注册' : 'Sign Up'}
          </Link>
        </div>
      </div>
    </header>
  );
}
