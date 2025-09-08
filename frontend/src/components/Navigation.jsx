import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'home' },
    { path: '/about', label: 'about' },
    { path: '/PrivacyPolicy', label: 'privacy policy' },
    { path: '/contact', label: 'contact' },
    { path: '/choose-layout', label: 'choose layout' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">photobooth</Link>
      </div>
      <div className="nav-menu">
        {navItems.map(item => (
          <Link 
            key={item.path}
            to={item.path} 
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="nav-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21Z"/>
        </svg>
      </div>
    </nav>
  );
}
