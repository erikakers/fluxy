var _cartItems = [];

var _catalog = [
      {id:1, title: 'Widget #1', cost: 1},
      {id:2, title: 'Widget #2', cost: 2},
      {id:3, title: 'Widget #3', cost: 3}
    ];

App.Utils.Cart = {
  removeItem: function(index) {
    _cartItems[index].inCart = false;
    _cartItems.splice(index, 1);
  },

  increaseItem: function(index) {
    _cartItems[index].qty++;
  },

  decreaseItem: function(index) {
    if(_cartItems[index].qty>1){
      _cartItems[index].qty--;
    }
    else {
      _removeItem(index);
    }
  },

  cartItems: function() {
    return {items: _cartItems}
  },

  getCatalog: function() {
    return {items: _catalog}
  }
};
