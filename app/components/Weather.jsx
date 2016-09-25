var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;
    var isLoading = true;
    that.setState({isLoading, errorMessage: undefined});
    openWeatherMap.getTemp(location).then(function(temp){
      isLoading = false;
      that.setState({
        location,
        temp,
        isLoading
      });
    }, function(err){
      isLoading = false;
      that.setState({
        isLoading,
        errorMessage: err.message
      });
    });
  },
  render: function() {
    var {location, temp, isLoading, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
