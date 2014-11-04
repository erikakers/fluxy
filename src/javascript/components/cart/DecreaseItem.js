var DecreaseItem = React.createClass({displayName: 'DecreaseItem',
  handleClick: function() {
    App.Actions.Cart.decreaseItem(this.props.index);
  },

  render: function() {
    return React.createElement("button", {onClick: this.handleClick}, "-")
  }
});
