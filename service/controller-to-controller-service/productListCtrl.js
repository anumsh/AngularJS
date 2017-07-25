angular.module('shopApp').
  controller('productListCtrl', function ($scope, Cart) {
    $scope.products = [
        {name: "Keyboard"},
        {name: "Mouse"},
        {name: "Printer"}];

    $scope.addToCart = function (product) {
        Cart.addProduct(product);
    };
});
