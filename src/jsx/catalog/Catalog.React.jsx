var Catalog = React.createClass({
  getInitialState: function() {
    return App.Utils.Cart.getCatalog();
  },

  render: function() {
    var items = this.state.items.map(function(item) {
      return <tr><td>{item.title}</td><td>${item.cost}</td><td><AddToCart item={item} /></td></tr>
    })
    return (
      <table className="table table-striped">
      {items}
      </table>
    )
  }
});

React.render(
  <Catalog />,
  document.getElementById('catalog')
)
