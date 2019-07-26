import React from 'react';
import {Col , ListGroup} from 'reactstrap';
import PropTypes from 'prop-types';
import ForecastListItems from './ForecastListItems';

const ForecastListItem = ({dayNumber, dayName, allData}) => {
    const dayNumber1 = `day_${dayNumber}`
    const getForecastListItems = allData[dayNumber].map(object => {
        return(
          <ListGroup className="" key={object.dt}>
            <ForecastListItems className="mx-auto d-block" key={object.dt} time={object.dt} temperature={object.main.temp} condition={object.weather[0].id} />
          </ListGroup>
          
        )
    })
    return(
      <Col className="d-flex flex-column" id={dayNumber1}>
        <h4 className="text-center">{dayName}</h4>
        {getForecastListItems}
      </Col>

    )
}

ForecastListItem.propTypes = {
    dayNumber: PropTypes.number.isRequired,
    dayName: PropTypes.string.isRequired,
    allData: PropTypes.objectOf(PropTypes.array).isRequired,
}

export default ForecastListItem;