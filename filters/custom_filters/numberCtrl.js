angular.module('filterApp')
  .controller('numbersCtrl', function ($scope){
    $scope.numbers = [];
    for (var i = 0; i < 100; i++) {
        var random = Math.floor(Math.random() * 100);
        $scope.numbers.push({id: i, value: random});
    }
});
