Movie_Store_App.service('CartService', function(){


  this.cart = [];
  this.addToCart= function(m){
    this.cart.push(m);
  }

  this.deleteFromCart = function(index){
    this.cart.splice(index, 1);
  }

});