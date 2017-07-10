function timerCtrl ($scope,$interval) {
    $scope.seconds = 0;
     $interval(increment(),1000);

}
function increment($scope) {
    $scope