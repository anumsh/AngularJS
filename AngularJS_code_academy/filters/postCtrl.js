angular.module('blogApp').
  controller('postCtrl', function ($scope){
    var content = "Lorem ipsum dolor sit amet, consectetur adipiscing " +
      "elit. Pellentesque at nunc quis est blandit mattis. Sed molestie " +
      "massa non metus convallis molestie. Nunc tincidunt eros in nisi " +
      "ultrices placerat. Mauris tristique nibh non luctus scelerisque. " +
      "Sed malesuada dignissim elit, ut semper lectus adipiscing ac. " +
      "Phasellus quis enim tincidunt, ultrices erat vitae, varius " +
      "libero. Donec congue nulla sed ante facilisis dapibus. Praesent " +
      "fermentum orci vitae urna ullamcorper, nec vulputate tortor " +
      "rhoncus. In faucibus ipsum tortor. Phasellus eu lorem odio.";
      
    $scope.posts = 
        [{date: 1288100000000, title: "First post", content: content},
        {date: 1288400000000, title: "Post number two", content: content},
        {date: 1288700000000, title: "Last post", content: content}];
});
