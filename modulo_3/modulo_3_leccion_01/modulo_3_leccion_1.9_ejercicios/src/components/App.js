import '../styles/App.scss';

function App() {
  return ( 
  <><header className="header">
    <div className="header__box">
      <nav>
        <a title="Menú" href="https://adalab.es/" target="_blank"
        ><img
            src="./assets/images/ico-menu.svg"
            alt="menu-burguer"
            className="header__item" /></a>
      </nav>
    </div>
  </header><main>

      <section className="hero" id="call2">
        <div className="hero__container">
          <div className="hero__container--cover">
            <div className="wrapper">
              <h1 className="hero__container--title1">Anonymous proxy</h1>
              <h2 className="hero__container--title2">
                In hac habitasse platea dictumst.
              </h2>
              <a href="#call1"
              ><button className="hero__container--button">
                  <img
                    src="./assets/images/ico-scroll-down.svg"
                    alt="scrolldown"
                    className="hero__container--button__scroll" /></button></a>
            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <h2>Anonymous proxy</h2>
        <p><a href="https://adalab.es/" className="section__text">02/08/2021</a></p>
      </section>


      <section className="tips">
        <div className="wrapper">
          <h2 className="tips__small">Insomnia tips</h2>
          <h3 className="tips__title">Looking through a window</h3>
          <p className="tips__text">
            Donec accumsan, nulla ut volupat porttitor, quam odio tempus felis, at
            luctus ex diam nec lectus. Vivamus semper sodales rutrum.
          </p>
          <button className="tips__button">Go</button>
        </div>
      </section>



      <section className="reasons" id="call1">
        <div className="wrapper">
          <div className="reasons__title">
            <h3 className="reasons__title--text">3 reasons to purchase</h3>
          </div>

          <div className="wrapper2">
            <div className="items">
              <article className="items__item1">
                <h4 className="items__item1--title">Ut sed metus</h4>
                <p className="items__item1--text">
                  Lorem ipsum dolor sit amet, consecteur.
                </p>
              </article>

              <article className="items__item2">
                <h4 className="items__item2--title">Curabitur ac erat</h4>
                <p className="items__item2--text">
                  Mauris mattis urna quis lorem molestie.
                </p>
              </article>

              <article className="items__item3">
                <h4 className="items__item3--title">Morbi dictum.</h4>
                <p className="items__item3--text">Aliquam in dolor et dolor tincidunt.</p>
              </article>
            </div>
            <div className="reasons__button">
              <button className="reasons__button--text">More reasons</button>
            </div>
          </div>
        </div>
      </section>
    </main><footer className="footer">
      <div className="wrapper2">
        <div className="footer__button">
          <a href="#call2">
            <button className="footer__button--arrow">
              <img src="./assets/images/ico-arrow.svg" alt="arrow" /></button></a>
        </div>

        <div className="footer__container">
          <nav className="footer__container--nav1">
            <ul>
              <li>
                <a href="https://adalab.es/" target="_blank" className="footer__container--nav1__item">articles</a>
              </li>
              <li>
                <a href="https://adalab.es/" target="_blank" className="footer__container--nav1__item">books</a>
              </li>
              <li>
                <a href="https://adalab.es/" target="_blank" className="footer__container--nav1__item">events</a>
              </li>
              <li>
                <a href="https://adalab.es/" target="_blank" className="footer__container--nav1__item">reasons</a>
              </li>
              <li>
                <a href="https://adalab.es/" target="_blank" className="footer__container--nav1__item">tips</a>
              </li>
            </ul>
          </nav>

          <nav className="footer__container--nav2">
            <ul className="footer__container--nav2__list">
              <li>
                <a href="https://adalab.es/" target="_blank" className="footer__container--nav2__item">twitter</a>
              </li>
              <li>
                <a href="https://adalab.es/" target="_blank" className="footer__container--nav2__item">instagram</a>
              </li>
              <li>
                <a href="https://adalab.es/" target="_blank" className="footer__container--nav2__item">
                  mastodon.social</a>
              </li>
            </ul>
          </nav>

          <div className="footer__container--copy">
            <ul className="footer__container--copy__list">
              <li className="footer__container--copy__list--item">&copy;2021</li>
              <li className="footer__container--copy__list--item">
                we <i className="fas fa-heart"> </i> components
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer></>
  );
}

export default App;
