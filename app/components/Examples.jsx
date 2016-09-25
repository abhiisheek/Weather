var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are few examples locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Mysore'>Mysore, IN</Link>
        </li>
        <li>
          <Link to='/?location=Bangalore'>Bangalore, IN</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
