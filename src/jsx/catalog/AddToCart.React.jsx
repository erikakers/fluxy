var AddToCart = React.createClass({
  handleClick: function() {
    App.Actions.Cart.addItem(this.props.item);
  },

  render: function() {
    return <button onClick={this.handleClick}>Add To Cart</button>
  }
});
