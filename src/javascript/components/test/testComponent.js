/**
 * @jsx React.DOM
 */

var TestBox = React.createClass({displayName: 'TestBox',
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Hello From React Watch!"), 
        React.createElement("p", null, "A little p tag.")
      )
    );
  }
});

React.render(
  React.createElement(TestBox, null),
  document.getElementById('content')
);
