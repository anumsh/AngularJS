function postCtrl ($scope, $routeParams) {
    $scope.title = "Error";
    $scope.content = "No post with that number";
    
    $scope.postId = $routeParams.postId;
    switch ($routeParams.postId) {
        case '1':
            $scope.title = "Hello world";
            $scope.content = "This is my first post";
            break;
        case '2':
            $scope.title = "Post no 2";
            $scope.content = "This is my second post";
            break;
        case '3':
            $scope.title = "Last post";
            $scope.content = "Bye";
            break;
    }
}
