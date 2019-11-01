angular.module('app', [
	'ngRoute',
	'app.controllers',
	'ngSanitize'
]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'themes/caminar/templates/posts.html',
		controller: 'PostsController'

	}).when('/posts/byauthor/:author_id', {
		templateUrl: 'themes/caminar/templates/posts.html',
		controller: 'PostsByAurhorController'

	}).when('/categories/posts/:cat_id', {
		templateUrl: 'themes/caminar/templates/posts.html',
		controller: 'PostsByCategoryController'

	}).when('/posts/search', {
		templateUrl: 'themes/caminar/templates/posts.html',
		controller: 'PostsSearchController'

	}).when('/:slug', {
		templateUrl: 'themes/caminar/templates/singlepost.html',
		controller: 'SinglePostController'

	}).when('/comments/create/', {
		templateUrl: 'themes/caminar/templates/singlepost.html',
		controller: 'PostCommentController'

	}).when('/pages/page/:id', {
		templateUrl: 'themes/caminar/templates/page.html',
		controller: 'PageController'
		
	}).otherwise({
		redirectTo: '/'
	})

	// Enable HTML5 mode
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: true
	});

}])

// Date parser filter
.filter('dateParse', function() {
  return function(date) {
    return Date.parse(date);
  };
});




