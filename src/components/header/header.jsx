import { useState } from 'react';

import CitySelectionPopup from '../city-selection-popup/city-selection-popup.jsx';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = ({ name, updateIdSelectedCity }) => {
    // Declaring a state variable responsible for displaying a pop-up
    const [modalActive, setModalActive] = useState(false);
    const [moreDetailsActive, setMoreDetailsActive] = useState(false);

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
                    <path fill="none"
                        stroke="#fff"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M2 12L22 12M2 6L22 6M2 18L22 18" />
                </svg>

                <p className="city-name">{name}</p>

                <div className="more-details-block"
                    onClick={() => { moreDetailsActive ? setMoreDetailsActive(false) : setMoreDetailsActive(true) }}>
                    <svg className="dot-menu"
                        version="1.1"
                        viewBox="0 0 32 32"
                        width="30px"
                        height="25px"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z" />
                        <path d="M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z" />
                        <path d="M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z" />
                    </svg>

                    <Link to="/more-details" className={`more-details ${moreDetailsActive ? 'show' : ''}`}>More details...</Link>
                </div>

                <CitySelectionPopup active={modalActive} setActive={setModalActive} updateIdSelectedCity={updateIdSelectedCity} />
            </header>
        </>
    );
}

export default Header;