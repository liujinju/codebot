import { useEffect, useRef, useState } from 'react';
import { navItems } from '../data/siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

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
        <a className="logo" href="#hero" aria-label="Embodied Intelligence Home">
          EI<span>•OS</span>
        </a>

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
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-auth">
          <a href="#" className="ghost-btn">
            登录
          </a>
          <a href="#" className="solid-btn">
            注册
          </a>
        </div>
      </div>
    </header>
  );
}
