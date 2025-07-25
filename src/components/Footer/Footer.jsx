import React from 'react';
import logo from '../../assets/logo-poupanca-verde.png'; // Reutiliza a importação
import './Footer.css'; // Criaremos este arquivo

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Poupança Verde Logo" />
        </div>
        <p>&copy; 2024 Poupança Verde. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

