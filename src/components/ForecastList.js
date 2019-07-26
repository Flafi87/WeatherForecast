import React from "react";
import PropTypes from 'prop-types';
import ForecastListItem from "./ForecastListItem";
import TempChart from "./TempChart";

const ForecastList = props => {
  const {forecast} = props
  function theDay(day) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return days[day];
  }
if (
    forecast !== null &&
    typeof forecast !== typeof undefined
  ) {
    const days = [];
    const modData = [];
    const myData = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
    forecast.forEach((object) => {
      const temp = object;
      const myDate = new Date(temp.dt * 1000).getDay();
      temp.day = myDate;
      modData.push(temp);
      myData[myDate].push(temp);
      if (!days.includes(myDate)) {
        days.push(myDate);
      }
    });

    const forecastItems = days.map(object => {
      return (
        <ForecastListItem
          key={object}
          dayNumber={object}
          dayName={theDay(object)}
          allData={myData}
        />
      );
    });

    // Giving the name of the day. 0 is sunday 1 monday ...

    return (
      <div>
        <div id="forecast_list" className="row">{forecastItems}</div>
        <div id="tempChart" className="">
          <TempChart forecast={forecast} />
        </div>
      </div>
    );
  }
};

ForecastList.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.object)
}

export default ForecastList;
