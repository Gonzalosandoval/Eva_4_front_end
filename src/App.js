import React, { useState } from 'react';
import Home from './Componentes/Home';
import QuienesSomos from './Componentes/Quienessomos';
import Contactenos from './Componentes/Contactenos';
import Otras from './Componentes/Otras';
import './App.css';

const App = () => {
  // Agregamos el estado para controlar la sección visible
  const [currentSection, setCurrentSection] = useState('Home');

  // Función para cambiar la sección visible
  const changeSection = (sectionId) => {
    setCurrentSection(sectionId);
  };

  return (
    <div>
      <header>
        <h1>Viaja con Nosotros</h1>
        <nav>
          <ul>
            {/* Cambiamos los enlaces para llamar a la función changeSection */}
            <li><a href="#Home" onClick={() => changeSection('Home')}>Home</a></li>
            <li><a href="#Quienes-Somos" onClick={() => changeSection('Quienes-Somos')}>Quienes somos</a></li>
            <li><a href="#Contactenos" onClick={() => changeSection('Contactenos')}>Contacto</a></li>
            <li><a href="#otras" onClick={() => changeSection('otras')}>Api</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Usamos el estado currentSection para mostrar u ocultar las secciones */}
        <section id="Home" style={{ display: currentSection === 'Home' ? 'block' : 'none' }}>
          <Home />
        </section>
        <section id="Quienes-Somos" style={{ display: currentSection === 'Quienes-Somos' ? 'block' : 'none' }}>
          <QuienesSomos />
        </section>
        <section id="Contactenos" style={{ display: currentSection === 'Contactenos' ? 'block' : 'none' }}>
          <Contactenos />
        </section>
        <section id="otras" style={{ display: currentSection === 'otras' ? 'block' : 'none' }}>
          <Otras />
        </section>
      </main>

      <footer>
        <p>@ todos los derechos reservados en la reserva reservada</p>
      </footer>
    </div>
  );
};

export default App;