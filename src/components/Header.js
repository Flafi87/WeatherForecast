import React from 'react';
import {Badge} from 'reactstrap';
import PropTypes from 'prop-types';



  const Header =({weather}) =>{
      const weatherdata = weather;
      const {temp} = weatherdata.main;
      const {humidity} = weatherdata.main;
      const {visibility} = weatherdata;
      const cloudiness =weatherdata.clouds.all;
      const sunrise = new Date(weatherdata.sys.sunrise*1000);
      const sunrisetime = `${sunrise.getHours()  }:${  (`0${  sunrise.getMinutes()}`).slice(-2)}`;
      const sunset = new Date(weatherdata.sys.sunset*1000);
      const sunsettime = `${sunset.getHours()  }:${  (`0${  sunset.getMinutes()}`).slice(-2)}`;
      const weatherCondition =`owf owf-${weatherdata.weather[0].id} owf-5x`;
      
    return(
      <div>
        <div className="text-center">
          <div className={weatherCondition}  />
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          <Badge className="m-3" id="temperature" color="info">
            <div className="m-1">
              <h5>Temperature</h5>
              <h5>
                {temp}
                {' '}
C°
              </h5>
            </div>

          </Badge>
          <Badge className="m-3" id="humidity" color="info">
            <div className="m-1">
              <h5>Humidity</h5>
              <h5>              
                {' '}
                {humidity}
%
              </h5>
            </div>

          </Badge>
          <Badge className="m-3" id="visibility" color="info">
            <div className="m-1">
              <h5>Visibility</h5>
              <h5>
                {visibility}
m
              </h5>
            </div>

          </Badge>
          <Badge className="m-3" id="clouds" color="info">
            <div className="m-1">
              <h5>Cloudiness</h5>
              <h5>
                {cloudiness}
%
              </h5>
            </div>

          </Badge>
          <Badge className="m-3" id="sunrise" color="info">
            <div className="m-1">
              <h5>Sunrise</h5>
              <h5>
                {sunrisetime}
              </h5>
            </div>
          </Badge>
          <Badge className="m-3" id="sunset" color="info">
            <div className="m-1">
              <h5>Sunset</h5>
              <h5>
                {sunsettime}
              </h5>
            </div>
          </Badge>
        </div>
      </div>
    )
  }

  Header.propTypes = {
    weather: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.object)
    ])).isRequired
  }

export default Header;