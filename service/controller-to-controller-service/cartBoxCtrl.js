angular.module('shopApp').
  controller('cartBoxCtrl', function ($scope, Cart){
    $scope.cart = Cart.cartContent;
});
