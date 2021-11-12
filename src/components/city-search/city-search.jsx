import './city-search.scss';

const CitySearch = () => {
    return (
        <div className="city-search-block">
            <svg className="search-icon"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="100px"
                height="100px">
                <title>Find</title>
                <path d="M21,3C11.6,3,4,10.6,4,20s7.6,17,17,17s17-7.6,17-17S30.4,3,21,3z M21,33c-7.2,0-13-5.8-13-13c0-7.2,5.8-13,13-13c7.2,0,13,5.8,13,13C34,27.2,28.2,33,21,33z" />
                <path fill="#ffffff"
                    stroke="#ffffff"
                    strokeMiterlimit="10"
                    strokeWidth="6"
                    d="M31.2 31.2L44.5 44.5" />
            </svg>

            <input className="city-search-input"
                type="text"
                placeholder="Enter the name of the city..." />
        </div>
    );
};

export default CitySearch;