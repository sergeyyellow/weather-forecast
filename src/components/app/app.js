import './app.scss';

function App() {
  return (
    <div className="weather-container">
      <header className="header">
        <svg className="burger-menu" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">
          <path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" d="M2 12L22 12M2 6L22 6M2 18L22 18"/>
        </svg>

        <p className="city-name">Minsk</p>

        <svg className="search-icon" fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px">
          <path d="M21,3C11.6,3,4,10.6,4,20s7.6,17,17,17s17-7.6,17-17S30.4,3,21,3z M21,33c-7.2,0-13-5.8-13-13c0-7.2,5.8-13,13-13c7.2,0,13,5.8,13,13C34,27.2,28.2,33,21,33z"/>
          <path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="6" d="M31.2 31.2L44.5 44.5"/>
        </svg>
      </header>

      <div className="weather-data-container">
        <p className="degrees-text">8<span>°</span></p>
        <p className="weather-status">Облачно</p>
      </div>

      <div className="weather-for-days-container">
        <div class="today">
          <p className="text">Сегодня · <span>Дождь</span></p>
          <p className="degrees">8<span>°</span></p>
        </div>

        <div class="tomorrow">
          <p className="text">Завтра · <span>Облачно</span></p>
          <p className="degrees">1<span>°</span></p>
        </div>

        <div class="day-after-tomorrow">
          <p className="text">Послезавтра · <span>Облачно</span></p>
          <p className="degrees">3<span>°</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;
