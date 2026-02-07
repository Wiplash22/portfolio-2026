import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      ...styles.header,
      backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.9)' : 'transparent',
      boxShadow: scrolled ? '0 4px 30px rgba(0, 243, 255, 0.1)' : 'none',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
    }}>
      <div className="container" style={styles.container}>
        <div style={styles.logo}>
          Antony<span style={{ color: 'var(--primary-color)' }}>.dev</span>
        </div>
        <nav>
          <ul style={styles.navList}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} style={styles.navLink}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '1.5rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#fff',
    letterSpacing: '1px',
    textShadow: '0 0 10px rgba(0, 243, 255, 0.5)',
  },
  navList: {
    display: 'flex',
    gap: '2.5rem',
    listStyle: 'none',
  },
  navLink: {
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
    transition: 'color 0.3s ease',
  },
};

export default Header;
