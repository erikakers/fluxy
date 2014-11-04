var Cart = React.createClass({displayName: 'Cart',
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
        React.createElement("tr", {key: i}, 
          React.createElement("td", null, React.createElement(RemoveItem, {index: i})), 
          React.createElement("td", null, item.title), 
          React.createElement("td", null, item.qty), 
          React.createElement("td", null, 
            React.createElement(IncreaseItem, {index: i}), 
            React.createElement(DecreaseItem, {index: i})
          ), 
          React.createElement("td", null, "$", subtotal)
        )
      )
    })
    return (
      React.createElement("table", {className: "table table-striped"}, 
        React.createElement("thead", null, 
          React.createElement("tr", null, 
            React.createElement("th", null), 
            React.createElement("th", null, "Item"), 
            React.createElement("th", null, "Qty"), 
            React.createElement("th", null), 
            React.createElement("th", null, "Subtotal")
          )
        ), 
        React.createElement("tbody", null, 
          items
        ), 
        React.createElement("tfoot", null, 
          React.createElement("tr", null, 
            React.createElement("td", {colSpan: "4", className: "text-right"}, "Total"), 
            React.createElement("td", null, "$", total)
          )
        )
      )
    )
  }
});

React.render(
  React.createElement(Cart, null),
  document.getElementById('cart')
)
