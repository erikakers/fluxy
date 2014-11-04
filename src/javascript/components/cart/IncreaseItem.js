var IncreaseItem = React.createClass({displayName: 'IncreaseItem',
  handleClick: function() {
    App.Actions.Cart.increaseItem(this.props.index);
  },

  render: function() {
    return React.createElement("button", {onClick: this.handleClick}, "+")
  }
});
