angular.module('shopApp').
  service('Cart', function () {
    
    // hm... non intuitive
    var cartContent = [];
    
    this.cartContent = cartContent;
    
    this.addProduct = function (product) {
        cartContent.push(product);
    };
});
