import { Component } from 'react';

import { gettingHourlyForecastData } from '../../data-for-api';

import { Chart } from 'chart.js';
import { Line } from 'react-chartjs-2';

import './hourly-weather-forecast.scss';

class HourlyWeatherForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idSelectedCity: this.props.idSelectedCity,
            temp: [],
            dt: []
        }
    }

    updateData = (temp1, dt1) => {
        this.setState({
            temp: temp1,
            dt: dt1
        });
    }

    componentDidMount() {
        gettingHourlyForecastData(this.state.idSelectedCity, this.updateData);
    }

    render() {
        Chart.defaults.color = "#fff";

        return (
            <div className="hourly-weather-forecast-container">
                <Line
                    data={{
                        labels: this.state.dt,
                        datasets: [{
                            label: 'Degrees',
                            data: this.state.temp,
                            backgroundColor: '#fff',
                            borderColor: '#fff',
                            borderWidth: 2,
                        }],
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            },
                            maintainAspectRatio: false
                        }
                    }}
                    width={500}
                    height={250} />
            </div>
        );
    }
}

export default HourlyWeatherForecast;