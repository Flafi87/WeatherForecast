import React from 'react';
import {Badge} from 'reactstrap';

  const Header =(props) =>{
    let temp;
    let humidity;
    let visibility;
    let cloudiness;
    let sunrise;
    let sunrisetime;
    let sunset;
    let sunsettime;
    let weatherCondition;

    if(typeof props.weather === typeof undefined || props.weather === null){
      return (
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      )
    }else{
      let weatherdata = props.weather;
      //console.log(weatherdata)
      temp = weatherdata.main.temp;
      humidity = weatherdata.main.humidity;
      visibility = weatherdata.visibility;
      cloudiness =weatherdata.clouds.all;
      sunrise = new Date(weatherdata.sys.sunrise*1000);
      sunrisetime = sunrise.getHours() + ':' + ('0' + sunrise.getMinutes()).slice(-2);
      sunset = new Date(weatherdata.sys.sunset*1000);
      sunsettime = sunset.getHours() + ':' + ('0' + sunset.getMinutes()).slice(-2);
      weatherCondition =`owf owf-${weatherdata.weather[0].id} owf-5x`;
      
    return(
      <div>
        <div className="text-center" id="weather">
          <div className={weatherCondition} id="weather_1" />
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          <Badge className="m-3" id="temperature" color="info">
            <div className="m-1">
              <h4>Temperature</h4>
              {temp}
              {' '}
C°
            </div>

          </Badge>
          <Badge className="m-3" id="humidity" color="info">
            <div className="m-1">
              <h4>Humidity</h4>
              {humidity}
%
            </div>

          </Badge>
          <Badge className="m-3" id="visibility" color="info">
            <div className="m-1">
              <h4>Visibility</h4>
              {visibility}
m
            </div>

          </Badge>
          <Badge className="m-3" id="clouds" color="info">
            <div className="m-1">
              <h4>Cloudiness</h4>
              {cloudiness}
%
            </div>

          </Badge>
          <Badge className="m-3" id="sunrise" color="info">
            <div className="m-1">
              <h4>Sunrise</h4>
              {sunrisetime}
            </div>
          </Badge>
          <Badge className="m-3" id="sunset" color="info">
            <div className="m-1">
              <h4>Sunset</h4>
              {sunsettime}
            </div>
          </Badge>
        </div>
      </div>
    )
    }
  }

export default Header;