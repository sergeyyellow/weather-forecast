// Import data for API access
import { citiesId } from '../../data-for-api';

import './city-selection-popup.scss';

const CitySelectionPopup = ({ active, setActive, updateIdSelectedCity }) => {
    return (
        <div className={`city-selection-popup ${active ? 'show' : ''}`}
            onClick={() => setActive(false)}>
            <svg className="cross-img" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>

            <ul className="list-of-cities">
                <li onClick={() => updateIdSelectedCity(citiesId.idMinsk)}>Minsk</li>
                <li onClick={() => updateIdSelectedCity(citiesId.idMoscow)}>Moscow</li>
                <li onClick={() => updateIdSelectedCity(citiesId.idBratislava)}>Bratislava</li>
            </ul>
        </div>
    );
}

export default CitySelectionPopup;