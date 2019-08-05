/* eslint-disable no-undef */
import React, { Component } from "react";
import Axios from "axios";
import { Button, Spinner, Badge } from 'reactstrap';
import Header from "./Header";
import ForecastList from "./ForecastList";


const [Warszawa, Kiskunmajsa, Budapest] = [756135, 3049875, 3054643];

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: null,
      forecast: null,
      error: null,
      isLoaded: false,
      cityName: null,
      curCity: 756135
    };
  }

  componentDidMount() {
    const {curCity} = this.state
    this.downloadWeather(curCity);
    this.setState({ cityName: "Warszawa" });
  }

  checkWeatherByCoord = () => {
    this.setState({ isLoaded: false });
    let lat;
    let lon;
    window.navigator.geolocation.getCurrentPosition(
      position => {
        lon = parseFloat(position.coords.longitude).toFixed(2);
        lat = parseFloat(position.coords.latitude).toFixed(2);
        Axios(`https://flafi.me:2053/api/city/weathercoord/${lon}/${lat}`).then(
          weather => {
            this.setState({
              weather: weather.data,
              cityName: weather.data.name
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
        // forecast
        Axios(
          `https://flafi.me:2053/api/city/forecastcoord/${lon}/${lat}`
        ).then(
          forecast => {
            this.setState({
              forecast: forecast.data.list,
              isLoaded: true
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
      },
    );
  };

  downloadWeather(id) {
    this.setState({
      isLoaded: false
    });
    Axios(`https://flafi.me:2053/api/city/weather-${id}`).then(
      weather => {
        this.setState({ weather: weather.data[0] });
        const {name} = weather.data[0];
        this.setState({ cityName: name });
      },
      error => {
        this.setState({ error });
      }
    );
    Axios(`https://flafi.me:2053/api/city/forecast-${id}`).then(
      forecast => {
        this.setState({ forecast: forecast.data[0].list, isLoaded: true });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }


  render() {
    const { isLoaded, error, weather, forecast, cityName } = this.state;
const spinner =         (
  <div className="d-flex justify-content-center align-middle">
    <Spinner color="primary" />
  </div>
)
    if (error) {
      return <div>Error</div>;
    } 
      return (
        <div className="container">
          <div className="d-flex justify-content-between">
            <Button
              className="my-3"
              color="success"
              href="https://flafi.me/#jscript"
            >
      Back to the website
            </Button>
            <Button
              className="my-3"
              color="primary"
              href="https://github.com/Flafi87/weatherforecast"
            >
      Repo
            </Button>
          </div>
          <div className="jumbotron">
            <h1 className="text-center">
              Current Weather
            </h1>
            <div className="text-center">
              <h2><Badge color="secondary">{cityName}</Badge></h2>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
              <Button
                className="m-3"
                onClick={() => this.downloadWeather(Warszawa)}
              >
                Warszawa
              </Button>
              <Button
                className="m-3"
                onClick={() => this.downloadWeather(Kiskunmajsa)}
              >
                Kiskunmajsa
              </Button>
              <Button
                className="m-3"
                onClick={() => this.downloadWeather(Budapest)}
              >
                Budapest
              </Button>
              <Button
                className="m-3"
                onClick={this.checkWeatherByCoord}
              >
                Check My Location
              </Button>
            </div>
            {isLoaded ? <Header weather={weather} /> : spinner }
          </div>
          <div className="text-center">
            <h1 className="mb-4">Weather Forecast</h1>
            {isLoaded ? <ForecastList forecast={forecast} /> : spinner}
          </div>
        </div>
      );
    
  }
}

export default App;
