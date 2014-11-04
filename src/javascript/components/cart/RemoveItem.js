var RemoveItem = React.createClass({displayName: 'RemoveItem',
  handleClick: function() {
    App.Actions.Cart.removeItem(this.props.index);
  },

  render: function() {
    return React.createElement("button", {onClick: this.handleClick}, "x")
  }
});
