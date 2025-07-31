

import React, { useState } from "react";
import Home from "./components/Home/Home";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState('login'); // luôn khởi tạo là 'login'

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setPage('home');
  };

  return (
    <>
      {isLoggedIn && page === 'home' ? (
        <div className="home-bg">
          <Header onLogout={() => { setIsLoggedIn(false); setPage('login'); }} />
          <Navbar />
          <div style={{ paddingTop: 120, paddingBottom: 64 }}>
            <Home />
          </div>
          <Footer />
        </div>
      ) : (
        <>
          {isLoggedIn && <Header onLogout={() => { setIsLoggedIn(false); setPage('login'); }} />}
          {isLoggedIn && <Navbar />}
          {isLoggedIn && <Footer />}
          {!isLoggedIn && <LoginSignup onLogin={handleLoginSuccess} />}
        </>
      )}
    </>
  );
}

export default App;
