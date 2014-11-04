var DecreaseItem = React.createClass({
  handleClick: function() {
    App.Actions.Cart.decreaseItem(this.props.index);
  },

  render: function() {
    return <button onClick={this.handleClick}>-</button>
  }
});
