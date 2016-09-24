var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;
    var isLoading = true;
    that.setState({isLoading});
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
        isLoading
      });
      alert(err);
    });
  },
  render: function() {
    var {location, temp, isLoading} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching Weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
