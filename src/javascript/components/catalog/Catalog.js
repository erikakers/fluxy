var Catalog = React.createClass({displayName: 'Catalog',
  getInitialState: function() {
    return App.Utils.Cart.getCatalog();
  },

  render: function() {
    var items = this.state.items.map(function(item) {
      return React.createElement("tr", null, React.createElement("td", null, item.title), React.createElement("td", null, "$", item.cost), React.createElement("td", null, React.createElement(AddToCart, {item: item})))
    })
    return (
      React.createElement("table", {className: "table table-striped"}, 
      items
      )
    )
  }
});

React.render(
  React.createElement(Catalog, null),
  document.getElementById('catalog')
)
