/**
 * @jsx React.DOM
 */

var TestBox = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello From React Watch!</h1>
        <p>A little p tag.</p>
      </div>
    );
  }
});

React.render(
  <TestBox />,
  document.getElementById('content')
);
