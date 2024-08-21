import React, { useState } from 'react';
import './App.css';
import PipelineSection from './components/PipelineSection.jsx';
import menuIcon from './assets/images/bola.png'; 

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <div 
        className="menu-trigger"
        onMouseEnter={toggleMenu}
        onMouseLeave={toggleMenu}
      >
        <img src={menuIcon} alt="Menu" className="menu-icon" />
        {menuOpen && (
          <div className="menu">
            <ul>
              <li><a href="#intro">Introdução</a></li>
              <li><a href="#pipeline">O que é Pipeline</a></li>
              <li><a href="#cache">Cache</a></li>
            </ul>
          </div>
        )}
      </div>
      <PipelineSection />
    </div>
  );
}

export default App;
