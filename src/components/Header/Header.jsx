import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-poupanca-verde.png'; // Importa o logo
import './Header.css'; // Criaremos este arquivo de estilo

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Poupança Verde Logo" /></Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

