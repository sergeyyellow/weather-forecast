import { Component } from 'react';
// import CitySelectionPopup from '../city-selection-popup/city-selection-popup.jsx';

import './header.scss';

class Header extends Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     function showCitySelectionPopup() {
    //         const root = document.querySelector('#root');
    //         root.append(<CitySelectionPopup />);
    //     }

    //     const cross = document.querySelector('#burger-menu');
    //     cross.addEventListener('click', showCitySelectionPopup);
    // }

    render() {
        return (
            <header className="header">
                <svg id="burger-menu" className="burger-menu" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                    <path fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" d="M2 12L22 12M2 6L22 6M2 18L22 18" />
                </svg>

                <p className="city-name">{this.props.name}</p>

                <svg className="search-icon" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100px" height="100px">
                    <path d="M21,3C11.6,3,4,10.6,4,20s7.6,17,17,17s17-7.6,17-17S30.4,3,21,3z M21,33c-7.2,0-13-5.8-13-13c0-7.2,5.8-13,13-13c7.2,0,13,5.8,13,13C34,27.2,28.2,33,21,33z" />
                    <path fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="6" d="M31.2 31.2L44.5 44.5" />
                </svg>
            </header>
        );
    }
}

export default Header;