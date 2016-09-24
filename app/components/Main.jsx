var React = require('react');
var Nav = require('Nav');

var Main = ({children}) => {
  return (
    <div>
      <Nav/>
      <h2>Main Container</h2>
      {children}
    </div>
  );
}

module.exports = Main;
