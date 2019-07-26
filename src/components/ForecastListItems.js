import React from 'react';
import { ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

const ForecastListItems = ({time, temperature, condition}) => {
    let date = new Date(time * 1000);
    let hour = date.getHours();
    let temp = Math.floor(temperature);
    let weather = `owf owf-${condition} text-center owf-1x mb-1`
    
    return(
      <ListGroupItem className={weather}>
        {hour}
:00
        {' '}
        {temp}
C°      
      </ListGroupItem>
    )
}

ForecastListItems.propTypes = {
    time: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
    condition: PropTypes.number.isRequired,
}

export default ForecastListItems;