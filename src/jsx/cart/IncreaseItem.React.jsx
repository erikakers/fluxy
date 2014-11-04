var IncreaseItem = React.createClass({
  handleClick: function() {
    App.Actions.Cart.increaseItem(this.props.index);
  },

  render: function() {
    return <button onClick={this.handleClick}>+</button>
  }
});
