import React from 'react';
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

const ForecastListItems = ({ time, temperature, condition }) => {
  const date = new Date(time * 1000);
  const hour = date.getHours();
  const temp = Math.floor(temperature);
  const weather = `owf owf-${condition} text-center owf-2x py-0`

  return (
    <ListGroupItem className="py-1 px-1 align-middle">
      <span className={weather} />
      <div className="d-flex justify-content-around">
        <p className="py-0 my-0">
          {hour}
          :00
        </p>
        <p className="py-0 my-0">
          {' '}
          {temp}
          C°
          {' '}
        </p>
      </div>
    </ListGroupItem>
  )
}

ForecastListItems.propTypes = {
  time: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  condition: PropTypes.number.isRequired,
}

export default ForecastListItems;