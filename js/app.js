angular.module('app', [
	'ngRoute',
	'app.controllers',
	'ngSanitize'
]).config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'templates/posts.html',
		controller: 'PostsController'

	}).when('/posts/byauthor/:author_id', {
		templateUrl: 'templates/posts.html',
		controller: 'PostsByAurhorController'

	}).when('/categories/posts/:cat_id', {
		templateUrl: 'templates/posts.html',
		controller: 'PostsByCategoryController'

	}).when('/:slug', {
		templateUrl: 'templates/singlepost.html',
		controller: 'SinglePostController'
		
	}).when('/pages/page/:id', {
		templateUrl: 'templates/page.html',
		controller: 'PageController'
	}).otherwise({
		redirectTo: '/'
	});
}])

// Date parser filter
.filter('dateParse', function() {
  return function(date) {
    return Date.parse(date);
  };
});




