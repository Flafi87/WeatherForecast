import React from 'react';
import { dataCalc, dayCalc, theDay } from '../helperFunctions'
import ForecastListItem from "./ForecastListItem";




const ForecastItems = ({ forecast }) => {
    const days = dayCalc(forecast)
    const myData = dataCalc(forecast)
    return (
        days.map(object => {
            return (
              <ForecastListItem
                key={object}
                dayNumber={object}
                dayName={theDay(object)}
                allData={myData}
              />
            );
        })
    )
}

export default ForecastItems