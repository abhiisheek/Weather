var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <p>Its {temp} in {location}</p>
  );
}

module.exports = WeatherMessage;
