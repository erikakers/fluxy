App.Stores.Cart = Reflux.createStore({

    listenables: App.Actions.Cart,

    addItem: function(item) {
      if( !item.inCart ){
        item['qty'] = 1;
        item['inCart'] = true;
        _cartItems.push(item);
      }
      else {
        _cartItems.forEach(function(cartItem, i){
          if( cartItem.id === item.id ){
            App.Utils.Cart.increaseItem(i);
          }
        });
      }
      this.trigger();
    },

    removeItem: function(index) {
      _cartItems[index].inCart = false;
      _cartItems.splice(index, 1);
      this.trigger();
    },

    increaseItem: function(index) {
      _cartItems[index].qty++;
      this.trigger();
    },

    decreaseItem: function(index) {
      if(_cartItems[index].qty>1){
        _cartItems[index].qty--;
      }
      else {
        App.Utils.Cart.removeItem(index);
      }
      this.trigger();
    }
});
