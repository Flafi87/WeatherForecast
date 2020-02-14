import React from "react";
import PropTypes from 'prop-types';
import ForecastItems from "./ForecastItems";
import TempChart from "../chart";

const ForecastList = ({ forecast }) => {

  return (
    <div>
      <div id="forecast_list" className="row">
        <ForecastItems forecast={forecast} />
      </div>
      <TempChart forecast={forecast} />
    </div>
  );

};

ForecastList.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ForecastList;
