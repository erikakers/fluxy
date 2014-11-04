var Cart = React.createClass({
  mixins: [Reflux.ListenerMixin],

  componentDidMount: function() {
    this.listenTo(App.Stores.Cart, this.onCartChange);
  },

  getInitialState: function() {
    return App.Utils.Cart.cartItems();
  },

  onCartChange: function() {
    this.setState(App.Utils.Cart.cartItems())
  },

  render: function() {
    var total = 0;
    var items = this.state.items.map(function(item, i){
      var subtotal = item.cost * item.qty;
      total += subtotal;
      return (
        <tr key={i}>
          <td><RemoveItem index={i} /></td>
          <td>{item.title}</td>
          <td>{item.qty}</td>
          <td>
            <IncreaseItem index={i} />
            <DecreaseItem index={i} />
          </td>
          <td>${subtotal}</td>
        </tr>
      )
    })
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Qty</th>
            <th></th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right">Total</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    )
  }
});

React.render(
  <Cart />,
  document.getElementById('cart')
)
