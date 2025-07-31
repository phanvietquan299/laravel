import React from "react";

const Navbar = () => (
  <nav style={{ width: '100%', background: '#fff', borderBottom: '1px solid #eee', padding: '12px 0', marginTop: 64 }}>
    <ul style={{ display: 'flex', justifyContent: 'center', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
      <li><a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: 500 }}>Trang chủ</a></li>
      <li><a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: 500 }}>Dịch vụ</a></li>
      <li><a href="#" style={{ color: '#333', textDecoration: 'none', fontWeight: 500 }}>Liên hệ</a></li>
    </ul>
  </nav>
);

export default Navbar;
