var AddToCart = React.createClass({displayName: 'AddToCart',
  handleClick: function() {
    App.Actions.Cart.addItem(this.props.item);
  },

  render: function() {
    return React.createElement("button", {onClick: this.handleClick}, "Add To Cart")
  }
});
