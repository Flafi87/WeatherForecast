const checker = x => {
  if (x.rain && x.rain['3h'] !== undefined) {
    return x.rain['3h'];
  }
  return 0;
};

export const temperatureArray = forecast => {
  const array = [];
  forecast.forEach((object) => {
    array.push([object.dt * 1000, object.main.temp]);
  });
  return array;
};

export const rainArray = forecast => {
  const array = [];
  forecast.forEach((object) => {
    array.push([object.dt * 1000, checker(object)]);
  });
  return array;
};
/**
 * @param  {number} day
 * @returns {string} Returning the name of the day
 */
export const theDay = (day) => {
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

/**  DayCalc
 * @param  {object} forecast
 * @returns {Array} Returning the days in order which we have forecast for
 */
export const dayCalc = (forecast) => {
  const days = [];
  forecast.forEach((object) => {
    const temp = object;
    const myDate = new Date(temp.dt * 1000).getDay();
    temp.day = myDate;
    if (!days.includes(myDate)) {
      days.push(myDate);
    }
  });
  return days
}
/**
 * @param  {} forecast
 * @returns {Object} return data in order by days of the week
 */
export const dataCalc = (forecast) => {
  const myData = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
  forecast.forEach((object) => {
    const temp = object;
    const myDate = new Date(temp.dt * 1000).getDay();
    temp.day = myDate;
    myData[myDate].push(temp);
  });
  return myData
}

