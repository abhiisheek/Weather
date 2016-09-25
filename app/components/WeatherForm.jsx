var React = require('react');

var WeatherForm = React.createClass({
  onGetWeather: function(e) {
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onGetWeather}>
        <input type='search' ref='location' placeholder="Search weather by city"/>
        <button className="button expanded hollow">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
