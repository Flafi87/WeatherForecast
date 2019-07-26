import React from 'react';
import {Badge} from 'reactstrap';



  const Header =(props) =>{

    const {weather} = props

    if(typeof weather === typeof undefined || weather === null){
      return (
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      )
    }
      const weatherdata = weather;
      // console.log(weatherdata)
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
              <h4>Temperature</h4>
              <h3>
                {temp}
                {' '}
C°
              </h3>
            </div>

          </Badge>
          <Badge className="m-3" id="humidity" color="info">
            <div className="m-1">
              <h4>Humidity</h4>
              <h3>              
                {' '}
                {humidity}
%
              </h3>
            </div>

          </Badge>
          <Badge className="m-3" id="visibility" color="info">
            <div className="m-1">
              <h4>Visibility</h4>
              <h3>
                {visibility}
m
              </h3>
            </div>

          </Badge>
          <Badge className="m-3" id="clouds" color="info">
            <div className="m-1">
              <h4>Cloudiness</h4>
              <h3>
                {cloudiness}
%
              </h3>
            </div>

          </Badge>
          <Badge className="m-3" id="sunrise" color="info">
            <div className="m-1">
              <h4>Sunrise</h4>
              <h3>
                {sunrisetime}
              </h3>
            </div>
          </Badge>
          <Badge className="m-3" id="sunset" color="info">
            <div className="m-1">
              <h4>Sunset</h4>
              <h3>
                {sunsettime}
              </h3>
            </div>
          </Badge>
        </div>
      </div>
    )
  }

export default Header;