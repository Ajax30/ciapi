angular.module('app', [
	'ngRoute',
	'app.controllers',
	'ngSanitize'
]).config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'themes/caminar/templates/posts.html',
		controller: 'PostsController'

	}).when('/posts/byauthor/:author_id', {
		templateUrl: 'themes/caminar/templates/posts.html',
		controller: 'PostsByAurhorController'

	}).when('/categories/posts/:cat_id', {
		templateUrl: 'themes/caminar/templates/posts.html',
		controller: 'PostsByCategoryController'

	}).when('/:slug', {
		templateUrl: 'themes/caminar/templates/singlepost.html',
		controller: 'SinglePostController'
		
	}).when('/pages/page/:id', {
		templateUrl: 'themes/caminar/templates/page.html',
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




