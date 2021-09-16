import '../styles/App.scss';
import logo from '../images/logo-adalab.png';

function App() {
  return (
    <><header className="header">
      <a href="https://adalab.es/">
        <img
          className="image"
          src={logo}
          alt=" Logo  Adalab" /></a>

      <nav>
        <ul className="menu-list">
          <li><a href="https://adalab.es/blog/" className="menu-link">Blog </a></li>
          <li><a href="https://adalab.es/contacto/" className="menu-link">Contacto</a></li>
        </ul>
      </nav>
    </header><main className="main">
        <h1 className="title"> Creando diversidad digital</h1>
      </main></>
  );
}

export default App;
