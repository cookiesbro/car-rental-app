import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/shared/lib/context/useAuth';
import { useCart } from '@/shared/lib/context/useCart';
import { SearchBar } from '@/features/car-search';
import { CartToggleButton } from '@/features/cart-toggle'; 
import { FaBars, FaTimes } from 'react-icons/fa';

// `onCartClick` приходит из props от App.jsx
const Header = ({ onCartClick }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const { cart } = useCart();
  const itemsCount = cart.items.length;
  const location = useLocation();
  // "Мозг" и состояние для бургер меню теперь живут ЗДЕСЬ
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  

  // Логика для анимированной "таблетки"
  const [activeLinkStyle, setActiveLinkStyle] = useState({});
  const navLinksRef = useRef([]);

  useEffect(() => {
    const activeLink = navLinksRef.current.find(link => link?.pathname === location.pathname);
    if (activeLink) {
      setActiveLinkStyle({
        width: `${activeLink.offsetWidth}px`,
        height: `${activeLink.offsetHeight}px`,
        left: `${activeLink.offsetLeft}px`,
      });
    } else {
      setActiveLinkStyle({ width: 0, height: '100%' });
    }
  }, [location]);

  return (
    <>
      <header className="app-header">
        <div className="header-logo">RENT</div>
        <nav className="header-nav">
          <div className="nav-background" style={activeLinkStyle} />
          <Link to="/" ref={el => navLinksRef.current[0] = el} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/catalog" ref={el => navLinksRef.current[1] = el} className={location.pathname === '/catalog' ? 'active' : ''}>Model</Link>
        </nav>

        {/* 👇 ВОТ ОНА, НЕДОСТАЮЩАЯ КНОПКА! 👇 */}
        <button className="burger-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="header-actions">
          <SearchBar />
          <CartToggleButton onClick={onCartClick} itemsCount={itemsCount} />
          
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="user-greeting">Hi, {user.name}</Link>
              <button onClick={logout} className="btn-logout">Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary">Sign Up</Link>
          )}
        </div>
      </header>
        {/* "Тело" (панель меню) теперь тоже ЗДЕСЬ */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <SearchBar />
          <Link to="/">Home</Link>
          <Link to="/catalog">Model</Link>
          <hr />
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="user-greeting">Hi, {user.name}</Link>
              <button onClick={logout} className="btn-logout">Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary">Sign Up</Link>
          )}
      </nav>
    </>
  );
};

export default Header;