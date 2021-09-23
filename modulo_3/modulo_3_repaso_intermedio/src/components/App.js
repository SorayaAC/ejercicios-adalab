import '../styles/App.scss';
import data from './data.json';
import {useState} from 'react';

function App() {
const [people, setPeople] = useState(data);
const [nameSearch, setNameSearch] = useState('');
  const handleSearch = (ev) => {
  setNameSearch (ev.target.value);
  console.log(nameSearch);
  }
  const renderData = () => {
    console.log(people);
    return people.map((person=>{ return <li className="contact__item">
    <p className="contact__name">
      <label className="contact__label">Nombre:</label>
      <span> {` ${person.name} ${person.lastname}`} </span>
    </p>
    <p className="contact__phone">
      <label className="contact__label">Teléfono:{person.phone}</label>
      <a href="tel:603256289" title="Pulsa aquí para llamar a Lola">
        
      </a>
    </p>
    <p className="contact__mail">
      <label className="contact__label">Email:{person.email}</label>
      <a href="mailto:lmartinez@adalab.es" title="Pulsa aquí para escribir a Lola">
        
      </a>
    </p>
  </li>}))
   

  }
  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            onChange ={handleSearch}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">
         {renderData()} 
          {/* <li className="contact__item">
            <p className="contact__name">
              <label className="contact__label">Nombre:</label>
            </p>
            <p className="contact__phone">
              <label className="contact__label">Teléfono:</label>
              <a href="tel:603256289" title="Pulsa aquí para llamar a Lola">
                
              </a>
            </p>
            <p className="contact__mail">
              <label className="contact__label">Email:</label>
              <a href="mailto:lmartinez@adalab.es" title="Pulsa aquí para escribir a Lola">
                
              </a>
            </p>
          </li> */}
        </ul>

        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input className="new-contact__btn" type="submit" value="Añadir" />
        </form>
      </main>
    </div>
  );
}

export default App;
