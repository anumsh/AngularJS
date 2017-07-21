angular.module('blogApp', ['ngRoute'])
    // Setting configuration for application
    .config(function ($routeProvider) {
        $routeProvider
	    .when('/post/:postId', {
            	controller: postCtrl,
            	templateUrl: 'post.html'
        });
        
    })
    // Ignore code below. This is usually in seperate html files
    .run(function ($templateCache){
        $templateCache.put('post.html', '<p>Post number: {{postId}}</p><h1>{{title}}!</h1><p>{{content}}</p>');
    });
