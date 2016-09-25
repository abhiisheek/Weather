var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <h3 className="text-center">Its {temp} in {location}</h3>
  );
}

module.exports = WeatherMessage;
