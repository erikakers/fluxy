var RemoveItem = React.createClass({
  handleClick: function() {
    App.Actions.Cart.removeItem(this.props.index);
  },

  render: function() {
    return <button onClick={this.handleClick}>x</button>
  }
});
