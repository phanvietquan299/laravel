import React from "react";

const Header = ({ onLogout }) => (
  <header style={{ width: '100%', background: '#fff', boxShadow: '0 2px 8px #eee', padding: '16px 0', position: 'fixed', top: 0, left: 0, zIndex: 10 }}>
    <nav style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
      <div style={{ fontWeight: 700, fontSize: 24, color: '#7494ec' }}>MyApp</div>
      <ul style={{ display: 'flex', gap: 24, listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: 500 }}>Home</a></li>
        <li><a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: 500 }}>About</a></li>
        <li><a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: 500 }}>Contact</a></li>
      </ul>
      <button onClick={onLogout} style={{ background: '#7494ec', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 600, cursor: 'pointer' }}>Logout</button>
    </nav>
  </header>
);

export default Header;
