var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a Weather application built on React and openWeatherMap</p>
      <p>
        Here are the some of the tools used for the app:
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a>
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a>
          </li>
        </ul>
      </p>
    </div>
  );
}

module.exports = About;
