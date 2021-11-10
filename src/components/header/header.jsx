import { useState } from 'react';

import CitySelectionPopup from '../city-selection-popup/city-selection-popup.jsx';

import './header.scss';

const Header = ({ name, updateIdSelectedCity }) => {
    // Declaring a state variable responsible for displaying a pop-up
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <header className="header">
                <svg id="burger-menu"
                    className="burger-menu"
                    onClick={() => setModalActive(true)}
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30px"
                    height="30px">
                    <path fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" d="M2 12L22 12M2 6L22 6M2 18L22 18" />
                </svg>

                <p className="city-name">{name}</p>

                <svg className="search-icon" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100px" height="100px">
                    <path d="M21,3C11.6,3,4,10.6,4,20s7.6,17,17,17s17-7.6,17-17S30.4,3,21,3z M21,33c-7.2,0-13-5.8-13-13c0-7.2,5.8-13,13-13c7.2,0,13,5.8,13,13C34,27.2,28.2,33,21,33z" />
                    <path fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="6" d="M31.2 31.2L44.5 44.5" />
                </svg>
            </header>

            <CitySelectionPopup active={modalActive} setActive={setModalActive} updateIdSelectedCity={updateIdSelectedCity} />
        </>
    );
}

export default Header;